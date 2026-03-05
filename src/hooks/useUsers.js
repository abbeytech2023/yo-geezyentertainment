import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClients";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);

      const { data, error } = await supabase
        .from("users") // your table name
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setUsers(data);
      }

      setIsLoading(false);
    }

    fetchUsers();
  }, []);

  return { users, isLoading, error };
}
