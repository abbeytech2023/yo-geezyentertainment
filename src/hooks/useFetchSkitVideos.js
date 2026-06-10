import { useQuery } from "@tanstack/react-query";
import { getSkitVideos } from "../services/apiMedia";

export function useSkitVideos() {
  const {
    data: skitVideos = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["skitsvideos"],
    queryFn: getSkitVideos,
  });

  return {
    skitVideos,
    isPending,
    error,
  };
}
