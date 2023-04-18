import Link from "next/link";

interface PostItemProps {
  data: Record<string, any>;
}

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  return (
    <Link
      href={`https://www.youtube.com/watch?v=${data.videoId}`}
      key={data.id}
    >
      <div key={data.id} className="mx-7 my-5 h-auto w-96">
        <img src={data.thumbnailUrl} alt="" className="rounded-xl w-96 h-56" />
        {/* <p>{video.description}</p> */}
        <h2>{data.title}</h2>
      </div>
    </Link>
  );
};

export default PostItem;
