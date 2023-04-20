import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await prisma.video.findMany({
      where: {
        type: "youtube#video",
      },
    });
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
