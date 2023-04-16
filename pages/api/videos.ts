import { NextApiRequest, NextApiResponse } from "next";
import mongoose, { ConnectOptions } from "mongoose";
import VideoModel from "@/models/video";

mongoose.connect(
  process.env.MONGODB_URI as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await VideoModel.find({});
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
