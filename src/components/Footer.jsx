import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black relative py-12 px-6 text-white">
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/40 to-black pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="font-semibold text-lg mb-2">Follow Yo Geezy</h3>
          <div className="flex gap-4 text-white/80 hover:text-white">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF size={32} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter size={32} />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaYoutube size={32} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:yogeezyentertainment@gmail.com"
              className="text-purple-400 hover:underline"
            >
              yogeezyentertainment@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+2348035893993"
              className="text-purple-400 hover:underline flex items-center justify-center md:justify-end gap-2"
            >
              <FaPhone /> +234 8035873993
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/2348035873993"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline flex items-center justify-center md:justify-end gap-2"
            >
              <FaWhatsapp /> Chat Now
            </a>
          </p>
          <p>Address: 123 Music Street, Lagos, Nigeria</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Yo Geezy Entertainment. All rights
        reserved.
      </div>
    </footer>
  );
}
