import { motion } from "framer-motion";
import {
  Shield, MessageCircle, MapPin, Wrench, Smartphone, BatteryCharging,
  Plug, Volume2, Stethoscope, Cog, CheckCircle2, Sparkles, Instagram,
  Send, ArrowRight, Star, Monitor, CircuitBoard, Power, Download, Cable,
  ShoppingBag, Layers, Settings, Zap, Cpu
} from "lucide-react";
import { useState } from "react";
import heroPhone from "@/assets/hero-phone.png";
import aboutTech from "@/assets/about-tech.jpg";
import { WHATSAPP_URL } from "./Header";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-[#EEF2FF]/60 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#0EA5E9] shadow-soft backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Servicio técnico especializado en celulares
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Reparación profesional de celulares en{" "}
              <span className="text-gradient">Cosquín</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Pantallas, baterías y más. Atención rápida y personalizada por WhatsApp
              para clientes de Cosquín y todo el Valle de Punilla.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-elev transition-transform hover:scale-[1.03]"
              >
                Solicitar presupuesto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-all hover:border-[#0EA5E9] hover:text-[#0EA5E9]"
              >
                Ver servicios
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Atención personalizada",
                "Presupuesto por WhatsApp",
                "Servicio local en Valle de Punilla",
                "Repuestos de calidad",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#22C55E]" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Phone visual */}
        <div className="relative mx-auto h-[520px] w-full max-w-lg">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-[#0EA5E9]/30 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#2563EB]/30 blur-3xl" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative h-full w-full"
          >
            <img
              src={heroPhone}
              alt="Smartphone reparado por PuniTech"
              width={1024}
              height={1024}
              className="animate-float h-full w-full object-contain drop-shadow-2xl"
            />
            {/* floating chips */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute left-2 top-16 rounded-2xl glass shadow-soft px-4 py-3 border border-white/60"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#22C55E]/15">
                  <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">Diagnóstico</p>
                  <p className="text-sm font-semibold">Pantalla OK</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute right-0 bottom-24 rounded-2xl glass shadow-soft px-4 py-3 border border-white/60"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#0EA5E9]/15">
                  <BatteryCharging className="h-4 w-4 text-[#0EA5E9]" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">Batería</p>
                  <p className="text-sm font-semibold">100% salud</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFITS ---------- */
const benefits = [
  { icon: Shield, title: "Asistencia especializada", text: "Servicio técnico enfocado exclusivamente en celulares en Cosquín." },
  { icon: MessageCircle, title: "Atención rápida", text: "Consultas y presupuestos directamente por WhatsApp para clientes de Córdoba." },
  { icon: MapPin, title: "Servicio local", text: "Atendemos clientes de Cosquín y todo el Valle de Punilla." },
  { icon: Wrench, title: "Reparaciones confiables", text: "Diagnóstico claro y soluciones adaptadas a cada equipo en la región." },
];

export function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
            ¿Por qué elegir <span className="text-gradient">PuniTech</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Una experiencia profesional, cercana y resolutiva en Cosquín y todo el Valle de Punilla, Córdoba.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07}>
              <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow-elev transition-transform group-hover:scale-110">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES (KEY SERVICES HIGHLIGHTED) ---------- */
const services = [
  { icon: Monitor, title: "Cambio de módulo", text: "Reemplazo completo de pantalla y digitizer. Servicio rápido en Cosquín.", featured: true },
  { icon: CircuitBoard, title: "Reparación de placas", text: "Diagnóstico y reparación de circuitos complejos. Especialistas en Valle de Punilla.", featured: true },
  { icon: BatteryCharging, title: "Cambio de batería", text: "Baterías originales de alta calidad. Recuperá la autonomía de tu celular.", featured: true },
  { icon: Plug, title: "Cambio de pin de carga", text: "Solución definitiva a problemas de carga. Servicio técnico en Córdoba.", featured: true },
  { icon: Power, title: "Problemas de encendido", text: "Reparación de fallas de encendido y apagado inesperado." },
  { icon: Settings, title: "Software", text: "Actualización y configuración de software. Optimizá tu dispositivo." },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-semibold text-[#2563EB]">
            Servicios Principales
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Reparamos tu celular de forma rápida y profesional
          </h2>
          <p className="mt-4 text-muted-foreground">
            Servicio técnico especializado en Cosquín. Consultanos por WhatsApp y obtené un diagnóstico.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className={`group relative h-full overflow-hidden rounded-3xl border p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev ${
                s.featured 
                  ? "border-[#0EA5E9]/30 bg-gradient-to-br from-[#EEF2FF] to-white" 
                  : "border-border bg-white hover:border-[#0EA5E9]/40"
              }`}>
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#0EA5E9]/10 to-[#2563EB]/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  {s.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#22C55E]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#22C55E]">
                      <Star className="h-3 w-3" />
                      Destacado
                    </span>
                  )}
                  <div className={`mt-4 grid h-14 w-14 place-items-center rounded-2xl transition-all ${
                    s.featured 
                      ? "gradient-brand text-white" 
                      : "bg-[#EEF2FF] text-[#2563EB] group-hover:gradient-brand group-hover:text-white"
                  }`}>
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0EA5E9] transition-colors hover:text-[#2563EB]"
                  >
                    Consultar por WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
const steps = [
  "Nos escribís por WhatsApp",
  "Analizamos el problema",
  "Te enviamos presupuesto",
  "Coordinamos la reparación",
  "Retirás o recibís tu equipo",
];

export function Process() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--surface-tint)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Así trabajamos</h2>
          <p className="mt-4 text-muted-foreground">Un proceso claro y simple para clientes de Cosquín y el Valle de Punilla.</p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/40 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s} delay={i * 0.08}>
                <div className="relative text-center">
                  <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white font-bold shadow-elev">
                    {i + 1}
                    <span className="absolute inset-0 rounded-2xl animate-pulse-ring bg-[#0EA5E9]/40" />
                  </div>
                  <p className="mt-5 text-sm font-medium text-foreground">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURED SERVICES (ALL SERVICES) ---------- */
const featuredServices = [
  { icon: Monitor, title: "Cambio de módulo / pantalla", description: "Reemplazo completo de pantalla y digitizer para todos los modelos." },
  { icon: BatteryCharging, title: "Cambio de batería", description: "Baterías de alta calidad para recuperar la autonomía de tu celular." },
  { icon: CircuitBoard, title: "Reparación de placas", description: "Diagnóstico y reparación especializada de circuitos y componentes." },
  { icon: Plug, title: "Cambio de pin de carga", description: "Solución definitiva a problemas de carga y conectores dañados." },
  { icon: Power, title: "Problemas de encendido", description: "Reparación de fallas de encendido y apagado inesperado." },
  { icon: Settings, title: "Actualización de software", description: "Configuración y actualización de software para optimizar rendimiento." },
  { icon: Plug, title: "Venta de cargadores", description: "Cargadores originales y compatibles de alta calidad." },
  { icon: Cable, title: "Venta de cables USB", description: "Cables USB de diversas longitudes y tipos." },
  { icon: Smartphone, title: "Venta de fundas", description: "Fundas protectoras para todos los modelos de celulares." },
  { icon: Layers, title: "Venta de vidrios templados", description: "Protección de pantalla con vidrios templados de alta resistencia." },
  { icon: ShoppingBag, title: "Venta de accesorios", description: "Amplia variedad de accesorios para celulares y tablets." },
];

export function FeaturedServices() {
  return (
    <section id="servicios-destacados" className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-semibold text-[#2563EB]">
            Servicios Destacados
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Trabajos Realizados en Cosquín
          </h2>
          <p className="mt-4 text-muted-foreground">
            Soluciones completas para tu celular en el Valle de Punilla, Córdoba. Reparaciones y venta de accesorios.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-[#0EA5E9]/40 hover:shadow-elev">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#EEF2FF] text-[#2563EB] transition-all group-hover:gradient-brand group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-elev hover:scale-[1.03] transition-transform"
          >
            Consultar por servicio <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  const stats = [
    { v: "100%", l: "Atención personalizada" },
    { v: "Valle de Punilla", l: "Cosquín, La Falda, Villa Giardino, Capilla del Monte, Córdoba Capital y más" },
    { v: "24/7", l: "Soporte por WhatsApp" },
    { v: "↑", l: "Crecimiento constante" },
  ];
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl gradient-brand opacity-20 blur-2xl" />
            <img
              src={aboutTech}
              alt="Servicio técnico PuniTech"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative aspect-square w-full rounded-3xl object-cover shadow-elev"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-semibold text-[#2563EB]">
              Nosotros
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
              Un emprendimiento tecnológico nacido en <span className="text-gradient">Punilla</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              PuniTech surge con el objetivo de ofrecer asistencia técnica especializada para
              celulares en Cosquín y localidades cercanas del Valle de Punilla, Córdoba. Brindamos
              atención cercana, soluciones rápidas y una experiencia profesional desde el primer contacto.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                  <p className="font-display text-3xl font-extrabold text-gradient">{s.v}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { name: "Lucía M.", role: "Cosquín", text: "Excelente atención, me solucionaron el cambio de pantalla en el día. Súper recomendable." },
  { name: "Martín R.", role: "La Falda", text: "Muy profesionales y claros con el presupuesto. Mi celular quedó como nuevo." },
  { name: "Carolina V.", role: "Bialet Massé", text: "Atención por WhatsApp impecable. Rápidos y confiables." },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Lo que dicen nuestros clientes</h2>
          <p className="mt-4 text-muted-foreground">Opiniones reales de clientes de Cosquín y el Valle de Punilla.</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev">
                <div className="flex gap-1 text-[#22C55E]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-foreground/90">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full gradient-brand text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "¿Cómo solicito un presupuesto?", a: "Escribinos por WhatsApp al 3541 681084 con el modelo y el problema de tu celular. Te respondemos a la brevedad." },
  { q: "¿Cuánto demora una reparación?", a: "Depende del tipo de reparación. Muchos cambios de pantalla y batería se resuelven en el día." },
  { q: "¿Necesito turno?", a: "No es obligatorio, pero coordinamos por WhatsApp para optimizar tu tiempo." },
  { q: "¿Trabajan con repuestos nuevos?", a: "Sí, utilizamos repuestos de calidad y te informamos las opciones disponibles según el modelo." },
  { q: "¿Las reparaciones tienen garantía?", a: "Sí, todas nuestras reparaciones cuentan con garantía sobre el trabajo realizado." },
  { q: "¿Reparan todas las marcas?", a: "Trabajamos con la mayoría de marcas y modelos. Consultanos por tu equipo específico." },
  { q: "¿Venden accesorios?", a: "Sí, contamos con fundas premium, vidrios templados, cables, cargadores y una amplia variedad de accesorios. Consultá disponibilidad por WhatsApp." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Preguntas frecuentes</h2>
          <p className="mt-4 text-muted-foreground">Todo lo que necesitás saber antes de reparar tu celular.</p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold">{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#EEF2FF] text-[#2563EB] transition-transform ${open === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Hola PuniTech! Soy ${data.get("nombre")}.%0A` +
      `Tel: ${data.get("telefono")}%0A` +
      `Email: ${data.get("email")}%0A` +
      `Modelo: ${data.get("modelo")}%0A` +
      `Problema: ${data.get("problema")}%0A` +
      `Mensaje: ${data.get("mensaje")}`;
    window.open(`https://wa.me/5493541681084?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Contactanos</h2>
          <p className="mt-4 text-muted-foreground">Atención rápida y personalizada para tu consulta en Cosquín, Valle de Punilla.</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="group flex items-start gap-4 rounded-3xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#22C55E]/15 text-[#22C55E]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                <p className="mt-1 text-lg font-bold">3541 681084</p>
                <p className="text-sm text-muted-foreground">Respuesta rápida durante el día.</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-3xl border border-border bg-white p-6 shadow-soft">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#EEF2FF] text-[#2563EB]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ubicación</p>
                <p className="mt-1 text-lg font-bold">Cosquín</p>
                <p className="text-sm text-muted-foreground">Valle de Punilla, Córdoba, Argentina</p>
              </div>
            </div>

            <a href="https://instagram.com/punitech" target="_blank" rel="noreferrer" className="group flex items-start gap-4 rounded-3xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Instagram</p>
                <p className="mt-1 text-lg font-bold">@punitech</p>
                <p className="text-sm text-muted-foreground">Seguinos para novedades y promos.</p>
              </div>
            </a>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-white p-7 shadow-soft space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="nombre" label="Nombre" required />
              <Field name="telefono" label="Teléfono" type="tel" required />
            </div>
            <Field name="email" label="Email" type="email" />
            <Field name="modelo" label="Modelo del celular" />
            <Field name="problema" label="Problema" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mensaje</label>
              <textarea name="mensaje" rows={4} className="mt-2 w-full rounded-xl border border-border bg-[var(--surface)] px-4 py-3 text-sm outline-none transition-all focus:border-[#0EA5E9] focus:bg-white" />
            </div>
            <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-elev transition-transform hover:scale-[1.02]">
              {sent ? "¡Abriendo WhatsApp!" : "Enviar consulta"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-[var(--surface)] px-4 py-3 text-sm outline-none transition-all focus:border-[#0EA5E9] focus:bg-white"
      />
    </div>
  );
}

/* ---------- CTA ---------- */
export function FinalCTA() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl gradient-brand p-10 text-center text-white shadow-elev lg:p-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            ¿Tu celular necesita reparación en Cosquín?
          </h2>
          <p className="mt-5 text-lg text-white/90">Escribinos ahora y recibí atención personalizada en el Valle de Punilla, Córdoba.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-[#0EA5E9] shadow-elev transition-transform hover:scale-[1.04]"
          >
            <MessageCircle className="h-5 w-5" />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl gradient-brand">
              <span className="font-display text-lg font-extrabold">P</span>
            </div>
            <span className="font-display text-xl font-extrabold">PuniTech</span>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Servicio técnico especializado en celulares en Cosquín y Valle de Punilla.
          </p>
        </div>
        <FooterCol title="Empresa" items={[["Nosotros", "#nosotros"], ["FAQ", "#faq"], ["Contacto", "#contacto"]]} />
        <FooterCol title="Servicios" items={[["Servicios Principales", "#servicios"], ["Trabajos Realizados", "#servicios-destacados"], ["Diagnóstico", "#servicios"]]} />
        <div>
          <h4 className="font-display font-bold">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>WhatsApp: 3541 681084</li>
            <li>Cosquín, Valle de Punilla</li>
            <li>Córdoba, Argentina</li>
            <li><a className="hover:text-white" href="https://instagram.com/punitech" target="_blank" rel="noreferrer">@punitech</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/50 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} PuniTech — Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Política de privacidad</a>
            <a href="#" className="hover:text-white">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display font-bold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map(([l, h]) => (
          <li key={l}><a href={h} className="hover:text-white">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Floating WhatsApp button ---------- */
export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-[1.08]"
    >
      <svg
        viewBox="0 0 448 512"
        aria-hidden="true"
        className="h-9 w-9 fill-white"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.4 32 1.9 131.5 1.9 253.9c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.4 0 222-99.5 222-222 0-59.3-23.1-115.1-65-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.4 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 53.9 130.5 0 101.8-82.8 184.7-184.4 184.7zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.1 31.5 11.7 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.4-5-3.8-10.1-6.6z"/>
      </svg>
    </a>
  );
}
