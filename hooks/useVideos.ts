import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useVideos = () => {
  const { data, error } = useSWR("/api/videos", fetcher);

  return {
    videos: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useVideos;
