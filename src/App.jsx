import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import MusicSection from "./components/MusicSection";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import SupportPage from "./components/Support";
import Blogs from "./components/Blogs";
import Skits from "./components/Skits";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/skits" element={<Skits />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </>
  );
}

// https://images.unsplash.com/photo-1597156776667-501b49b1f3d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycyUyMHdhc2glMjBuaWdlcmlhfGVufDB8fDB8fHww
//https://plus.unsplash.com/premium_photo-1675881512867-ddd71d031c15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhciUyMGFuZCUyMGxvdW5nZSUyMGluJTIwbmlnZXJpYXxlbnwwfHwwfHx8MA%3D%3D
