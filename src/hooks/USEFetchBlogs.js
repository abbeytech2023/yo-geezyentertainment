import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../services/apiMedia";
import { getBlogById } from "../services/apiMedia";

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

export function useBlog(id) {
  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });

  return { blog, isLoading, error };
}
