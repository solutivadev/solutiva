import Hero from "../components/Hero"

// ─── Datos ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "⬡",
    title: "Desarrollo a Medida",
    description:
      "Arquitecturas robustas y escalables diseñadas para crecer con tu negocio. Sin plantillas, sin atajos.",
    tag: "Engineering",
  },
  {
    icon: "◈",
    title: "Apps Móviles",
    description:
      "Experiencias nativas e híbridas para iOS y Android. Rendimiento de primer nivel desde el primer día.",
    tag: "Mobile",
  },
  {
    icon: "◎",
    title: "Diseño de Producto",
    description:
      "Interfaces que enamoran y convierten. UX estratégico alineado a tus objetivos de negocio.",
    tag: "Design",
  },
  {
    icon: "⬟",
    title: "Consultoría Tech",
    description:
      "Tomamos decisiones técnicas contigo. Arquitectura, stack, equipo — te guiamos en cada etapa.",
    tag: "Strategy",
  },
  {
    icon: "⬕",
    title: "Integraciones & APIs",
    description:
      "Conectamos tus sistemas con Stripe, Supabase, Twilio y cualquier servicio que necesites.",
    tag: "Integrations",
  },
  {
    icon: "◉",
    title: "Optimización & Soporte",
    description:
      "Monitoreo continuo, mejoras de performance y soporte técnico para que nunca te quedes sin cobertura.",
    tag: "Support",
  },
]

const stats = [
  { value: "50+", label: "Proyectos entregados" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "5×", label: "ROI promedio" },
  { value: "3 sem", label: "Tiempo a primer prototipo" },
]

const process = [
  {
    step: "01",
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, objetivos y restricciones antes de escribir una línea de código.",
  },
  {
    step: "02",
    title: "Diseño & Prototipo",
    description:
      "Validamos la solución visualmente. Lo que ves es exactamente lo que construimos.",
  },
  {
    step: "03",
    title: "Desarrollo Ágil",
    description:
      "Sprints cortos, entregables reales y comunicación constante. Sin sorpresas.",
  },
  {
    step: "04",
    title: "Lanzamiento & Escala",
    description:
      "Deploy, monitoreo y soporte post-lanzamiento. Te acompañamos más allá del día uno.",
  },
]

// ─── Componentes auxiliares ────────────────────────────────────────────────────

function SectionTag({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="h-px w-6 bg-solutiva-accent dark:bg-solutiva-dark-accent" />
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-solutiva-accent dark:text-solutiva-dark-accent">
        {label}
      </span>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  tag,
}: (typeof services)[0]) {
  return (
    <div className="group relative p-8 rounded-3xl bg-white dark:bg-solutiva-dark-card border border-solutiva-border dark:border-solutiva-dark-border shadow-soft hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Accent glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl bg-gradient-to-br from-solutiva-accent/5 to-transparent dark:from-solutiva-dark-accent/5" />

      {/* Tag top-right */}
      <span className="absolute top-5 right-5 text-[9px] font-black uppercase tracking-widest text-solutiva-text/25 dark:text-solutiva-dark-text/25">
        {tag}
      </span>

      {/* Icon */}
      <div className="text-3xl mb-5 text-solutiva-accent dark:text-solutiva-dark-accent leading-none">
        {icon}
      </div>

      <h3 className="text-lg font-black text-solutiva-text dark:text-solutiva-dark-text mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-solutiva-text/60 dark:text-solutiva-dark-text/60">
        {description}
      </p>
    </div>
  )
}

function StatCard({ value, label }: (typeof stats)[0]) {
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-black text-solutiva-text dark:text-solutiva-dark-text tracking-tight mb-1">
        {value}
      </p>
      <p className="text-xs font-semibold uppercase tracking-widest text-solutiva-text/40 dark:text-solutiva-dark-text/40">
        {label}
      </p>
    </div>
  )
}

