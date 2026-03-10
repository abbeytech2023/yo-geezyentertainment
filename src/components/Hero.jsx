export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-6">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black"></div>

      {/* Animated Glow Circle */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Small Label */}
        <p className="uppercase tracking-widest text-sm text-purple-400 mb-4">
          Official Website for yo geezy entertainment
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Yo Geezy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Entertainment
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Experience the sound. Stream the latest releases, watch exclusive
          videos, and stay connected with the movement.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#music"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:opacity-90 transition duration-300 shadow-lg shadow-purple-500/20"
          >
            🎵 Listen Now
          </a>

          <a
            href="#videos"
            className="px-8 py-3 rounded-full border border-white/20 hover:border-purple-400 transition duration-300"
          >
            🎬 Watch Videos
          </a>
          <a
            href="/skits"
            className="px-8 py-3 rounded-full border border-white/20 hover:border-purple-400 transition duration-300"
          >
            🎬 Watch Skits
          </a>
        </div>
      </div>
    </section>
  );
}
