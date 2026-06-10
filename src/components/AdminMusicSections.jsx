import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTrash } from "react-icons/fa";

import { Section } from "../components/AdminSections";
import { useAddMusic } from "../hooks/useMusic";
import { useFetchMusic } from "../hooks/useFetchMedia";
import { useDeleteMusic } from "../hooks/useDeleteMusic";
import DeleteModal from "./DeleteModal";

export default function AdminMusicSections({
  active,
  musicFormOpen,
  setMusicFormOpen,
}) {
  const { register, handleSubmit, reset } = useForm();

  const { createMusic, isPending: isAdding } = useAddMusic();
  const { music = [], isPending: isLoadingMusic } = useFetchMusic();

  const deleteMutation = useDeleteMusic();

  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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

    deleteMutation.mutate(selectedId, {
      onSuccess: () => {
        closeDeleteModal();
      },
    });
  };

  const onSubmit = (data) => {
    createMusic(data, {
      onSuccess: () => {
        reset();
        setMusicFormOpen(false);
      },
    });
  };

  if (active !== "music") return null;

  return (
    <div>
      <Section
        title="Music"
        formOpen={musicFormOpen}
        toggleForm={() => setMusicFormOpen(!musicFormOpen)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Music Title"
          {...register("title", {
            required: "Music title is required",
          })}
          className="w-full p-3 bg-zinc-800 rounded"
        />

        <input
          type="text"
          placeholder="Audiomack Link"
          {...register("links", {
            required: "Audiomack link is required",
          })}
          className="w-full p-3 bg-zinc-800 rounded"
        />

        <button
          type="submit"
          disabled={isAdding}
          className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded"
        >
          {isAdding ? "Adding..." : "Add Music"}
        </button>
      </Section>

      {/* MUSIC LIST */}
      <div className="mt-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">All Music</h2>

          <span className="text-sm text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            {music.length} tracks
          </span>
        </div>

        {/* States */}
        {isLoadingMusic ? (
          <div className="text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            Loading music...
          </div>
        ) : music.length === 0 ? (
          <div className="text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
            No music uploaded yet.
          </div>
        ) : (
          <div className="space-y-3">
            {music.map((song) => (
              <div
                key={song.id}
                className="
            group
            bg-zinc-900
            border border-zinc-800
            rounded-xl
            p-4 sm:p-5
            flex flex-col sm:flex-row
            sm:items-center sm:justify-between
            gap-4
            transition-all duration-200
            hover:border-zinc-700
            hover:bg-zinc-850
          "
              >
                {/* Left content */}
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                    {song.title}
                  </h3>

                  <p className="text-xs text-zinc-500 mt-1">
                    Click action on the right to manage this track
                  </p>
                </div>

                {/* Right action */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => openDeleteModal(song.id)}
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
        loading={deleteMutation.isPending}
      />
    </div>
  );
}
