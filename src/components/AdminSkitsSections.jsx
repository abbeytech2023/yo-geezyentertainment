import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTrash } from "react-icons/fa";

import { Section } from "../components/AdminSections";
import { useAddSkitVideo } from "../hooks/useAddSkits";
import { useDeleteSkitVideo } from "../hooks/useDeleteSkitVideo";
import { useSkitVideos } from "../hooks/useFetchSkitVideos";

import DeleteModal from "./DeleteModal";

export default function AdminSkitSections({
  active,
  skitFormOpen,
  setSkitFormOpen,
}) {
  const { register, handleSubmit, reset } = useForm();

  const { addSkitVideo } = useAddSkitVideo();
  const { skitVideos } = useSkitVideos();
  const { mutate: deleteSkitVideo, isPending: isLoading } =
    useDeleteSkitVideo();

  const [selectedId, setSelectedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = async (data) => {
    addSkitVideo(data);
    reset();
  };

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedId(null);
    setModalOpen(false);
  };

  const handleDelete = () => {
    if (!selectedId) return;

    deleteSkitVideo(selectedId, {
      onSuccess: closeDeleteModal,
    });
  };

  return (
    <div>
      {active === "skits" && (
        <>
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
              placeholder="YouTube Link"
              {...register("links", { required: true })}
              className="w-full p-3 bg-zinc-800 rounded"
            />
          </Section>

          {/* Skit Videos List */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">All Skit Videos</h2>

              <span className="text-sm text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                {skitVideos.length} videos
              </span>
            </div>

            {isLoading ? (
              <div className="text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
                Loading skit videos...
              </div>
            ) : skitVideos.length === 0 ? (
              <div className="text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
                No skit videos found.
              </div>
            ) : (
              <div className="space-y-3">
                {skitVideos.map((video) => (
                  <div
                    key={video.id}
                    className="
                      group
                      bg-zinc-900
                      border border-zinc-800
                      rounded-xl
                      p-4
                      flex flex-col sm:flex-row
                      sm:items-center sm:justify-between
                      gap-3
                      hover:border-zinc-700
                      transition
                    "
                  >
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white truncate">
                        {video.title}
                      </h3>

                      <p className="text-xs text-zinc-500 mt-1">Skit Video</p>
                    </div>

                    <button
                      onClick={() => openDeleteModal(video.id)}
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
                    >
                      <FaTrash size={16} />
                      <span className="hidden sm:inline">Delete</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <DeleteModal
            isOpen={modalOpen}
            onClose={closeDeleteModal}
            onConfirm={handleDelete}
            isLoading={isLoading}
            title="Delete Skit Video"
            description="Are you sure you want to delete this skit video? This action cannot be undone."
          />
        </>
      )}
    </div>
  );
}
