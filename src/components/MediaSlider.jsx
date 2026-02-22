import { useRef } from "react";

export default function MediaEmbedSlider({ title, items, type }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount = slider.offsetWidth * 0.8;

    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full py-10">
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>

      {/* Arrows (desktop only) */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-3 rounded-full text-white"
      >
        ◀
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-3 rounded-full text-white"
      >
        ▶
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="snap-start min-w-[90%] sm:min-w-[70%] md:min-w-[50%] lg:min-w-[35%] 
                       bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden 
                       shadow-lg flex-shrink-0"
          >
            {type === "youtube" && (
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title={item.title}
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {type === "apple" && (
              <div className="p-4">
                <iframe
                  allow="autoplay *; encrypted-media *;"
                  frameBorder="0"
                  height="175"
                  className="w-full rounded-xl"
                  src={item.embedUrl}
                ></iframe>
              </div>
            )}

            <div className="p-4 text-white">
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
