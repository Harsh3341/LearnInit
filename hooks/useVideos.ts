import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useVideos = (name: string) => {
  const url = `/api/videos?q=${name}`;
  const { data, error } = useSWR(url, fetcher);

  return {
    videos: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useVideos;
