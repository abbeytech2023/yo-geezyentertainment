import { useEffect, useState } from "react";

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const ios = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
    setIsIOS(ios);

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    window.addEventListener("appinstalled", () => {
      setInstalled(true);
      setShow(false);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShow(false);
  };

  if (installed || !show) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 px-4 sm:px-0 flex justify-center z-50 animate-slideUp">
      <div
        className="
        w-full 
        max-w-md 
        backdrop-blur-xl 
        bg-white/10 
        border border-white/20 
        shadow-2xl 
        rounded-2xl 
        p-5 sm:p-6 
        text-white 
        relative 
        overflow-hidden
      "
      >
        {/* Gradient Glow */}
        <div className="absolute -top-10 -right-10 w-28 h-28 sm:w-32 sm:h-32 bg-purple-600 opacity-30 blur-3xl rounded-full"></div>

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-white/60 hover:text-white transition text-sm sm:text-base"
        >
          ✕
        </button>

        <h2 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Install Our App 🚀
        </h2>

        <p className="text-sm text-white/80 mb-4 leading-relaxed">
          Get a faster experience, offline access, and a native app feel.
        </p>

        {!isIOS && (
          <button
            onClick={handleInstall}
            className="
              w-full 
              py-3 
              rounded-xl 
              font-semibold 
              text-sm sm:text-base
              bg-gradient-to-r 
              from-purple-600 
              to-pink-600 
              active:scale-95 
              hover:scale-105 
              transition-all 
              duration-300 
              shadow-lg
            "
          >
            Install Now 📲
          </button>
        )}

        {isIOS && (
          <div className="text-sm bg-white/10 p-4 rounded-xl border border-white/20">
            Tap <strong>Share</strong> → <strong>Add to Home Screen</strong>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideUp {
            animation: slideUp 0.4s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
