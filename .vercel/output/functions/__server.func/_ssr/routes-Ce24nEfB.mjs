import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { S as ArrowRight, _ as Instagram, a as Smartphone, b as Cable, c as Settings, d as Plug, f as Monitor, g as Layers, h as MapPin, i as Sparkles, l as Send, m as Menu, n as Wrench, o as ShoppingBag, p as MessageCircle, r as Star, s as Shield, t as X, u as Power, v as CircuitBoard, x as BatteryCharging, y as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ce24nEfB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		href: "#inicio",
		label: "Inicio"
	},
	{
		href: "#servicios",
		label: "Servicios"
	},
	{
		href: "#servicios-destacados",
		label: "Trabajos Realizados"
	},
	{
		href: "#nosotros",
		label: "Nosotros"
	},
	{
		href: "#faq",
		label: "FAQ"
	},
	{
		href: "#contacto",
		label: "Contacto"
	}
];
var WHATSAPP_URL = "https://wa.me/5493541681084?text=Hola%20PuniTech,%20quiero%20consultar%20por%20una%20reparaci%C3%B3n";
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-soft border-b border-border/60" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#inicio",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid h-9 w-9 place-items-center rounded-xl gradient-brand shadow-elev",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-extrabold text-white",
							children: "P"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-xl font-extrabold tracking-tight",
						children: ["Puni", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Tech"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "hidden md:inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:scale-[1.03] hover:shadow-elev",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-background lg:hidden",
						"aria-label": "Menú",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			className: "lg:hidden glass border-t border-border/60 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col px-5 py-4",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "py-3 text-base font-medium text-foreground border-b border-border/40 last:border-0",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://wa.me/5493541681084?text=Hola%20PuniTech,%20quiero%20consultar%20por%20una%20reparaci%C3%B3n",
					target: "_blank",
					rel: "noreferrer",
					className: "mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-5 py-3 text-sm font-semibold text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
				})]
			})
		}) })]
	});
}
var hero_phone_default = "/assets/hero-phone-CfElZWtN.png";
var about_tech_default = "/assets/about-tech-CrV7nEVL.jpg";
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		}
	}
};
function Reveal({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		variants: fadeUp,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: { delay },
		className,
		children
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10",
				style: { background: "var(--gradient-hero)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-[#EEF2FF]/60 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#0EA5E9] shadow-soft backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Servicio técnico especializado en celulares"]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl",
							children: [
								"Reparación profesional de celulares en",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Cosquín"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg text-muted-foreground",
							children: "Pantallas, baterías y más. Atención rápida y personalizada por WhatsApp para clientes de Cosquín y todo el Valle de Punilla."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .22,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noreferrer",
								className: "group inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-elev transition-transform hover:scale-[1.03]",
								children: ["Solicitar presupuesto", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#servicios",
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-all hover:border-[#0EA5E9] hover:text-[#0EA5E9]",
								children: "Ver servicios"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2",
							children: [
								"Atención personalizada",
								"Presupuesto por WhatsApp",
								"Servicio local en Valle de Punilla",
								"Repuestos de calidad"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-sm text-foreground/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#22C55E]" }), t]
							}, t))
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto h-[520px] w-full max-w-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 -z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-10 right-10 h-72 w-72 rounded-full bg-[#0EA5E9]/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#2563EB]/30 blur-3xl" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 40
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .9 },
						className: "relative h-full w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_phone_default,
								alt: "Smartphone reparado por PuniTech",
								width: 1024,
								height: 1024,
								className: "animate-float h-full w-full object-contain drop-shadow-2xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									x: -20
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: { delay: .6 },
								className: "absolute left-2 top-16 rounded-2xl glass shadow-soft px-4 py-3 border border-white/60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-8 w-8 place-items-center rounded-lg bg-[#22C55E]/15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[#22C55E]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Diagnóstico"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: "Pantalla OK"
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									x: 20
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: { delay: .8 },
								className: "absolute right-0 bottom-24 rounded-2xl glass shadow-soft px-4 py-3 border border-white/60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-8 w-8 place-items-center rounded-lg bg-[#0EA5E9]/15",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatteryCharging, { className: "h-4 w-4 text-[#0EA5E9]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Batería"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: "100% salud"
									})] })]
								})
							})
						]
					})]
				})]
			})
		]
	});
}
var benefits = [
	{
		icon: Shield,
		title: "Asistencia especializada",
		text: "Servicio técnico enfocado exclusivamente en celulares en Cosquín."
	},
	{
		icon: MessageCircle,
		title: "Atención rápida",
		text: "Consultas y presupuestos directamente por WhatsApp para clientes de Córdoba."
	},
	{
		icon: MapPin,
		title: "Servicio local",
		text: "Atendemos clientes de Cosquín y todo el Valle de Punilla."
	},
	{
		icon: Wrench,
		title: "Reparaciones confiables",
		text: "Diagnóstico claro y soluciones adaptadas a cada equipo en la región."
	}
];
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 lg:py-28 bg-[var(--surface)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl font-extrabold sm:text-5xl",
					children: [
						"¿Por qué elegir ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "PuniTech"
						}),
						"?"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Una experiencia profesional, cercana y resolutiva en Cosquín y todo el Valle de Punilla, Córdoba."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow-elev transition-transform group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-bold",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: b.text
							})
						]
					})
				}, b.title))
			})]
		})
	});
}
var services = [
	{
		icon: Monitor,
		title: "Cambio de módulo",
		text: "Reemplazo completo de pantalla y digitizer. Servicio rápido en Cosquín.",
		featured: true
	},
	{
		icon: CircuitBoard,
		title: "Reparación de placas",
		text: "Diagnóstico y reparación de circuitos complejos. Especialistas en Valle de Punilla.",
		featured: true
	},
	{
		icon: BatteryCharging,
		title: "Cambio de batería",
		text: "Baterías originales de alta calidad. Recuperá la autonomía de tu celular.",
		featured: true
	},
	{
		icon: Plug,
		title: "Cambio de pin de carga",
		text: "Solución definitiva a problemas de carga. Servicio técnico en Córdoba.",
		featured: true
	},
	{
		icon: Power,
		title: "Problemas de encendido",
		text: "Reparación de fallas de encendido y apagado inesperado."
	},
	{
		icon: Settings,
		title: "Software",
		text: "Actualización y configuración de software. Optimizá tu dispositivo."
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicios",
		className: "py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-semibold text-[#2563EB]",
						children: "Servicios Principales"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl font-extrabold sm:text-5xl",
						children: "Reparamos tu celular de forma rápida y profesional"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Servicio técnico especializado en Cosquín. Consultanos por WhatsApp y obtené un diagnóstico."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `group relative h-full overflow-hidden rounded-3xl border p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev ${s.featured ? "border-[#0EA5E9]/30 bg-gradient-to-br from-[#EEF2FF] to-white" : "border-border bg-white hover:border-[#0EA5E9]/40"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#0EA5E9]/10 to-[#2563EB]/10 blur-2xl transition-opacity group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								s.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-[#22C55E]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#22C55E]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3" }), "Destacado"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `mt-4 grid h-14 w-14 place-items-center rounded-2xl transition-all ${s.featured ? "gradient-brand text-white" : "bg-[#EEF2FF] text-[#2563EB] group-hover:gradient-brand group-hover:text-white"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-xl font-bold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: s.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0EA5E9] transition-colors hover:text-[#2563EB]",
									children: ["Consultar por WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
								})
							]
						})]
					})
				}, s.title))
			})]
		})
	});
}
var steps = [
	"Nos escribís por WhatsApp",
	"Analizamos el problema",
	"Te enviamos presupuesto",
	"Coordinamos la reparación",
	"Retirás o recibís tu equipo"
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 lg:py-28 bg-[var(--surface-tint)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-extrabold sm:text-5xl",
					children: "Así trabajamos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Un proceso claro y simple para clientes de Cosquín y el Valle de Punilla."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/40 to-transparent lg:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 lg:grid-cols-5",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white font-bold shadow-elev",
								children: [i + 1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-2xl animate-pulse-ring bg-[#0EA5E9]/40" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm font-medium text-foreground",
								children: s
							})]
						})
					}, s))
				})]
			})]
		})
	});
}
var featuredServices = [
	{
		icon: Monitor,
		title: "Cambio de módulo / pantalla",
		description: "Reemplazo completo de pantalla y digitizer para todos los modelos."
	},
	{
		icon: BatteryCharging,
		title: "Cambio de batería",
		description: "Baterías de alta calidad para recuperar la autonomía de tu celular."
	},
	{
		icon: CircuitBoard,
		title: "Reparación de placas",
		description: "Diagnóstico y reparación especializada de circuitos y componentes."
	},
	{
		icon: Plug,
		title: "Cambio de pin de carga",
		description: "Solución definitiva a problemas de carga y conectores dañados."
	},
	{
		icon: Power,
		title: "Problemas de encendido",
		description: "Reparación de fallas de encendido y apagado inesperado."
	},
	{
		icon: Settings,
		title: "Actualización de software",
		description: "Configuración y actualización de software para optimizar rendimiento."
	},
	{
		icon: Plug,
		title: "Venta de cargadores",
		description: "Cargadores originales y compatibles de alta calidad."
	},
	{
		icon: Cable,
		title: "Venta de cables USB",
		description: "Cables USB de diversas longitudes y tipos."
	},
	{
		icon: Smartphone,
		title: "Venta de fundas",
		description: "Fundas protectoras para todos los modelos de celulares."
	},
	{
		icon: Layers,
		title: "Venta de vidrios templados",
		description: "Protección de pantalla con vidrios templados de alta resistencia."
	},
	{
		icon: ShoppingBag,
		title: "Venta de accesorios",
		description: "Amplia variedad de accesorios para celulares y tablets."
	}
];
function FeaturedServices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicios-destacados",
		className: "py-20 lg:py-28 bg-[var(--surface)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-semibold text-[#2563EB]",
							children: "Servicios Destacados"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl font-extrabold sm:text-5xl",
							children: "Trabajos Realizados en Cosquín"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Soluciones completas para tu celular en el Valle de Punilla, Córdoba. Reparaciones y venta de accesorios."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
					children: featuredServices.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .04,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-[#0EA5E9]/40 hover:shadow-elev",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 place-items-center rounded-xl bg-[#EEF2FF] text-[#2563EB] transition-all group-hover:gradient-brand group-hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-base font-bold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: s.description
								})
							]
						})
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-elev hover:scale-[1.03] transition-transform",
						children: ["Consultar por servicio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})
			]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "nosotros",
		className: "py-20 lg:py-28 bg-[var(--surface)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-3xl gradient-brand opacity-20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_tech_default,
					alt: "Servicio técnico PuniTech",
					width: 1024,
					height: 1024,
					loading: "lazy",
					className: "relative aspect-square w-full rounded-3xl object-cover shadow-elev"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-semibold text-[#2563EB]",
					children: "Nosotros"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-4xl font-extrabold sm:text-5xl",
					children: ["Un emprendimiento tecnológico nacido en ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Punilla"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted-foreground",
					children: "PuniTech surge con el objetivo de ofrecer asistencia técnica especializada para celulares en Cosquín y localidades cercanas del Valle de Punilla, Córdoba. Brindamos atención cercana, soluciones rápidas y una experiencia profesional desde el primer contacto."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-4",
				children: [
					{
						v: "100%",
						l: "Atención personalizada"
					},
					{
						v: "Valle de Punilla",
						l: "Cosquín, La Falda, Villa Giardino, Capilla del Monte, Córdoba Capital y más"
					},
					{
						v: "24/7",
						l: "Soporte por WhatsApp"
					},
					{
						v: "↑",
						l: "Crecimiento constante"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-5 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-extrabold text-gradient",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: s.l
						})]
					})
				}, s.l))
			})] })]
		})
	});
}
var testimonials = [
	{
		name: "Lucía M.",
		role: "Cosquín",
		text: "Excelente atención, me solucionaron el cambio de pantalla en el día. Súper recomendable."
	},
	{
		name: "Martín R.",
		role: "La Falda",
		text: "Muy profesionales y claros con el presupuesto. Mi celular quedó como nuevo."
	},
	{
		name: "Carolina V.",
		role: "Bialet Massé",
		text: "Atención por WhatsApp impecable. Rápidos y confiables."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-extrabold sm:text-5xl",
					children: "Lo que dicen nuestros clientes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Opiniones reales de clientes de Cosquín y el Valle de Punilla."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 lg:grid-cols-3",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-[#22C55E]",
								children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-foreground/90",
								children: [
									"\"",
									t.text,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-full gradient-brand text-white font-bold",
									children: t.name.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t.role
								})] })]
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
var faqs = [
	{
		q: "¿Cómo solicito un presupuesto?",
		a: "Escribinos por WhatsApp al 3541 681084 con el modelo y el problema de tu celular. Te respondemos a la brevedad."
	},
	{
		q: "¿Cuánto demora una reparación?",
		a: "Depende del tipo de reparación. Muchos cambios de pantalla y batería se resuelven en el día."
	},
	{
		q: "¿Necesito turno?",
		a: "No es obligatorio, pero coordinamos por WhatsApp para optimizar tu tiempo."
	},
	{
		q: "¿Trabajan con repuestos nuevos?",
		a: "Sí, utilizamos repuestos de calidad y te informamos las opciones disponibles según el modelo."
	},
	{
		q: "¿Las reparaciones tienen garantía?",
		a: "Sí, todas nuestras reparaciones cuentan con garantía sobre el trabajo realizado."
	},
	{
		q: "¿Reparan todas las marcas?",
		a: "Trabajamos con la mayoría de marcas y modelos. Consultanos por tu equipo específico."
	},
	{
		q: "¿Venden accesorios?",
		a: "Sí, contamos con fundas premium, vidrios templados, cables, cargadores y una amplia variedad de accesorios. Consultá disponibilidad por WhatsApp."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "py-20 lg:py-28 bg-[var(--surface)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-extrabold sm:text-5xl",
					children: "Preguntas frecuentes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Todo lo que necesitás saber antes de reparar tu celular."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-3",
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-2xl border border-border bg-white shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(open === i ? null : i),
							className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#EEF2FF] text-[#2563EB] transition-transform ${open === i ? "rotate-45" : ""}`,
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: false,
							animate: {
								height: open === i ? "auto" : 0,
								opacity: open === i ? 1 : 0
							},
							transition: { duration: .3 },
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-6 pb-6 text-muted-foreground",
								children: f.a
							})
						})]
					})
				}, f.q))
			})]
		})
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const text = `Hola PuniTech! Soy ${data.get("nombre")}.%0ATel: ${data.get("telefono")}%0AEmail: ${data.get("email")}%0AModelo: ${data.get("modelo")}%0AProblema: ${data.get("problema")}%0AMensaje: ${data.get("mensaje")}`;
		window.open(`https://wa.me/5493541681084?text=${text}`, "_blank");
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-extrabold sm:text-5xl",
					children: "Contactanos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Atención rápida y personalizada para tu consulta en Cosquín, Valle de Punilla."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "group flex items-start gap-4 rounded-3xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#22C55E]/15 text-[#22C55E]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "WhatsApp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-lg font-bold",
									children: "3541 681084"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Respuesta rápida durante el día."
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 rounded-3xl border border-border bg-white p-6 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#EEF2FF] text-[#2563EB]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Ubicación"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-lg font-bold",
									children: "Cosquín"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Valle de Punilla, Córdoba, Argentina"
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://instagram.com/punitech",
							target: "_blank",
							rel: "noreferrer",
							className: "group flex items-start gap-4 rounded-3xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elev",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: "Instagram"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-lg font-bold",
									children: "@punitech"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Seguinos para novedades y promos."
								})
							] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "rounded-3xl border border-border bg-white p-7 shadow-soft space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "nombre",
								label: "Nombre",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "telefono",
								label: "Teléfono",
								type: "tel",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "email",
							label: "Email",
							type: "email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "modelo",
							label: "Modelo del celular"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "problema",
							label: "Problema"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Mensaje"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "mensaje",
							rows: 4,
							className: "mt-2 w-full rounded-xl border border-border bg-[var(--surface)] px-4 py-3 text-sm outline-none transition-all focus:border-[#0EA5E9] focus:bg-white"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "group inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-elev transition-transform hover:scale-[1.02]",
							children: [sent ? "¡Abriendo WhatsApp!" : "Enviar consulta", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
						})
					]
				})]
			})]
		})
	});
}
function Field({ name, label, type = "text", required = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		className: "mt-2 w-full rounded-xl border border-border bg-[var(--surface)] px-4 py-3 text-sm outline-none transition-all focus:border-[#0EA5E9] focus:bg-white"
	})] });
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 py-20 lg:px-8 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl overflow-hidden rounded-3xl gradient-brand p-10 text-center text-white shadow-elev lg:p-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl",
						children: "¿Tu celular necesita reparación en Cosquín?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-white/90",
						children: "Escribinos ahora y recibí atención personalizada en el Valle de Punilla, Córdoba."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-[#0EA5E9] shadow-elev transition-transform hover:scale-[1.04]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), "Hablar por WhatsApp"]
					})
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[#0F172A] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 place-items-center rounded-xl gradient-brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-extrabold",
							children: "P"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl font-extrabold",
						children: "PuniTech"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-white/60",
					children: "Servicio técnico especializado en celulares en Cosquín y Valle de Punilla."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Empresa",
					items: [
						["Nosotros", "#nosotros"],
						["FAQ", "#faq"],
						["Contacto", "#contacto"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Servicios",
					items: [
						["Servicios Principales", "#servicios"],
						["Trabajos Realizados", "#servicios-destacados"],
						["Diagnóstico", "#servicios"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display font-bold",
					children: "Contacto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-white/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "WhatsApp: 3541 681084" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cosquín, Valle de Punilla" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Córdoba, Argentina" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-white",
							href: "https://instagram.com/punitech",
							target: "_blank",
							rel: "noreferrer",
							children: "@punitech"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/50 sm:flex-row lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" PuniTech — Todos los derechos reservados."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-white",
						children: "Política de privacidad"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-white",
						children: "Términos y condiciones"
					})]
				})]
			})
		})]
	});
}
function FooterCol({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "font-display font-bold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-2 text-sm text-white/70",
		children: items.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: h,
			className: "hover:text-white",
			children: l
		}) }, l))
	})] });
}
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: WHATSAPP_URL,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "WhatsApp",
		className: "fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#22C55E] text-white shadow-elev transition-transform hover:scale-110",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full animate-pulse-ring bg-[#22C55E]/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "relative h-6 w-6" })]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedServices, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
//#endregion
export { Index as component };
