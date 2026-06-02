import supabase from "../lib/supabaseClients";

export const addMusic = async (music) => {
  const { data, error } = await supabase
    .from("musicLinks")
    .insert([music])
    .select();

  if (error) {
    console.error("Error adding music:", error);
    throw error;
  }

  return data[0];
};

export const getAllMusic = async () => {
  const { data, error } = await supabase
    .from("musicLinks")
    .select("*") // select all columns
    .order("id", { ascending: false }); // optional: newest first

  if (error) {
    console.error("Error fetching music:", error);
    throw error;
  }

  return data; // return all music records
};

export const getAllVideos = async () => {
  const { data, error } = await supabase
    .from("videoLinks")
    .select("*") // select all columns
    .order("id", { ascending: false }); // optional: newest first

  if (error) {
    console.error("Error fetching music:", error);
    throw error;
  }

  return data; // return all music records
};

export const addVideo = async (video) => {
  const { data, error } = await supabase
    .from("videoLinks")
    .insert([video])
    .select();

  if (error) {
    console.error("Error adding video:", error);
    throw error;
  }

  return data[0];
};

// services/blogService.js

export async function createBlog(data) {
  console.log(data);

  const { data: blog, error } = await supabase
    .from("blogs")
    .insert([data])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return blog;
}

//FETCHING ALL BLOGS
export async function getBlogs() {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
