"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000); // durasi loading
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#070B1A]">
      {/* GLOW BACKGROUND */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />

      {/* CONTENT */}
      <div className="relative flex flex-col items-center gap-6">
        {/* LOGO */}
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider">AutoDrive</h1>

        {/* LOADING BAR */}
        <div className="w-48 h-[4px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-500 animate-[loading_1.5s_linear_infinite]" />
        </div>

        {/* TEXT */}
        <p className="text-white/50 text-sm animate-pulse">Loading content...</p>
      </div>

      {/* CUSTOM ANIMATION */}
      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
