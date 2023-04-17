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
      videoId: item.id.videoId || item.id.playlistId || item.id.channelId || "",
      title: item.snippet.title || "",
      description: item.snippet.description || "",
      thumbnailUrl: item.snippet.thumbnails.medium.url || "",
    }));

    videos.forEach(async (video: any) => {
      const data = await prisma.video.findFirst({
        where: {
          videoId: video.videoId,
        },
      });
      if (!data) {
        await prisma.video.create({
          data: video,
        });
      }
    });

    res.status(200).json({ message: "Success" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
