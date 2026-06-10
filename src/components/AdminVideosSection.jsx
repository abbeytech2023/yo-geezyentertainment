import { useState } from "react";
import { useForm } from "react-hook-form";
import { Section } from "./AdminSections";
import { useAddVideo } from "../hooks/useVideo";
import { useDeleteVideo } from "../hooks/useDeleteVideo";
import { useFetchVideos } from "../hooks/useFetchMedia";
import DeleteModal from "./DeleteModal";

export default function AdminVideosSection({
  active,
  videoFormOpen,
  setVideoFormOpen,
}) {
  const { videos } = useFetchVideos();

  const { register, handleSubmit, reset } = useForm();
  const { createVideo, loading } = useAddVideo();
  const { mutate: deleteVideo, isPending: deleting } = useDeleteVideo();

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const onSubmit = async (data) => {
    createVideo(data);
    reset();
  };

  const openModal = (video) => {
    setSelectedVideo(video);
    setOpenDeleteModal(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setOpenDeleteModal(false);
  };

  const confirmDelete = () => {
    if (!selectedVideo) return;

    deleteVideo(
      { id: selectedVideo.id, table: "videos" },
      {
        onSuccess: () => {
          closeModal();
        },
      },
    );
  };

  return (
    <div>
      {active === "videos" && (
        <>
          {/* FORM */}
          <Section
            isLoading={loading}
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

          {/* LIST */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">All Videos</h2>

              <span className="text-sm text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                {videos.length} videos
              </span>
            </div>

            {videos.length === 0 ? (
              <p className="text-zinc-400">No videos yet.</p>
            ) : (
              <div className="space-y-3">
                {videos.map((video) => (
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
                    {/* Title */}
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white truncate">
                        {video.title}
                      </h3>

                      <p className="text-xs text-zinc-500 mt-1">
                        YouTube video
                      </p>
                    </div>

                    {/* Action */}
                    <button
                      onClick={() => openModal(video)}
                      className="
                        text-red-500
                        bg-red-500/10
                        hover:bg-red-500/20
                        border border-red-500/20
                        px-3 py-2
                        rounded-lg
                        transition
                        active:scale-95
                        self-start sm:self-auto
                      "
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* DELETE MODAL (your existing component) */}
          <DeleteModal
            isOpen={openDeleteModal}
            onClose={closeModal}
            onConfirm={confirmDelete}
            loading={deleting}
            title="Delete Video"
            description={`Are you sure you want to delete "${selectedVideo?.title}"? This action cannot be undone.`}
          />
        </>
      )}
    </div>
  );
}
