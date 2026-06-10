// hooks/useDeleteMusic.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMusic } from "../services/apiMedia";
import toast from "react-hot-toast";

export function useDeleteMusic() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteMusic(id),

    onMutate: () => {
      toast.loading("Deleting music...", { id: "delete-music" });
    },

    onSuccess: () => {
      toast.success("Music deleted successfully", { id: "delete-music" });

      // refresh music list cache
      queryClient.invalidateQueries({ queryKey: ["music"] });
    },

    onError: (error) => {
      toast.error(error.message || "Failed to delete music", {
        id: "delete-music",
      });
    },
  });
}
