import Hero from "../components/Hero";
import MusicSection from "../components/MusicSection";
import { useAuthContext } from "../hooks/useAuthContext";
import { Spinner } from "../components/Spinner";

import React from "react";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div>
      <Hero />
      <MusicSection />
    </div>
  );
}
