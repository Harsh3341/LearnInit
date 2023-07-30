import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

import { redis } from "@/libs/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { q } = req.query;

    const cachedData = await redis.get(`videos:${q}`);

    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData));
    }

    const data = await prisma.video.findMany({
      where: {
        type: "youtube#video",
        category: {
          hasSome: [String(q)],
        } as any,
      },
    });

    await redis.setex(`videos:${q}`, 60 * 60 * 24, JSON.stringify(data));

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
