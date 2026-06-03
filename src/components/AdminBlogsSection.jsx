import React from "react";
import { Section } from "./AdminSections";
import { useForm } from "react-hook-form";
import { useAddBlog } from "../hooks/useAddBlog";

export default function AdminBlogsSection({
  active,
  blogFormOpen,
  setBlogFormOpen,
}) {
  const { register, handleSubmit, reset } = useForm();

  const { addBlog, isAdding } = useAddBlog();

  const onSubmit = (data) => {
    addBlog(data, {
      onSuccess: () => {
        reset();
        setBlogFormOpen(false);
      },
    });
  };

  return (
    <div>
      {active === "blogs" && (
        <Section
          title="Blogs"
          formOpen={blogFormOpen}
          toggleForm={() => setBlogFormOpen(!blogFormOpen)}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Blog Title"
            {...register("blogsTitle", {
              required: "Blog title is required",
            })}
            className="w-full p-3 bg-zinc-800 rounded"
          />

          <textarea
            placeholder="Blog Content"
            {...register("blogsNews", {
              required: "Blog content is required",
            })}
            className="w-full p-3 bg-zinc-800 rounded h-64"
          />
        </Section>
      )}
    </div>
  );
}
