import { Palette, Code2, Rocket, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface Servicio {
  title: string;
  tag: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  accentClass: string;
  bgClass: string;
  borderHoverClass: string;
  number: string;
}

// ─── Datos ────────────────────────────────────────────────────────────────────

const servicios: Servicio[] = [
  {
    number:           "01",
    title:            "Diseño UX/UI",
    tag:              "Creatividad & Estrategia",
    description:      "No solo creamos interfaces atractivas — diseñamos experiencias centradas en el usuario que reducen la fricción y aumentan la conversión de tu negocio.",
    features:         ["Prototipado de alta fidelidad", "Auditorías de experiencia", "Sistemas de diseño escalables", "Investigación de usuarios"],
    icon:             <Palette size={22} strokeWidth={1.75} />,
    accentClass:      "text-solutiva-accent dark:text-solutiva-dark-accent",
    bgClass:          "bg-solutiva-accent/10 dark:bg-solutiva-dark-accent/10",
    borderHoverClass: "hover:border-solutiva-accent/40 dark:hover:border-solutiva-dark-accent/40",
  },
  {
    number:           "02",
    title:            "Desarrollo de Software",
    tag:              "Ingeniería de Clase Mundial",
    description:      "Construimos soluciones digitales robustas — desde apps web hasta sistemas complejos — con foco en escalabilidad, seguridad y rendimiento desde el día uno.",
    features:         ["Arquitecturas Cloud (AWS/Azure)", "Desarrollo Fullstack", "APIs y Microservicios", "Apps móviles iOS & Android"],
    icon:             <Code2 size={22} strokeWidth={1.75} />,
    accentClass:      "text-solutiva-primary dark:text-solutiva-dark-text",
    bgClass:          "bg-solutiva-primary/10 dark:bg-white/8",
    borderHoverClass: "hover:border-solutiva-primary/40 dark:hover:border-white/20",
  },
  {
    number:           "03",
    title:            "Productos SaaS Propios",
    tag:              "Aceleración Digital",
    description:      "Implementa nuestras soluciones propietarias validadas en el mercado. Ahorra meses de desarrollo usando software listo para potenciar tu operación.",
    features:         ["Soporte técnico dedicado", "Personalización de marca", "Mantenimiento incluido", "Onboarding asistido"],
    icon:             <Rocket size={22} strokeWidth={1.75} />,
    accentClass:      "text-emerald-500 dark:text-emerald-400",
    bgClass:          "bg-emerald-500/10 dark:bg-emerald-400/10",
    borderHoverClass: "hover:border-emerald-400/40 dark:hover:border-emerald-400/30",
  },
];

// ─── Card de servicio ─────────────────────────────────────────────────────────

function ServicioCard({ s, reversed }: { s: Servicio; reversed: boolean }) {
  return (
    <div
      className={`group relative bg-white dark:bg-solutiva-dark-card border border-solutiva-border dark:border-solutiva-dark-border rounded-[2.5rem] p-8 md:p-12 shadow-soft hover:shadow-lg transition-all duration-500 overflow-hidden ${s.borderHoverClass}`}
    >
      {/* Número decorativo de fondo */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-4 -right-2 text-[9rem] font-black leading-none text-solutiva-text/[0.03] dark:text-solutiva-dark-text/[0.04] select-none"
      >
        {s.number}
      </span>

      <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-start`}>

        {/* ── Columna izquierda: icono + tag + título + descripción ── */}
        <div className="flex-1 min-w-0">

          <div className="flex items-center gap-4 mb-6">
            {/* Ícono */}
            <div className={`p-3 rounded-2xl ${s.bgClass} ${s.accentClass} transition-transform duration-500 group-hover:scale-110`}>
              {s.icon}
            </div>
            {/* Tag */}
            <div className="flex items-center gap-2">
              <div className="h-px w-5 bg-solutiva-accent dark:bg-solutiva-dark-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-solutiva-accent dark:text-solutiva-dark-accent">
                {s.tag}
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-solutiva-text dark:text-solutiva-dark-text tracking-tight mb-5 leading-tight">
            {s.title}
          </h2>

          <p className="text-base text-solutiva-text/60 dark:text-solutiva-dark-text/55 leading-relaxed max-w-xl">
            {s.description}
          </p>
        </div>

        {/* ── Columna derecha: features + CTA ── */}
        <div className="shrink-0 w-full lg:w-72 flex flex-col gap-6">
          {/* Features */}
          <ul className="space-y-3">
            {s.features.map((feat) => (
              <li key={feat} className="flex items-center gap-3">
                <span className={`h-5 w-5 rounded-lg flex items-center justify-center shrink-0 ${s.bgClass} ${s.accentClass}`}>
                  <Check size={11} strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-solutiva-text/75 dark:text-solutiva-dark-text/70">
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/contacto"
            className={`group/btn mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm border border-solutiva-border dark:border-solutiva-dark-border text-solutiva-text dark:text-solutiva-dark-text hover:border-transparent transition-all duration-300 ${s.bgClass} hover:opacity-90`}
          >
            Solicitar este servicio
            <ArrowUpRight
              size={15}
              strokeWidth={2.5}
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>

      </div>
    </div>
  );
}

// ─── Página ───────────────────────────────────────────────────────────────────

export default function Servicios() {
  return (
    <div className="min-h-screen pt-32 pb-28 bg-solutiva-bg dark:bg-solutiva-dark-bg transition-colors duration-300">
      <section className="max-w-6xl mx-auto px-6 space-y-24">

        {/* ── Encabezado ── */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-6 bg-solutiva-accent dark:bg-solutiva-dark-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-solutiva-accent dark:text-solutiva-dark-accent">
              Nuestras capacidades
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-5xl md:text-6xl font-black text-solutiva-text dark:text-solutiva-dark-text tracking-tight leading-[1.07] max-w-xl">
              Soluciones que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solutiva-primary via-solutiva-accent to-solutiva-primary dark:from-solutiva-dark-accent dark:to-white">
                evolucionan
              </span>{" "}
              tu idea.
            </h1>
            <p className="text-base text-solutiva-text/60 dark:text-solutiva-dark-text/55 leading-relaxed max-w-sm md:text-right">
              Fusionamos diseño creativo con precisión técnica para entregar productos digitales excepcionales.
            </p>
          </div>
        </div>

        {/* ── Servicios ── */}
        <div className="space-y-8 animate-fade-in-up [animation-delay:150ms]">
          {servicios.map((s, i) => (
            <ServicioCard key={s.number} s={s} reversed={i % 2 !== 0} />
          ))}
        </div>

        {/* ── Banner CTA ── */}
        <div className="relative rounded-[2.5rem] overflow-hidden animate-fade-in-up [animation-delay:300ms]">
          {/* Fondo con gradiente */}
          <div className="absolute inset-0 bg-solutiva-primary dark:bg-gradient-to-br dark:from-solutiva-dark-card dark:to-solutiva-dark-bg" />
          {/* Orbes decorativos */}
          <div aria-hidden className="absolute top-0 right-0 w-80 h-80 bg-solutiva-accent/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
          <div aria-hidden className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-[60px] -ml-20 -mb-20 pointer-events-none" />

          {/* Contenido */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">
                ¿Listo para empezar?
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3">
                Cuéntanos tu proyecto.
              </h2>
              <p className="text-white/60 text-sm max-w-md leading-relaxed">
                Ya sea una auditoría de diseño o el desarrollo de una plataforma completa, respondemos en menos de 24 horas.
              </p>
            </div>

            <Link
              to="/contacto"
              className="group shrink-0 inline-flex items-center gap-2.5 bg-solutiva-accent dark:bg-solutiva-dark-accent text-solutiva-primary dark:text-solutiva-dark-bg px-8 py-4 rounded-2xl font-black text-base hover:scale-[1.04] hover:shadow-xl hover:shadow-solutiva-accent/30 active:scale-95 transition-all"
            >
              <Sparkles size={17} strokeWidth={2} />
              Empecemos a trabajar
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}