import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSkitVideo } from "../services/apiMedia";
import toast from "react-hot-toast";

export function useDeleteSkitVideo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteSkitVideo(id),

    onMutate: () => {
      toast.loading("Deleting skit video...", {
        id: "delete-skit-video",
      });
    },

    onSuccess: () => {
      toast.success("Skit video deleted successfully", {
        id: "delete-skit-video",
      });

      // refresh skit videos list
      queryClient.invalidateQueries({
        queryKey: ["skitVideo"],
      });
    },

    onError: (error) => {
      toast.error(error.message || "Failed to delete skit video", {
        id: "delete-skit-video",
      });
    },
  });
}
