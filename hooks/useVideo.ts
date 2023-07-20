import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useVideo = (videoId: string) => {
  const { data, error } = useSWR(
    videoId ? `/api/videos/${videoId}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      refreshInterval: 30000,
    }
  );

  return {
    video: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useVideo;
