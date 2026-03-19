import { useMutation } from "@tanstack/react-query";
import { addMusic } from "../services/apiMedia";
import toast from "react-hot-toast";

export const useAddMusic = () => {
  const { mutateAsync: createMusic, isPending: loading } = useMutation({
    mutationFn: addMusic,

    onSuccess: () => {
      toast.success("Music added successfully 🎵");
    },

    onError: (err) => {
      console.error(err);
      toast.error("Failed to add music");
    },
  });

  return { createMusic, loading };
};
