import mongoose, { ConnectOptions } from "mongoose";
import VideoModel from "@/models/video";

mongoose.connect(
  process.env.MONGODB_URI as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions
);

export default async (req: any, res: any) => {
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
    // check for existing videos
    const existingVideos = await VideoModel.find({
      videoId: { $in: videos.map((video: any) => video.videoId) },
    });

    // filter out existing videos
    const newVideos = videos.filter(
      (video: any) =>
        !existingVideos.find(
          (existingVideo: any) => existingVideo.videoId === video.videoId
        )
    );

    // insert new videos
    if (newVideos.length > 0) {
      await VideoModel.insertMany(newVideos);
    }

    res.status(200).json({ videos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
