import fetcher from "@/libs/fetcher";
import Link from "next/link";
import useSWR from "swr";

export default function Home() {
  const { data, error } = useSWR("/api/videos", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);

  return data.map((video: any) => (
    <Link
      href={`https://www.youtube.com/watch?v=${video.videoId}`}
      key={video.id}
    >
      <div key={video.id} className="m-10 h-auto w-96">
        <img src={video.thumbnailUrl} alt="" className="rounded-xl w-96 h-56" />
        {/* <p>{video.description}</p> */}
        <h2>{video.title}</h2>
      </div>
    </Link>
  ));
}
