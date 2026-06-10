import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVideo } from "../services/apiMedia";
import toast from "react-hot-toast";

export function useDeleteVideo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, table = "videos" }) => deleteVideo({ id, table }),

    onMutate: async ({ id, table }) => {
      await queryClient.cancelQueries({ queryKey: [table] });

      const previousData = queryClient.getQueryData([table]);

      // Optimistic update
      queryClient.setQueryData([table], (old = []) =>
        old.filter((item) => item.id !== id),
      );

      toast.loading("Deleting...", { id: "delete-video" });

      return { previousData, table };
    },

    onError: (error, variables, context) => {
      toast.error(error.message || "Delete failed", {
        id: "delete-video",
      });

      // rollback
      queryClient.setQueryData([context.table], context.previousData);
    },

    onSuccess: (_, variables) => {
      toast.success("Deleted successfully", {
        id: "delete-video",
      });

      queryClient.invalidateQueries({
        queryKey: [variables.table || "videos"],
      });
    },
  });
}
