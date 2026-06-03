import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog } from "../services/apiMedia";
import toast from "react-hot-toast";

export function useDeleteBlog() {
  const queryClient = useQueryClient();

  const { mutate: removeBlog, isLoading } = useMutation({
    mutationFn: deleteBlog,

    onSuccess: () => {
      toast.success("Blog deleted successfully");

      // refresh blogs list
      queryClient.invalidateQueries(["blogs"]);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { removeBlog, isLoading };
}
