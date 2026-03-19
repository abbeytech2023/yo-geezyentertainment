import { useState } from "react";
import AppleMusicEmbed from "./AppleMusicEmbed";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MusicSlider({ songs }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === songs.length - 1 ? 0 : prev + 1));

  const currentSong = songs[currentIndex];

  return (
    <section id="music" className="py-12 px-6 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">🎵 Music</h2>

        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-semibold mb-4">{currentSong?.title}</h3>
          <AppleMusicEmbed embedUrl={currentSong?.links} />

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-white/10 rounded-full"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-white/10 rounded-full"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {songs.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-purple-500" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* VIDEO TITLES LIST */}
        <div className="mt-8 flex flex-wrap cursor-pointer flex-col justify-center gap-3">
          {songs.map((song, i) => (
            <button
              key={song.id || i}
              onClick={() => setCurrentIndex(i)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                i === currentIndex
                  ? "bg-pink-600 text-white font-semibold shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {song.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
