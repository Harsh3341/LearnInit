import mongoose, { Schema, Model, Document } from "mongoose";

interface Video extends Document {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

const videoSchema: Schema = new Schema({
  videoId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
});

const VideoModel: Model<Video> =
  mongoose.models.Video || mongoose.model<Video>("Video", videoSchema);

export default VideoModel;
