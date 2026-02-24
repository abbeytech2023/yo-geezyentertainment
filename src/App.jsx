import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import SupportPage from "./pages/Support";
import Blogs from "./pages/Blogs";
import Skits from "./pages/Skits";
import Footer from "./components/Footer";
import PWAInstall from "./components/PwaInstall";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/skits" element={<Skits />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <PWAInstall />
      <Footer />
    </>
  );
}

// // https://images.unsplash.com/photo-1597156776667-501b49b1f3d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycyUyMHdhc2glMjBuaWdlcmlhfGVufDB8fDB8fHww
// https://plus.unsplash.com/premium_photo-1675881512867-ddd71d031c15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhciUyMGFuZCUyMGxvdW5nZSUyMGluJTIwbmlnZXJpYXxlbnwwfHwwfHx8MA%3D%3D
