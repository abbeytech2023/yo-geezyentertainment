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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slideUp">
      <div className="w-[350px] backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6 text-white relative overflow-hidden">
        {/* Gradient Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600 opacity-30 blur-3xl rounded-full"></div>

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-white/60 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Install Our App 🚀
        </h2>

        <p className="text-sm text-white/80 mb-4">
          Get a faster experience, offline access, and a native app feel.
        </p>

        {!isIOS && (
          <button
            onClick={handleInstall}
            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 shadow-lg"
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

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translate(-50%, 40px);
            }
            to {
              opacity: 1;
              transform: translate(-50%, 0);
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
