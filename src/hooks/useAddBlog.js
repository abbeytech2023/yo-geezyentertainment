import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBlog } from "../services/apiMedia";

export function useAddBlog() {
  const queryClient = useQueryClient();

  const {
    mutate: addBlog,
    mutateAsync: addBlogAsync,
    isPending: isAdding,
    error,
  } = useMutation({
    mutationKey: ["add-blog"],
    mutationFn: createBlog,

    onSuccess: () => {
      toast.success("Blog added successfully");

      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },

    onError: (error) => {
      toast.error(error?.message || "Failed to add blog");
    },
  });

  return {
    addBlog,
    addBlogAsync,
    isAdding,
    error,
  };
}
