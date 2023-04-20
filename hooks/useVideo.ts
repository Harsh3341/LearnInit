import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useVideo = (videoId: string) => {
  const { data, error } = useSWR(
    videoId ? `/api/videos/${videoId}` : null,
    fetcher
  );

  return {
    video: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useVideo;
