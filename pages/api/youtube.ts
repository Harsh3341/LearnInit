import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const key = process.env.YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=javascript&key=${key}`;
    const response = await fetch(url);
    const json = await response.json();
    const videos = json.items.map((item: any) => ({
      type: item.id.kind || "",
      videoId: item.id.videoId || item.id.playlistId || item.id.channelId || "",
      title: item.snippet.title || "",
      description: item.snippet.description || "",
      thumbnailUrl: item.snippet.thumbnails.medium.url || "",
      publishedAt: item.snippet.publishedAt || "",
      channelId: item.snippet.channelId || "",
      channelTitle: item.snippet.channelTitle || "",
    }));

    videos.forEach(async (video: any) => {
      const data = await prisma.video.findFirst({
        where: {
          videoId: video.videoId,
        },
      });

      if (!data) {
        if (video.type === "youtube#video") {
          const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&part=contentDetails&id=${video.videoId}&key=${key}`;
          const response = await fetch(url);
          const json = await response.json();
          const item = json.items[0];
          const duration = item.contentDetails.duration;
          const durationInMinutes = duration
            .replace("PT", "")
            .replace("H", ":")
            .replace("M", ":")
            .replace("S", "");
          const views = item.statistics.viewCount;
          const likes = item.statistics.likeCount;
          const favorites = item.statistics.favoriteCount;
          const comments = item.statistics.commentCount;
          const videoData = {
            ...video,
            details: {
              create: {
                duration: String(durationInMinutes),
                viewCount: views,
                likeCount: likes,
                favoriteCount: favorites,
                commentCount: comments,
              },
            },
          };
          await prisma.video.create({
            data: videoData,
          });
        } else {
          await prisma.video.create({
            data: video,
          });
        }
      }
    });

    res.status(200).json({ videos });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
