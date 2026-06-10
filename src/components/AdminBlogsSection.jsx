import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTrash } from "react-icons/fa";

import { Section } from "./AdminSections";
import { useAddBlog } from "../hooks/useAddBlog";
import { useFetchBlogs } from "../hooks/useFetchAllBlog";
import { useDeleteBlog } from "../hooks/useDeleteBlog";
import DeleteModal from "./DeleteModal";

export default function AdminBlogsSection({
  active,
  blogFormOpen,
  setBlogFormOpen,
}) {
  const { blogs = [], isPending: isLoadingBlogs } = useFetchBlogs();

  const { addBlog, isAdding } = useAddBlog();
  const { removeBlog, isPending: isDeleting } = useDeleteBlog();

  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setOpenModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedId(null);
    setOpenModal(false);
  };

  const confirmDelete = () => {
    if (!selectedId) return;

    removeBlog(selectedId, {
      onSuccess: () => {
        closeDeleteModal();
      },
    });
  };

  const onSubmit = (data) => {
    addBlog(data, {
      onSuccess: () => {
        reset();
        setBlogFormOpen(false);
      },
    });
  };

  if (active !== "blogs") return null;

  return (
    <div>
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

        {errors.blogsTitle && (
          <p className="text-red-500 text-sm">{errors.blogsTitle.message}</p>
        )}

        <textarea
          placeholder="Blog Content"
          {...register("blogsNews", {
            required: "Blog content is required",
          })}
          className="w-full p-3 bg-zinc-800 rounded h-64"
        />

        {errors.blogsNews && (
          <p className="text-red-500 text-sm">{errors.blogsNews.message}</p>
        )}

        <button
          type="submit"
          disabled={isAdding}
          className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded transition"
        >
          {isAdding ? "Adding..." : "Add Blog"}
        </button>
      </Section>

      {/* BLOG LIST */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">All Blogs ({blogs.length})</h2>

        {isLoadingBlogs ? (
          <p className="text-zinc-400">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-zinc-400">No blogs found.</p>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {blog.blogsTitle}
                  </h3>

                  <p className="text-zinc-400">
                    {blog.blogsNews?.length > 60
                      ? `${blog.blogsNews.slice(0, 60)}...`
                      : blog.blogsNews}
                  </p>
                </div>

                <button
                  onClick={() => openDeleteModal(blog.id)}
                  className="text-red-500 hover:text-red-400 transition h-fit"
                  title="Delete Blog"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DELETE MODAL */}
      <DeleteModal
        isOpen={openModal}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        loading={isDeleting}
      />
    </div>
  );
}
