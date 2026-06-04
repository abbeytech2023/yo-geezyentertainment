import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAuthContext();
  const { logout } = useLogout();

  const admin = user?.email === "yogeezyentertainment@gmail.com";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Skits", href: "/skits" },
    { name: "Support", href: "/support" },

    // Only visible to admin
    ...(admin ? [{ name: "Admin", href: "/admin" }] : []),

    // Guest links
    ...(!user
      ? [
          { name: "Login", href: "/login" },
          { name: "Signup", href: "/signup" },
        ]
      : []),

    // Authenticated users
    ...(user
      ? [
          {
            name: "Logout",
            action: logout,
          },
        ]
      : []),
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest hover:text-purple-400 transition"
        >
          YO GEEZY
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.action ? (
                <button
                  onClick={link.action}
                  className="hover:text-red-500 transition cursor-pointer"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="hover:text-purple-500 transition"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.action ? (
                  <button
                    onClick={() => {
                      link.action();
                      setIsOpen(false);
                    }}
                    className="hover:text-red-500 transition uppercase cursor-pointer"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-purple-500 transition"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
