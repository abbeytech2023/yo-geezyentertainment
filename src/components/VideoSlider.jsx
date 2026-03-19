import { useState } from "react";
import YouTubeEmbed from "./YoutubeEmbed";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { toYoutubeEmbed } from "../hooks/useYoutubeEmbed";

export default function VideoSlider({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  const currentVideo = videos[currentIndex];
  const currentVideoLink = toYoutubeEmbed(currentVideo?.youtubeLinks);

  return (
    <section
      id="videos"
      className="py-12 px-6 bg-gray-900 mb-30 cursor-pointer text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">🎬 Videos</h2>

        {/* Slider */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-semibold uppercase mb-4">
            {currentVideo?.title}
          </h3>

          <YouTubeEmbed videoLink={currentVideoLink} />

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
        </div>

        {/* VIDEO TITLES LIST */}
        <div className="mt-8 flex flex-wrap cursor-pointer flex-col justify-center gap-3">
          {videos.map((video, i) => (
            <button
              key={video.id || i}
              onClick={() => setCurrentIndex(i)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                i === currentIndex
                  ? "bg-purple-600 text-white font-semibold shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {video.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
