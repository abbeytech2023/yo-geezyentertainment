import { useState } from "react";
import SideBar from "../components/SideBar";
import { FaTrash, FaBars } from "react-icons/fa";
import UserList from "../components/UserList";
import { useUsers } from "../hooks/useUsers";
import { StatCard } from "../components/StatCard";
import AdminMusicSections from "../components/AdminMusicSections";
import AdminBlogsSection from "../components/AdminBlogsSection";
import AdminVideosSection from "../components/AdminVideosSection";

export default function Admin() {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { users } = useUsers();

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
      <div className="md:hidden flex items-center  justify-between p-4 bg-zinc-900 border-b border-zinc-800">
        <h2 className="text-xl font-bold">Admin-Dashboard</h2>
        <button
          className="text-2xl cursor-pointer hover:text-pink-600"
          onClick={() => setSidebarOpen(true)}
        >
          {/* <FaBars size={20} /> */}
          {sidebarOpen ? <h2>close</h2> : <h2>open</h2>}
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
      <SideBar
        active={active}
        setActive={setActive}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

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
              <StatCard title="Users" value={users.length} />
              <StatCard
                title="Total Content"
                value={blogs.length + music.length + videos.length}
              />
            </div>
          </>
        )}
        {/* BLOGS */}
        <AdminBlogsSection
          active={active}
          blogForm={blogForm}
          blogFormOpen={blogFormOpen}
          setBlogFormOpen={setBlogFormOpen}
          setBlogForm={setBlogForm}
          addBlog={addBlog}
        />
        {/* MUSIC */}
        <AdminMusicSections
          active={active}
          musicForm={musicForm}
          addMusic={addMusic}
          musicFormOpen={musicFormOpen}
          setMusicFormOpen={setMusicFormOpen}
        />

        {/* VIDEOS */}
        <AdminVideosSection
          active={active}
          videoForm={videoForm}
          videoFormOpen={videoFormOpen}
          setVideoFormOpen={setVideoFormOpen}
          addVideo={addVideo}
          setVideoForm={setVideoForm}
        />
        {/* USERS LIST */}
        {active === "users" && <UserList />}
      </div>
    </div>
  );
}
