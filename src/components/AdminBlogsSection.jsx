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
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">All Blogs</h2>

          <span className="text-sm text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            {blogs.length} posts
          </span>
        </div>

        {/* States */}
        {isLoadingBlogs ? (
          <div className="text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            Loading blogs...
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            No blogs found.
          </div>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="
            group
            bg-zinc-900
            border border-zinc-800
            rounded-xl
            p-4 sm:p-5
            flex flex-col sm:flex-row
            sm:items-start sm:justify-between
            gap-4
            transition-all duration-200
            hover:border-zinc-700
            hover:bg-zinc-850
          "
              >
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 line-clamp-2">
                    {blog.blogsTitle}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {blog.blogsNews?.length > 120
                      ? `${blog.blogsNews.slice(0, 120)}...`
                      : blog.blogsNews}
                  </p>

                  {/* Optional meta feel (future-ready UX) */}
                  <div className="mt-3 text-xs text-zinc-500">
                    Click delete button to manage this post
                  </div>
                </div>

                {/* Action */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3">
                  <button
                    onClick={() => openDeleteModal(blog.id)}
                    className="
                flex items-center gap-2
                text-red-500
                hover:text-red-400
                bg-red-500/10 hover:bg-red-500/20
                border border-red-500/20
                px-3 py-2
                rounded-lg
                transition
                active:scale-95
              "
                    title="Delete Blog"
                  >
                    <FaTrash size={16} />
                    <span className="text-sm hidden sm:inline">Delete</span>
                  </button>
                </div>
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
