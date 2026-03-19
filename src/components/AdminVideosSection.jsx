import { useForm } from "react-hook-form";
import { Section } from "./AdminSections";
import { useAddVideo } from "../hooks/useVideo";
import { toYoutubeEmbed } from "../hooks/useYoutubeEmbed";

export default function AdminVideosSection({
  active,
  videoFormOpen,
  setVideoFormOpen,
  addVideo,
}) {
  const { register, handleSubmit, reset } = useForm();
  const { createVideo } = useAddVideo();

  const onSubmit = async (data) => {
    // await addVideo(data);
    const link = toYoutubeEmbed(data.youtubeLinks);
    // console.log(data.youtubeLinks);

    console.log(link);
    createVideo({ ...data, youtubeLinks: data.youtubeLinks });

    // reset(); // clear form
    // setVideoFormOpen(false);
  };

  return (
    <div>
      {active === "videos" && (
        <Section
          title="Videos"
          formOpen={videoFormOpen}
          toggleForm={() => setVideoFormOpen(!videoFormOpen)}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Video Title"
            {...register("title", { required: true })}
            className="w-full p-3 bg-zinc-800 rounded"
          />

          <input
            type="text"
            placeholder="YouTube Link"
            {...register("youtubeLinks", { required: true })}
            className="w-full p-3 bg-zinc-800 rounded"
          />
        </Section>
      )}
    </div>
  );
}
