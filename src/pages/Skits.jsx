import YouTubeEmbed from "../components/YoutubeEmbed";

const skitVideos = [
  { id: "hS0VhY7CGWA", title: "Skit 1" },
  { id: "7eWhvlxrVuA", title: "Skit 2" },
  { id: "hS0VhY7CGWA", title: "Skit 3" },
  { id: "QsPVPdJ_n7c", title: "Skit 4" },
  { id: "7eWhvlxrVuA", title: "Skit 5" },
  { id: "QsPVPdJ_n7c", title: "Skit 6" },
];

export default function Skits() {
  return (
    <section id="skits" className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Yo Geezy Skits
        </h1>

        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Enjoy some of the funniest and most creative skits from Yo Geezy.
          Watch, share, and laugh along!
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skitVideos.map((video) => (
            <div key={video.id} className="flex flex-col items-center">
              <YouTubeEmbed videoId={video.id} />
              <h3 className="mt-4 text-lg font-semibold text-center">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
