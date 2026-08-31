import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spotify Rewards" },
      { name: "description", content: "Spotify Rewards." },
      { property: "og:title", content: "Spotify Rewards" },
      { property: "og:description", content: "Spotify Rewards." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      className="min-h-screen w-full antialiased"
      style={{
        background:
          "radial-gradient(circle at center, #14532d 0%, #000000 70%)",
      }}
    />
  );
}
