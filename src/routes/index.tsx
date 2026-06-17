import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Videos from "@/components/Videos";
import WhatIDo from "@/components/WhatIDo";
import Services from "@/components/Services";
import Systems from "@/components/Systems";
import Social from "@/components/Social";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InteliGENTE11 — IA simple. IA útil. IA para vos." },
      { name: "description", content: "Sebastián Acuña: IA aplicada y automatización para negocios reales. Agentes de IA, sistemas inteligentes y contenido práctico cada semana." },
      { property: "og:title", content: "InteliGENTE11 — IA aplicada a negocios" },
      { property: "og:description", content: "Soluciones de Inteligencia Artificial y automatización para emprendedores y negocios." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Videos />
      <WhatIDo />
      <Services />
      <Systems />
      <Social />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
