import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { q } = req.query;
    const data = await prisma.video.findMany({
      where: {
        type: "youtube#video",
        category: {
          hasSome: [String(q)],
        } as any,
      },
    });
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
