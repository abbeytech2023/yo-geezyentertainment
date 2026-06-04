import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute({ user }) {
  const admin = user?.email === "yogeezyentertainment@gmail.com";
  if (!admin) {
    return <Navigate to="/" replace />;
  }

  if (admin) {
    return <Outlet />;
  }

  return <Outlet />;
}
