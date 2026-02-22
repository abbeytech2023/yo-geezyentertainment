import { useState } from "react";
import YouTubeEmbed from "./YoutubeEmbed";
import AppleMusicEmbed from "./AppleMusicEmbed";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Example song list
const songs = [
  {
    title: "G2BUK FT VYBER",
    youtubeId: "EcEJoNMEEhw",
    appleEmbedUrl:
      "https://embed.music.apple.com/ng/song/middle-finger-feat-vyber/1871309793",
  },
  {
    title: "G2BUK FT REMI ALUKO",
    youtubeId: "SeeF4T8QWNY",
    appleEmbedUrl:
      "https://embed.music.apple.com/ng/album/flex-feat-remi-aluko-single/1870986151",
  },
  {
    title: "Song Three",
    youtubeId: "ZzewYMxeG-4",
    appleEmbedUrl: "https://embed.music.apple.com/us/album/ALBUM_ID_3",
  },
];

export default function MusicSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
  };

  const currentSong = songs[currentIndex];

  return (
    <section id="" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
          Stream All Tracks
        </h2>

        {/* Slider Card */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <div className="md:flex-1 w-full">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">
              {currentSong.title}
            </h3>
            <div className="flex flex-col gap-6 md:flex-row" id="videos">
              <div className="md:flex-1">
                <p className="text-gray-300 mb-2">🎬 YouTube</p>
                <YouTubeEmbed videoId={currentSong.youtubeId} />
              </div>

              <div className="md:flex-1" id="music">
                <p className="text-gray-300 mb-2">🍎 Apple Music</p>
                <AppleMusicEmbed embedUrl={currentSong.appleEmbedUrl} />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-white/10 rounded-full md:hidden"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-white/10 rounded-full md:hidden"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Desktop Arrows */}
        <div className="hidden md:flex justify-between mt-6">
          <button
            onClick={prevSlide}
            className="text-white/70 hover:text-white p-3 bg-white/10 rounded-full"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="text-white/70 hover:text-white p-3 bg-white/10 rounded-full"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {songs.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-purple-500" : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

// import MediaEmbedSlider from "./MediaSlider";

// export default function MediaPage() {
//   const videos = [
//     {
//       id: 1,
//       title: "Burna Boy - Last Last",
//       videoId: "421w1j87fEM",
//     },
//     {
//       id: 2,
//       title: "Rema - Calm Down",
//       videoId: "isFxq4aH8cI",
//     },
//   ];

//   const music = [
//     {
//       id: 1,
//       title: "G2BUK FT VYBER",
//       appleEmbedUrl:
//         "https://embed.music.apple.com/ng/song/middle-finger-feat-vyber/1871309793",
//       // embedUrl: "https://embed.music.apple.com/us/album/love-damini/1623677591",
//     },
//     {
//       id: 2,
//       title: "Rema - Rave & Roses",
//       embedUrl: "https://embed.music.apple.com/us/album/rave-roses/1611901803",
//     },
//   ];

//   return (
//     <div className="bg-black min-h-screen px-4 md:px-10">
//       <MediaEmbedSlider title="🎬 Videos" items={videos} type="youtube" />

//       <MediaEmbedSlider title="🎵 Music" items={music} type="apple" />
//     </div>
//   );
// }
