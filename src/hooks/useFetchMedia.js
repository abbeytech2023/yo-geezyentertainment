import { useState, useEffect, useCallback } from "react";
import supabase from "../lib/supabaseClients";

export function useFetchMusic() {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch all music
  const fetchMusic = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("musicLinks")
        .select("*")
        .order("id", { ascending: false }); // newest first

      if (error) throw error;

      setMusic(data);
    } catch (err) {
      console.error("Error fetching music:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  // Automatically fetch music on mount
  useEffect(() => {
    fetchMusic();
  }, [fetchMusic]);

  return { music, loading, error };
}
export function useFetchVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch all videos
  const fetchVideos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("videoLinks")
        .select("*")
        .order("id", { ascending: false }); // newest first

      if (error) throw error;

      setVideos(data);
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  // Automatically fetch music on mount
  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { videos, loading, error };
}
