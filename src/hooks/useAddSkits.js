import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSkitVideo } from "../services/apiMedia";
import toast from "react-hot-toast";

export function useAddSkitVideo() {
  const queryClient = useQueryClient();

  const {
    mutate: addSkitVideo,
    isPending,
    error,
  } = useMutation({
    mutationFn: createSkitVideo,

    onSuccess: () => {
      toast.success("Skit video added successfully");

      queryClient.invalidateQueries({
        queryKey: ["skitsvideos"],
      });
    },

    onError: (err) => {
      toast.error(err.message || "Failed to add skit video");
    },
  });

  return {
    addSkitVideo,
    isPending,
    error,
  };
}
