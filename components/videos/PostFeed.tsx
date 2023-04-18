import useVideos from "@/hooks/useVideos";
import PostItem from "./PostItem";

const PostFeed = () => {
  const { videos, isLoading, isError } = useVideos();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="h-full w-full flex flex-wrap">
      {videos.map((video: Record<string, any>) => (
        <PostItem key={video.id} data={video} />
      ))}
    </div>
  );
};

export default PostFeed;
