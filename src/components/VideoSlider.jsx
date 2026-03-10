import { useState } from "react";
import YouTubeEmbed from "./YoutubeEmbed";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function VideoSlider({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  const currentVideo = videos[currentIndex];

  return (
    <section id="videos" className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">🎬 Videos</h2>

        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-semibold mb-4">{currentVideo.title}</h3>
          <YouTubeEmbed videoId={currentVideo.videoId} />

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
            {videos.map((_, i) => (
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
      </div>
    </section>
  );
}
