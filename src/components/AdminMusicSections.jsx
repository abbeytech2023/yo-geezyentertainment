import { useForm } from "react-hook-form";
import { Section } from "../components/AdminSections";
import { useAddMusic } from "../hooks/useMusic";

export default function AdminMusicSections({
  active,
  musicFormOpen,
  setMusicFormOpen,
  addMusic,
}) {
  const { register, handleSubmit, reset } = useForm();
  const { createMusic } = useAddMusic();

  const onSubmit = async (data) => {
    console.log(data.links);

    createMusic({ ...data, links: data.links });

    reset(); // clear form after submit
    // setMusicFormOpen(false);
  };

  return (
    <div>
      {active === "music" && (
        <Section
          title="Music"
          formOpen={musicFormOpen}
          toggleForm={() => setMusicFormOpen(!musicFormOpen)}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Music Title"
            {...register("title", { required: true })}
            className="w-full p-3 bg-zinc-800 rounded"
          />

          <input
            type="text"
            placeholder="Audiomack Link"
            {...register("links", { required: true })}
            className="w-full p-3 bg-zinc-800 rounded"
          />
        </Section>
      )}
    </div>
  );
}
