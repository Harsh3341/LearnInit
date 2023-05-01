import Link from "next/link";
import useVideo from "@/hooks/useVideo";
import Image from "next/image";
import MyLoader from "@/components/MyLoader";

interface PostItemProps {
  data: Record<string, any>;
}

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  const { video, isLoading, isError } = useVideo(data.videoId);

  if (isLoading) {
    return <MyLoader />;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <Link
      href={`https://www.youtube.com/watch?v=${data.videoId}`}
      key={data.id}
    >
      <div key={data.id} className="md:mx-4 my-5 h-auto sm:w-96 w-full">
        <div className="relative">
          <Image
            src={data.thumbnailUrl}
            alt=""
            className="rounded-xl w-96 h-56 shadow-md transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-200"
            width={960}
            height={960}
            placeholder="blur"
            blurDataURL={data.thumbnailUrl}
          />
          <span className="bg-black text-white rounded-md absolute right-2 bottom-2 bg-opacity-80 p-1">
            {video.details.duration}
          </span>
        </div>
        <h2 className="text-lg font-bold">{data.title}</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={data.thumbnailUrl}
              alt=""
              className="rounded-full w-8 h-8"
              width={100}
              height={100}
            />
            <p className="text-sm text-gray-500">{data.channelTitle}</p>
          </div>
          <div className="flex gap-2 items-center bg-white bg-opacity-20 rounded-3xl p-1 hover:cursor-pointer border border-black/20 shadow-inner">
            <p className="text-sm">{data.category[0]}</p>
          </div>
          <p className="text-sm text-gray-500">
            {video.details.viewCount} views
          </p>
        </div>
      </div>
    </Link>
  );
};
export default PostItem;
