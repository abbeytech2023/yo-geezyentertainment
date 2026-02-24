import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Skits", href: "/skits" },
    { name: "Blogs", href: "/blogs" },
    { name: "Support", href: "/support" },
    { name: "Admin-Dashboard", href: "/admin" },
    { name: "Login", href: "/login" },
    { name: "Signup", href: "signup" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-widest">
          YO GEEZY
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="hover:text-purple-500 transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-purple-500 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
