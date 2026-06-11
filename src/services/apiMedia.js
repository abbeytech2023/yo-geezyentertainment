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

// FETCH SINGLE BLOGS

export async function getBlogById(id) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

//DELETE BLOGS
export async function deleteBlog(id) {
  const { data, error } = await supabase.from("blogs").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// services/apiSkits.js

export async function createSkitVideo(skitData) {
  const { data, error } = await supabase
    .from("skitVideos")
    .insert([skitData])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Skit video could not be created");
  }

  return data;
}

export async function getSkitVideos() {
  const { data, error } = await supabase
    .from("skitVideos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Skit videos could not be loaded");
  }

  return data;
}

// services/musicService.js

export async function deleteMusic(id) {
  const { data, error } = await supabase
    .from("musicLinks")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
// services/musicService.js

export async function deleteVideo(id) {
  const { data, error } = await supabase
    .from("videoLinks")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
// services/musicService.js

export async function deleteSkitVideo(id) {
  const { data, error } = await supabase
    .from("skitVideos")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
