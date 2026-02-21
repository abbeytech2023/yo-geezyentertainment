import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 text-white pt-16 pb-8 px-6 overflow-hidden">
      {/* Subtle Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">
            Yo Geezy Entertainment
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Bringing rhythm, creativity, and entertainment to life. Stay
            connected with us across all platforms.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {[
              {
                icon: <FaInstagram size={20} />,
                link: "https://instagram.com/yogeezyworld",
                hover: "hover:bg-pink-600",
              },
              {
                icon: <FaFacebookF size={20} />,
                link: "https://facebook.com/yogeezyworld",
                hover: "hover:bg-blue-600",
              },
              {
                icon: <FaTwitter size={20} />,
                link: "https://twitter.com/yogeezyworld",
                hover: "hover:bg-sky-500",
              },
              {
                icon: <FaYoutube size={20} />,
                link: "https://youtube.com/yogeezyworld",
                hover: "hover:bg-red-600",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 transition-all duration-300 transform hover:scale-110 ${item.hover}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <div className="space-y-3 text-zinc-400">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" />
              <a
                href="mailto:yogeezyentertainment@gmail.com"
                className="hover:text-white transition"
              >
                yogeezyentertainment@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaPhone className="text-purple-400" />
              <a
                href="tel:+2348035873993"
                className="hover:text-white transition"
              >
                +234 8035873993
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/2348035873993"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Chat on WhatsApp
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-400" />
              Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Yo Geezy Entertainment. All rights
        reserved.
      </div>
    </footer>
  );
}
