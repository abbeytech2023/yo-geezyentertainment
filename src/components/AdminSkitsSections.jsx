import { useForm } from "react-hook-form";
import { Section } from "../components/AdminSections";
import { useAddMusic } from "../hooks/useMusic";
import { useAddSkitVideo } from "../hooks/useAddSkits";

export default function AdminSkitSections({
  active,
  skitFormOpen,
  setSkitFormOpen,
}) {
  const { register, handleSubmit, reset } = useForm();
  const { addSkitVideo } = useAddSkitVideo();

  const onSubmit = async (data) => {
    addSkitVideo({ ...data, links: data.links, title: data.title });

    reset(); // clear form after submit
  };

  return (
    <div>
      {active === "skits" && (
        <Section
          title="Skit Videos"
          formOpen={skitFormOpen}
          toggleForm={() => setSkitFormOpen(!skitFormOpen)}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Skit Title"
            {...register("title", { required: true })}
            className="w-full p-3 bg-zinc-800 rounded"
          />

          <input
            type="text"
            placeholder="youtube Link"
            {...register("links", { required: true })}
            className="w-full p-3 bg-zinc-800 rounded"
          />
        </Section>
      )}
    </div>
  );
}
