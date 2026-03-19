export default function YouTubeEmbed({ videoLink }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={videoLink}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
}
