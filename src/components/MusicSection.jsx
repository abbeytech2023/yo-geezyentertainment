import VideoSlider from "./VideoSlider";
import MusicSlider from "./MusicSlider";
import { useFetchMusic, useFetchVideos } from "../hooks/useFetchMedia";

export default function MediaPage() {
  const { music } = useFetchMusic();
  const { videos } = useFetchVideos();

  return (
    <div className="bg-black min-h-screen px-4 md:px-10">
      <VideoSlider videos={videos} />
      <MusicSlider songs={music} />
    </div>
  );
}
