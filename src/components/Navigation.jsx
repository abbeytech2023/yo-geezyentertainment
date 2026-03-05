import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";
import { checkIfAdmin } from "../services/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  console.log(checkIfAdmin());

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Skits", href: "/skits" },
    { name: "Support", href: "/support" },

    { name: "Admin", href: "/admin", requiresAuth: true },
    { name: "Login", href: "/login", guestOnly: true },
    { name: "Signup", href: "/signup", guestOnly: true },

    // 👇 Logout as a link
    { name: "Logout", requiresAuth: true, action: logout },
  ];

  const filteredLinks = navLinks.filter((link) => {
    if (link.requiresAuth && !user) return false;
    if (link.guestOnly && user) return false;
    return true;
  });

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-99 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-widest">
          YO GEEZY
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm cursor-pointer uppercase tracking-wide">
          {filteredLinks.map((link) => (
            <li key={link.name} className="cursor-pointer">
              {link.action ? (
                <button
                  onClick={link.action}
                  className="hover:text-red-500 cursor-pointer transition uppercase"
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

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm uppercase tracking-wide">
            {filteredLinks.map((link) => (
              <li key={link.name}>
                {link.action ? (
                  <button
                    onClick={() => {
                      link.action();
                      setIsOpen(false);
                    }}
                    className="hover:text-red-500 transition"
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
