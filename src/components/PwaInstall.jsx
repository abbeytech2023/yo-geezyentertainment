import { useEffect, useState } from "react";

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detect iOS
    const ios = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
    setIsIOS(ios);

    // Detect if already installed
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;

    setIsStandalone(standalone);

    // Android install prompt
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;

    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  // Hide if already installed
  if (isStandalone) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm">
      {/* Android */}
      {isInstallable && (
        <button
          onClick={handleInstall}
          className="px-4 py-2 bg-black text-white rounded-xl shadow-lg hover:scale-105 transition"
        >
          Install App
        </button>
      )}

      {/* iOS */}
      {isIOS && !isInstallable && (
        <div className="bg-black text-white p-4 rounded-2xl shadow-lg text-sm">
          <p className="mb-2 font-semibold">Install this app:</p>
          <p>
            Tap <strong>Share</strong> (📤) then select{" "}
            <strong>"Add to Home Screen"</strong>
          </p>
        </div>
      )}
    </div>
  );
}
