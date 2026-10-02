import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mani Kumar — .NET Full Stack Software Engineer" },
      { name: "description", content: "Portfolio of Mani Kumar, a .NET Full Stack Software Engineer building scalable backend, AWS, distributed, and event-driven systems." },
      { property: "og:title", content: "Mani Kumar — .NET Full Stack Software Engineer" },
      { property: "og:description", content: "Scalable .NET applications, backend systems, AWS architecture, and AI-powered workflows." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
