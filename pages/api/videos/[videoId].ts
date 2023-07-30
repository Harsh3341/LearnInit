import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";
import { redis } from "@/libs/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const videoId = req.query.videoId as string;

    if (!videoId) {
      return res.status(400).json({ message: "Video ID is required" });
    }

    const cachedData = await redis.get(`video:${videoId}`);

    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData));
    }

    const data = await prisma.video.findUnique({
      where: {
        videoId: videoId,
      },
    });

    if (!data) {
      return res.status(404).json({ message: "Video not found" });
    }

    const detailedData = await prisma.videoDetails.findUnique({
      where: {
        videoId: videoId,
      },
    });

    if (!detailedData) {
      return res.status(404).json({ message: "Video details not found" });
    }

    const video = {
      ...data,
      details: detailedData,
    };

    redis.setex(`video:${videoId}`, 60 * 60 * 24, JSON.stringify(video));

    res.status(200).json(video);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
