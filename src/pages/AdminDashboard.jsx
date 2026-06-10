import { useState } from "react";
import SideBar from "../components/SideBar";
import UserList from "../components/UserList";
import { useUsers } from "../hooks/useUsers";
import { StatCard } from "../components/StatCard";
import { useAddBlog } from "../hooks/useAddBlog";
import { useFetchBlogs } from "../hooks/useFetchAllBlog";

import { useSkitVideos } from "../hooks/useFetchSkitVideos";
import { useFetchMusic, useFetchVideos } from "../hooks/useFetchMedia";

import AdminMusicSections from "../components/AdminMusicSections";
import AdminBlogsSection from "../components/AdminBlogsSection";
import AdminSkitsSections from "../components/AdminSkitsSections";
import AdminVideosSection from "../components/AdminVideosSection";

export default function Admin() {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { users } = useUsers();
  const { addBlog, isAdding, error } = useAddBlog();

  // BLOGS
  const { blogs } = useFetchBlogs();
  // const [blogs, setBlogs] = useState([]);
  const [blogFormOpen, setBlogFormOpen] = useState(false);
  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",
  });

  // MUSIC
  const { music } = useFetchMusic();
  const [musicFormOpen, setMusicFormOpen] = useState(false);
  const [musicForm, setMusicForm] = useState({
    title: "",
    link: "",
  });

  //VIDEO
  const { videos } = useFetchVideos();

  //skits
  const { skitVideos } = useSkitVideos();

  const [videoFormOpen, setVideoFormOpen] = useState(false);

  const [videoForm, setVideoForm] = useState({
    title: "",
    link: "",
  });

  const [skitFormOpen, setSkitFormOpen] = useState(false);

  // ADD VIDEO

  // ADD SKIT
  const addSkit = (e) => {
    e.preventDefault();

    setSkitFormOpen(false);
  };

  return (
    <div className="mt-12 min-h-screen bg-black text-white flex flex-col md:flex-row">
      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>

        <button
          className="text-2xl cursor-pointer hover:text-pink-600"
          onClick={() => setSidebarOpen(true)}
        >
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <StatCard title="Blogs" value={blogs.length} />
              <StatCard title="Videos" value={videos.length} />
              <StatCard title="Music" value={music.length} />
              <StatCard title="Skits" value={skitVideos.length} />
              <StatCard title="Users" value={users.length} />
              <StatCard
                title="Total Content"
                value={blogs.length + videos.length + skitVideos.length}
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
          isAdding={isAdding}
          error={error}
        />

        {/* MUSIC */}
        <AdminMusicSections
          active={active}
          musicForm={musicForm}
          musicFormOpen={musicFormOpen}
          setMusicFormOpen={setMusicFormOpen}
        />

        {/* VIDEOS */}
        <AdminVideosSection
          active={active}
          videoForm={videoForm}
          videoFormOpen={videoFormOpen}
          setVideoFormOpen={setVideoFormOpen}
          setVideoForm={setVideoForm}
        />

        {/* SKITS */}
        <AdminSkitsSections
          active={active}
          skitFormOpen={skitFormOpen}
          setSkitFormOpen={setSkitFormOpen}
          addSkit={addSkit}
        />

        {/* USERS */}
        {active === "users" && <UserList />}
      </div>
    </div>
  );
}
