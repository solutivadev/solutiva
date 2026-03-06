import { ArrowUpRight, Code, Zap, Clock } from "lucide-react";
import logobalioo from "../assets/balioo.png";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface Producto {
  title: string;
  tagline: string;
  status: "En Desarrollo" | "Beta" | "Disponible";
  type: string;
  description: string;
  features: string[];
  logoUrl?: string;
  gradientLight: string;
  gradientDark: string;
  accentColor: string;
  href: string;
  ctaLabel: string;
  comingSoon?: boolean;
}

// ─── Datos ────────────────────────────────────────────────────────────────────

const productos: Producto[] = [
  {
    title:       "balioo",
    tagline:     "Agenda inteligente para tu negocio",
    status:      "En Desarrollo",
    type:        "Plataforma de Gestión de Citas",
    description: "Sistema de agendamiento dual que optimiza tu operativa interna mientras ofrece a tus clientes una experiencia de reserva fluida, intuitiva y disponible 24/7.",
    features: [
      "Autogestión para clientes",
      "Control de agenda profesional",
      "Recordatorios automatizados",
      "Sincronización multi-dispositivo",
    ],
    logoUrl:       logobalioo,
    gradientLight: "linear-gradient(140deg, #0d1212 0%, #c43c00 60%, #ff6a1a 100%)",
    gradientDark:  "linear-gradient(140deg, #1a1c1e 0%, #c43c00 65%, #f2885a 100%)",
    accentColor:   "#f2885a",
    href:          "http://localhost:5174/",
    ctaLabel:      "Ir a balioo",
    comingSoon:    true,
  },
];

// ─── Componente de card ───────────────────────────────────────────────────────

function ProductCard({ prod }: { prod: Producto }) {
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const gradient = isDark ? prod.gradientDark : prod.gradientLight;

  return (
    <a
      href={prod.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-[2.5rem] overflow-hidden border border-solutiva-border dark:border-solutiva-dark-border bg-white dark:bg-solutiva-dark-card shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solutiva-accent"
    >
      {/* ── Header con gradiente ── */}
      <div
        style={{ background: gradient }}
        className="relative h-52 p-8 flex flex-col justify-between overflow-hidden"
      >
        {/* Ruido de textura sutil */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "150px",
          }}
        />

        {/* Orbe decorativo */}
        <div
          aria-hidden
          className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full opacity-20 blur-2xl"
          style={{ background: prod.accentColor }}
        />

        {/* Fila top: logo + badge */}
        <div className="flex items-start justify-between z-10">
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg">
            {prod.logoUrl ? (
              <img
                src={prod.logoUrl}
                alt={`${prod.title} logo`}
                className="w-10 h-10 object-contain"
              />
            ) : (
              <Code size={28} className="text-white" />
            )}
          </div>

          {prod.comingSoon && (
            <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm text-white/90 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-[0.15em] border border-white/15">
              <Clock size={10} strokeWidth={3} />
              Coming Soon
            </span>
          )}
        </div>

        {/* Fila bottom: nombre + tipo */}
        <div className="z-10">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50 mb-1">
            {prod.type}
          </p>
          <h2 className="text-3xl font-black text-white tracking-tight leading-none">
            {prod.title}
          </h2>
        </div>
      </div>

      {/* ── Cuerpo ── */}
      <div className="p-8 space-y-6">

        {/* Tagline + status */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-bold text-solutiva-text dark:text-solutiva-dark-text">
            {prod.tagline}
          </p>
          <span className="shrink-0 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-solutiva-text/40 dark:text-solutiva-dark-text/35">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            {prod.status}
          </span>
        </div>

        {/* Descripción */}
        <p className="text-sm leading-relaxed text-solutiva-text/60 dark:text-solutiva-dark-text/55">
          {prod.description}
        </p>

        {/* Features */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {prod.features.map((feat) => (
            <li
              key={feat}
              className="flex items-center gap-2 text-xs font-semibold text-solutiva-text/70 dark:text-solutiva-dark-text/65"
            >
              <span
                className="h-5 w-5 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${prod.accentColor}18` }}
              >
                <Zap size={11} style={{ color: prod.accentColor }} strokeWidth={2.5} />
              </span>
              {feat}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={(e) => {
            e.preventDefault();
            window.open(prod.href, "_blank");
          }}
          className="group/btn w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm border border-solutiva-border dark:border-solutiva-dark-border text-solutiva-text dark:text-solutiva-dark-text hover:border-transparent hover:text-white transition-all duration-300"
          style={{
            // Hover inline via JS no funciona en Tailwind — usamos CSS variable trick
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = prod.accentColor;
            (e.currentTarget as HTMLButtonElement).style.borderColor = prod.accentColor;
            (e.currentTarget as HTMLButtonElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "";
            (e.currentTarget as HTMLButtonElement).style.color = "";
          }}
        >
          {prod.ctaLabel}
          <ArrowUpRight
            size={15}
            strokeWidth={2.5}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
          />
        </button>

      </div>
    </a>
  );
}

// ─── Página ───────────────────────────────────────────────────────────────────

export default function Productos() {
  return (
    <div className="min-h-screen pt-32 pb-28 bg-solutiva-bg dark:bg-solutiva-dark-bg transition-colors duration-300">
      <section className="max-w-6xl mx-auto px-6">

        {/* ── Encabezado ── */}
        <div className="max-w-2xl mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-6 bg-solutiva-accent dark:bg-solutiva-dark-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-solutiva-accent dark:text-solutiva-dark-accent">
              Nuestros productos
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-solutiva-text dark:text-solutiva-dark-text tracking-tight leading-[1.08] mb-5">
            Innovación{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solutiva-accent to-solutiva-primary dark:from-solutiva-dark-accent dark:to-white">
                hecha en casa
              </span>
            </span>
          </h1>

          <p className="text-base md:text-lg text-solutiva-text/60 dark:text-solutiva-dark-text/60 leading-relaxed">
            No solo construimos para otros — invertimos en nuestras propias ideas. Cada producto nace de un problema real que decidimos resolver.
          </p>
        </div>

        {/* ── Grid de productos ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up [animation-delay:150ms]">
          {productos.map((prod) => (
            <ProductCard key={prod.title} prod={prod} />
          ))}

          {/* Card placeholder para próximo producto */}
          <div className="rounded-[2.5rem] border-2 border-dashed border-solutiva-border dark:border-solutiva-dark-border flex flex-col items-center justify-center gap-4 py-20 text-center opacity-50">
            <div className="h-12 w-12 rounded-2xl bg-solutiva-border dark:bg-solutiva-dark-border flex items-center justify-center">
              <Code size={22} className="text-solutiva-text/40 dark:text-solutiva-dark-text/40" />
            </div>
            <div>
              <p className="text-sm font-bold text-solutiva-text/50 dark:text-solutiva-dark-text/40">
                Próximo producto
              </p>
              <p className="text-xs text-solutiva-text/35 dark:text-solutiva-dark-text/30 mt-1">
                Algo está en camino...
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}