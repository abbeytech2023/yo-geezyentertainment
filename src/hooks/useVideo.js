import { useMutation } from "@tanstack/react-query";
import { addVideo } from "../services/apiMedia";
import toast from "react-hot-toast";

export const useAddVideo = () => {
  const { mutateAsync: createVideo, isPending: loading } = useMutation({
    mutationFn: addVideo,

    onSuccess: () => {
      toast.success("Video added successfully 🎵");
    },

    onError: (err) => {
      console.error(err);
      toast.error("Failed to add video");
    },
  });

  return { createVideo, loading };
};
