import useVideos from "@/hooks/useVideos";
import PostItem from "./PostItem";

interface PostFeedProps {
  active: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ active }) => {
  const { videos, isLoading, isError } = useVideos(active);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  const data = randomize(videos);

  return (
    <div className="h-full w-full flex flex-wrap justify-evenly">
      {data.map((video: Record<string, any>) => (
        <PostItem key={video.id} data={video} />
      ))}
    </div>
  );
};

export default PostFeed;
function randomize(data: import(".prisma/client").Video[]) {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }

  return data;
}