function ProcessStep({ step, title, description, isLast }: (typeof process)[0] & { isLast: boolean }) {
  return (
    <div className="flex gap-6 group">
      {/* Línea de tiempo */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-2xl bg-solutiva-accent/10 dark:bg-solutiva-dark-accent/10 border border-solutiva-accent/30 dark:border-solutiva-dark-accent/30 flex items-center justify-center shrink-0 group-hover:bg-solutiva-accent/20 dark:group-hover:bg-solutiva-dark-accent/20 transition-colors duration-300">
          <span className="text-[10px] font-black text-solutiva-accent dark:text-solutiva-dark-accent">
            {step}
          </span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-solutiva-border dark:bg-solutiva-dark-border" />
        )}
      </div>

      {/* Contenido */}
      <div className={`pb-10 ${isLast ? "" : ""}`}>
        <h4 className="font-black text-solutiva-text dark:text-solutiva-dark-text mb-2 tracking-tight">
          {title}
        </h4>
        <p className="text-sm leading-relaxed text-solutiva-text/60 dark:text-solutiva-dark-text/60">
          {description}
        </p>
      </div>
    </div>
  )
}

// ─── Página principal ──────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-solutiva-bg dark:bg-solutiva-dark-bg transition-colors duration-300">
      <main id="content">

        {/* ── Hero ── */}
        <Hero />

        {/* ── Stats ── */}
        <section className="py-16 px-6 border-y border-solutiva-border dark:border-solutiva-dark-border">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 divide-x-0 md:divide-x divide-solutiva-border dark:divide-solutiva-dark-border">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </section>

        {/* ── Servicios ── */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <SectionTag label="Lo que hacemos" />
              <h2 className="text-4xl md:text-5xl font-black text-solutiva-text dark:text-solutiva-dark-text tracking-tight max-w-xl leading-tight">
                Todo lo que tu producto digital necesita
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Proceso ── */}
        <section className="py-24 px-6 bg-white dark:bg-solutiva-dark-card transition-colors duration-300">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Texto izquierda */}
            <div className="md:sticky md:top-32">
              <SectionTag label="Cómo trabajamos" />
              <h2 className="text-4xl md:text-5xl font-black text-solutiva-text dark:text-solutiva-dark-text tracking-tight leading-tight mb-6">
                Un proceso claro,<br />sin sorpresas
              </h2>
              <p className="text-solutiva-text/60 dark:text-solutiva-dark-text/60 leading-relaxed text-base max-w-sm">
                Cada proyecto sigue una metodología probada que reduce riesgos y maximiza el valor entregado en cada etapa.
              </p>
            </div>

            {/* Steps derecha */}
            <div className="pt-2">
              {process.map((p, i) => (
                <ProcessStep
                  key={p.step}
                  {...p}
                  isLast={i === process.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="py-32 px-6 relative overflow-hidden">
          {/* Fondo decorativo */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-solutiva-accent/8 dark:bg-solutiva-dark-accent/8 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <SectionTag label="¿Listo para empezar?" />
            <h2 className="text-4xl md:text-6xl font-black text-solutiva-text dark:text-solutiva-dark-text tracking-tight leading-tight mb-6">
              Transformemos tu idea en realidad
            </h2>
            <p className="text-solutiva-text/60 dark:text-solutiva-dark-text/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Cuéntanos tu proyecto. En menos de 24 horas tendrás una respuesta de nuestro equipo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-solutiva-accent dark:bg-solutiva-dark-accent text-solutiva-primary dark:text-solutiva-dark-bg px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-lg active:scale-95">
                Solicitar cotización gratuita
              </button>
              <button className="w-full sm:w-auto px-10 py-4 rounded-2xl font-black text-lg border border-solutiva-border dark:border-solutiva-dark-border text-solutiva-text dark:text-solutiva-dark-text hover:bg-white dark:hover:bg-solutiva-dark-card transition-all">
                Ver nuestro portafolio →
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}