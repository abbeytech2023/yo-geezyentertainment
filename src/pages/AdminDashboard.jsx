import { useState } from "react";
import {
  FaMusic,
  FaVideo,
  FaNewspaper,
  FaTachometerAlt,
  FaTrash,
} from "react-icons/fa";

export default function Admin() {
  const [active, setActive] = useState("dashboard");

  // BLOGS
  const [blogs, setBlogs] = useState([]);
  const [blogFormOpen, setBlogFormOpen] = useState(false);
  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",
  });

  // MUSIC (5 default)
  const [music, setMusic] = useState([
    { id: 1, title: "Street Anthem", link: "Audiomack Link 1" },
    { id: 2, title: "No Pressure", link: "Audiomack Link 2" },
    { id: 3, title: "Lagos Nights", link: "Audiomack Link 3" },
    { id: 4, title: "Grind Mode", link: "Audiomack Link 4" },
    { id: 5, title: "Money Season", link: "Audiomack Link 5" },
  ]);
  const [musicFormOpen, setMusicFormOpen] = useState(false);
  const [musicForm, setMusicForm] = useState({ title: "", link: "" });

  // VIDEOS (6 default)
  const [videos, setVideos] = useState([
    { id: 101, title: "Official Video 1", link: "YouTube Link 1" },
    { id: 102, title: "Official Video 2", link: "YouTube Link 2" },
    { id: 103, title: "Live Performance", link: "YouTube Link 3" },
    { id: 104, title: "Freestyle Session", link: "YouTube Link 4" },
    { id: 105, title: "Behind The Scenes", link: "YouTube Link 5" },
    { id: 106, title: "Fan Meet Up", link: "YouTube Link 6" },
  ]);
  const [videoFormOpen, setVideoFormOpen] = useState(false);
  const [videoForm, setVideoForm] = useState({ title: "", link: "" });

  // HANDLERS
  const addBlog = (e) => {
    e.preventDefault();
    setBlogs([{ id: Date.now(), ...blogForm }, ...blogs]);
    setBlogForm({ title: "", content: "" });
    setBlogFormOpen(false);
  };

  const addMusic = (e) => {
    e.preventDefault();
    setMusic([{ id: Date.now(), ...musicForm }, ...music]);
    setMusicForm({ title: "", link: "" });
    setMusicFormOpen(false);
  };

  const addVideo = (e) => {
    e.preventDefault();
    setVideos([{ id: Date.now(), ...videoForm }, ...videos]);
    setVideoForm({ title: "", link: "" });
    setVideoFormOpen(false);
  };

  return (
    <div className="mt-12 min-h-screen flex bg-black text-white">
      {/* SIDEBAR */}
      <div className="w-64 bg-zinc-900 p-6 border-r border-zinc-800">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <div className="space-y-4">
          <button
            onClick={() => setActive("dashboard")}
            className="flex items-center gap-3 hover:text-gray-300"
          >
            <FaTachometerAlt /> Dashboard
          </button>
          <button
            onClick={() => setActive("blogs")}
            className="flex items-center gap-3 hover:text-gray-300"
          >
            <FaNewspaper /> Blogs
          </button>
          <button
            onClick={() => setActive("music")}
            className="flex items-center gap-3 hover:text-gray-300"
          >
            <FaMusic /> Music
          </button>
          <button
            onClick={() => setActive("videos")}
            className="flex items-center gap-3 hover:text-gray-300"
          >
            <FaVideo /> Videos
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">
        {/* DASHBOARD */}
        {active === "dashboard" && (
          <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-400">Blogs</p>
                <h2 className="text-2xl font-bold">{blogs.length}</h2>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-400">Music</p>
                <h2 className="text-2xl font-bold">{music.length}</h2>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-400">Videos</p>
                <h2 className="text-2xl font-bold">{videos.length}</h2>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-400">Total Content</p>
                <h2 className="text-2xl font-bold">
                  {blogs.length + music.length + videos.length}
                </h2>
              </div>
            </div>
          </div>
        )}

        {/* BLOGS */}
        {active === "blogs" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Blogs</h1>

            <button
              onClick={() => setBlogFormOpen(!blogFormOpen)}
              className="bg-white text-black px-4 py-2 rounded mb-6"
            >
              {blogFormOpen ? "Close Form" : "Add Blog"}
            </button>

            {blogFormOpen && (
              <form onSubmit={addBlog} className="space-y-4 mb-8">
                <input
                  type="text"
                  placeholder="Blog Title"
                  value={blogForm.title}
                  onChange={(e) =>
                    setBlogForm({ ...blogForm, title: e.target.value })
                  }
                  className="w-full p-3 bg-zinc-800 rounded"
                  required
                />
                <textarea
                  placeholder="Blog Content"
                  value={blogForm.content}
                  onChange={(e) =>
                    setBlogForm({ ...blogForm, content: e.target.value })
                  }
                  className="w-full p-3 bg-zinc-800 rounded"
                  required
                />
                <button className="bg-white text-black px-4 py-2 rounded">
                  Publish
                </button>
              </form>
            )}

            {blogs.map((b) => (
              <div
                key={b.id}
                className="bg-zinc-900 p-4 rounded mb-3 flex justify-between"
              >
                <span>{b.title}</span>
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() =>
                    setBlogs(blogs.filter((item) => item.id !== b.id))
                  }
                />
              </div>
            ))}
          </div>
        )}

        {/* MUSIC */}
        {active === "music" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Music</h1>

            <button
              onClick={() => setMusicFormOpen(!musicFormOpen)}
              className="bg-white text-black px-4 py-2 rounded mb-6"
            >
              {musicFormOpen ? "Close Form" : "Add Music"}
            </button>

            {musicFormOpen && (
              <form onSubmit={addMusic} className="space-y-4 mb-8">
                <input
                  type="text"
                  placeholder="Music Title"
                  value={musicForm.title}
                  onChange={(e) =>
                    setMusicForm({ ...musicForm, title: e.target.value })
                  }
                  className="w-full p-3 bg-zinc-800 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Audiomack Link"
                  value={musicForm.link}
                  onChange={(e) =>
                    setMusicForm({ ...musicForm, link: e.target.value })
                  }
                  className="w-full p-3 bg-zinc-800 rounded"
                  required
                />
                <button className="bg-white text-black px-4 py-2 rounded">
                  Add
                </button>
              </form>
            )}

            {music.map((m) => (
              <div
                key={m.id}
                className="bg-zinc-900 p-4 rounded mb-3 flex justify-between"
              >
                <span>{m.title}</span>
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() =>
                    setMusic(music.filter((item) => item.id !== m.id))
                  }
                />
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {active === "videos" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Videos</h1>

            <button
              onClick={() => setVideoFormOpen(!videoFormOpen)}
              className="bg-white text-black px-4 py-2 rounded mb-6"
            >
              {videoFormOpen ? "Close Form" : "Add Video"}
            </button>

            {videoFormOpen && (
              <form onSubmit={addVideo} className="space-y-4 mb-8">
                <input
                  type="text"
                  placeholder="Video Title"
                  value={videoForm.title}
                  onChange={(e) =>
                    setVideoForm({ ...videoForm, title: e.target.value })
                  }
                  className="w-full p-3 bg-zinc-800 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="YouTube Link"
                  value={videoForm.link}
                  onChange={(e) =>
                    setVideoForm({ ...videoForm, link: e.target.value })
                  }
                  className="w-full p-3 bg-zinc-800 rounded"
                  required
                />
                <button className="bg-white text-black px-4 py-2 rounded">
                  Add
                </button>
              </form>
            )}

            {videos.map((v) => (
              <div
                key={v.id}
                className="bg-zinc-900 p-4 rounded mb-3 flex justify-between"
              >
                <span>{v.title}</span>
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() =>
                    setVideos(videos.filter((item) => item.id !== v.id))
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
