import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import {
  Hero, Benefits, Services, Process, FeaturedServices, About,
  Testimonials, FAQ, Contact, FinalCTA, Footer, FloatingWhatsApp
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PuniTech | Reparación Profesional de Celulares en Cosquín" },
      { name: "description", content: "Servicio técnico especializado en celulares en Cosquín y Valle de Punilla. Cambio de pantallas, baterías y más. Atención rápida por WhatsApp." },
      { property: "og:title", content: "PuniTech | Reparación Profesional de Celulares en Cosquín" },
      { property: "og:description", content: "Servicio técnico especializado en celulares en Cosquín y Valle de Punilla." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <FeaturedServices />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
