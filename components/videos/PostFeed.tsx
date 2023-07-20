import React from "react";
import useVideos from "@/hooks/useVideos";
import PostItem from "./PostItem";
import Loading from "@/components/Loading/Loading";

interface PostFeedProps {
  active: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ active }) => {
  const { videos, isLoading, isError } = useVideos(active);

  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  if (isError) {
    return <div>Error...</div>;
  }

  const shuffledData = randomize(videos);

  return (
    <div className="h-full w-full flex flex-wrap justify-evenly">
      {shuffledData.map((video: Record<string, any>) => (
        <PostItem key={video.id} data={video} />
      ))}
    </div>
  );
};

export default PostFeed;

function randomize(data: import(".prisma/client").Video[]) {
  const shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }

  return shuffledData;
}
