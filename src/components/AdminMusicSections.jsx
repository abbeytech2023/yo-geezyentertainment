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
        <h2 className="text-2xl font-bold mb-6">All Music ({music.length})</h2>

        {isLoadingMusic ? (
          <p className="text-zinc-400">Loading music...</p>
        ) : music.length === 0 ? (
          <p className="text-zinc-400">No music uploaded yet.</p>
        ) : (
          <div className="space-y-4">
            {music.map((song) => (
              <div
                key={song.id}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold">{song.title}</h3>

                  <p className="text-zinc-400">
                    {song.links?.length > 50
                      ? `${song.links.slice(0, 50)}...`
                      : song.links}
                  </p>
                </div>

                <button
                  onClick={() => openDeleteModal(song.id)}
                  className="text-red-500 hover:text-red-400"
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
        loading={deleteMutation.isPending}
      />
    </div>
  );
}
