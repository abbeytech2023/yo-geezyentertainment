import VideoSlider from "./VideoSlider";
import MusicSlider from "./MusicSlider";

const videos = [
  { title: "G2buk FT VYBER", videoId: "EcEJoNMEEhw" },
  { title: "G2BUK FT REMI ALUKO", videoId: "SeeF4T8QWNY" },
  { title: "G2BUK FT REMI ALUKO", videoId: "SeeF4T8QWNY" },
];

const songs = [
  {
    title: "G2BUK FT VYBER",
    appleEmbedUrl:
      "https://embed.music.apple.com/ng/song/middle-finger-feat-vyber/1871309793",
  },
  {
    title: "G2BUK FT REMI ALUKO",
    appleEmbedUrl:
      "https://embed.music.apple.com/ng/album/flex-feat-remi-aluko-single/1870986151",
  },
  {
    title: "G2BUK FT REMI ALUKO",
    appleEmbedUrl: "https://embed.music.apple.com/us/album/ALBUM_ID_3",
  },
];

export default function MediaPage() {
  return (
    <div className="bg-black min-h-screen px-4 md:px-10">
      <VideoSlider videos={videos} />
      <MusicSlider songs={songs} />
    </div>
  );
}
