import React, { useState } from "react";
import {
  FaMusic,
  FaVideo,
  FaNewspaper,
  FaTachometerAlt,
  FaTrash,
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";

export default function SideBar({
  active,
  setActive,
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <div>
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
            { name: "users", icon: <FaUser />, label: "users" },
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
    </div>
  );
}
