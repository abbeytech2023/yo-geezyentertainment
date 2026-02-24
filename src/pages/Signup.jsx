import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../services/auth";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Confirm password validation
    if (form.password !== form.confirmPassword) {
      setError("Passwords needs to match!");
      return;
    }

    setError(""); // clear any previous error
    signUp({ form });
    console.log("Signup Data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          {error && (
            <p className="text-red-500 text-[0.95rem] text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-white font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
