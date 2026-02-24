import supabase from "../lib/supabaseClients";

// Sign up function
export async function signUp({
  email,
  password,
  fullName,

  phone,
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
        phone,
      },
    },
  });

  if (error) throw new Error(error.message);
  // console.log(error);

  const user = data.user;
  console.log(user);

  if (!user) {
    console.log("user not returned from auth signup");
    return;
  }

  // insert into the users table
  const { error: insertError } = await supabase.from("users").insert([
    {
      uid: user.id,
      email,
      fullName,

      phone,
    },
  ]);

  if (insertError) {
    console.error("database inserterror:,", insertError);
    return;
  }

  console.log("user registered and saved successfully");

  // console.log(data)

  return data;
}

// Login function
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

// Logout function
export async function logout() {
  const { error } = await supabase.auth.signOut();
  return { error };
}
