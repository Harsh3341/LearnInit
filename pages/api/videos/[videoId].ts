import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const videoId = req.query.videoId as string;

    if (!videoId) {
      return res.status(400).json({ message: "Video ID is required" });
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

    res.status(200).json(video);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
