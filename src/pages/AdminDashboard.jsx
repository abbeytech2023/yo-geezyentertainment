import { useState } from "react";
import {
  FaMusic,
  FaVideo,
  FaNewspaper,
  FaTachometerAlt,
  FaTrash,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Admin() {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // BLOGS
  const [blogs, setBlogs] = useState([]);
  const [blogFormOpen, setBlogFormOpen] = useState(false);
  const [blogForm, setBlogForm] = useState({ title: "", content: "" });

  // MUSIC
  const [music, setMusic] = useState([
    { id: 1, title: "Street Anthem", link: "Audiomack Link 1" },
    { id: 2, title: "No Pressure", link: "Audiomack Link 2" },
    { id: 3, title: "Lagos Nights", link: "Audiomack Link 3" },
    { id: 4, title: "Grind Mode", link: "Audiomack Link 4" },
    { id: 5, title: "Money Season", link: "Audiomack Link 5" },
  ]);
  const [musicFormOpen, setMusicFormOpen] = useState(false);
  const [musicForm, setMusicForm] = useState({ title: "", link: "" });

  // VIDEOS
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
    <div className="mt-12 min-h-screen bg-black text-white flex flex-col md:flex-row">
      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800">
        <h2 className="text-xl font-bold">Admin-Dashboard</h2>
        <button onClick={() => setSidebarOpen(true)}>
          <FaBars size={20} />
        </button>
      </div>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-zinc-900 p-6 border-r border-zinc-800 z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="space-y-4">
          {[
            {
              name: "dashboard",
              icon: <FaTachometerAlt />,
              label: "Dashboard",
            },
            { name: "blogs", icon: <FaNewspaper />, label: "Blogs" },
            { name: "music", icon: <FaMusic />, label: "Music" },
            { name: "videos", icon: <FaVideo />, label: "Videos" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                setSidebarOpen(false);
              }}
              className={`flex items-center gap-3 w-full text-left p-2 rounded hover:bg-zinc-800 transition ${
                active === item.name ? "bg-zinc-800" : ""
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-4 sm:p-6 md:p-10 overflow-x-hidden">
        {/* DASHBOARD */}
        {active === "dashboard" && (
          <>
            <h1 className="text-2xl sm:text-3xl font-bold mb-8">
              Dashboard Overview
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Blogs" value={blogs.length} />
              <StatCard title="Music" value={music.length} />
              <StatCard title="Videos" value={videos.length} />
              <StatCard
                title="Total Content"
                value={blogs.length + music.length + videos.length}
              />
            </div>
          </>
        )}

        {/* BLOGS */}
        {active === "blogs" && (
          <Section
            title="Blogs"
            formOpen={blogFormOpen}
            toggleForm={() => setBlogFormOpen(!blogFormOpen)}
            onSubmit={addBlog}
          >
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
          </Section>
        )}

        {/* MUSIC */}
        {active === "music" && (
          <Section
            title="Music"
            formOpen={musicFormOpen}
            toggleForm={() => setMusicFormOpen(!musicFormOpen)}
            onSubmit={addMusic}
          >
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
          </Section>
        )}

        {/* VIDEOS */}
        {active === "videos" && (
          <Section
            title="Videos"
            formOpen={videoFormOpen}
            toggleForm={() => setVideoFormOpen(!videoFormOpen)}
            onSubmit={addVideo}
          >
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
          </Section>
        )}
      </div>
    </div>
  );
}

/* Small Reusable Components */

function StatCard({ title, value }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg">
      <p className="text-gray-400">{title}</p>
      <h2 className="text-2xl font-bold break-words">{value}</h2>
    </div>
  );
}

function Section({ title, formOpen, toggleForm, onSubmit, children }) {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">{title}</h1>

      <button
        onClick={toggleForm}
        className="bg-white text-black px-4 py-2 rounded mb-6"
      >
        {formOpen ? "Close Form" : `Add ${title}`}
      </button>

      {formOpen && (
        <form onSubmit={onSubmit} className="space-y-4 mb-8">
          {children}
          <button className="bg-white text-black px-4 py-2 rounded">
            Submit
          </button>
        </form>
      )}
    </>
  );
}
