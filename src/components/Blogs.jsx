export default function Blogs() {
  return (
    <section
      id="blog"
      className="min-h-screen bg-white text-black py-24 px-6 flex items-center justify-center"
    >
      <div className="text-center max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Yo Geezy Blog</h1>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          This section is coming soon! Stay tuned for the latest news, updates,
          behind-the-scenes stories, and exclusive content from Yo Geezy.
        </p>

        {/* Coming Soon Button */}
        <div className="inline-block px-6 py-3 bg-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg animate-pulse">
          Coming Soon 🚀
        </div>
      </div>
    </section>
  );
}
