import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../services/apiMedia";

export function useFetchBlogs() {
  const {
    data: blogs = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  return {
    blogs,
    isLoading,
    error,
  };
}
