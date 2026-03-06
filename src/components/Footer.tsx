import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// ─── Datos ────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Servicios",      href: "/servicios" },
  { label: "Productos",      href: "/productos" },
  { label: "Casos de éxito", href: "/proyectos" },
  { label: "Contacto",       href: "/contacto" },
];

const legalLinks = [
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos",   href: "/terminos" },
];

const contactItems = [
  { icon: Mail,    value: "contacto@solutiva.com", href: "mailto:contacto@solutiva.com" },
  { icon: Phone,   value: "+52 443 123 4567",       href: "tel:+524431234567" },
  { icon: MapPin,  value: "Michoacán, México",       href: null },
];

const socialLinks = [
  { icon: Linkedin,  href: "https://linkedin.com",  label: "LinkedIn"  },
  { icon: Twitter,   href: "https://twitter.com",   label: "Twitter"   },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-solutiva-bg dark:bg-solutiva-dark-bg border-t border-solutiva-border dark:border-solutiva-dark-border transition-colors duration-300 overflow-hidden">

      {/* Glow decorativo de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[70%] h-64 bg-solutiva-accent/6 dark:bg-solutiva-dark-accent/6 rounded-full blur-[100px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Banda superior: CTA ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-10 border-b border-solutiva-border dark:border-solutiva-dark-border">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solutiva-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-solutiva-accent" />
            </span>
            <p className="text-sm font-bold text-solutiva-text dark:text-solutiva-dark-text">
              ¿Tienes un proyecto en mente?{" "}
              <span className="text-solutiva-text/50 dark:text-solutiva-dark-text/50 font-normal">
                Respondemos en menos de 24 h.
              </span>
            </p>
          </div>
          <Link
            to="/contacto"
            className="group inline-flex items-center gap-2 bg-solutiva-primary dark:bg-solutiva-dark-accent text-white dark:text-solutiva-dark-bg px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 hover:scale-[1.03] active:scale-95 transition-all shadow-md shadow-solutiva-primary/20 dark:shadow-solutiva-dark-accent/20 shrink-0"
          >
            <Sparkles size={15} strokeWidth={2} />
            Hablemos
            <ArrowUpRight size={15} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* ── Grilla principal ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-14">

          {/* Col 1 — Marca */}
          <div className="sm:col-span-2 md:col-span-1 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-xl bg-white dark:bg-solutiva-dark-card border border-solutiva-border dark:border-white/10 shadow-sm flex items-center justify-center overflow-hidden group-hover:shadow-md transition-all">
                <img
                  src={logo}
                  alt="Solutiva"
                  className="h-5 w-5 object-contain dark:brightness-110 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-lg font-black tracking-tighter text-solutiva-text dark:text-solutiva-dark-text">
                Solutiva
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-solutiva-text/60 dark:text-solutiva-dark-text/55 max-w-[220px]">
              Transformación digital con software a medida, escalable y enfocado en resultados.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-2 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-9 w-9 rounded-xl border border-solutiva-border dark:border-solutiva-dark-border bg-white dark:bg-solutiva-dark-card flex items-center justify-center text-solutiva-text/40 dark:text-solutiva-dark-text/40 hover:border-solutiva-accent dark:hover:border-solutiva-dark-accent hover:text-solutiva-accent dark:hover:text-solutiva-dark-accent hover:shadow-sm transition-all duration-200"
                >
                  <Icon size={15} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Explorar */}
          <div className="space-y-5">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-solutiva-text/40 dark:text-solutiva-dark-text/35">
              Explorar
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-solutiva-text/65 dark:text-solutiva-dark-text/60 hover:text-solutiva-accent dark:hover:text-solutiva-dark-accent transition-colors duration-200"
                  >
                    <span className="h-px w-0 group-hover:w-3 bg-solutiva-accent dark:bg-solutiva-dark-accent transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contacto */}
          <div className="space-y-5">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-solutiva-text/40 dark:text-solutiva-dark-text/35">
              Contacto
            </h4>
            <ul className="space-y-3.5">
              {contactItems.map(({ icon: Icon, value, href }) => (
                <li key={value}>
                  {href ? (
                    <a
                      href={href}
                      className="group inline-flex items-center gap-3 text-sm text-solutiva-text/65 dark:text-solutiva-dark-text/60 hover:text-solutiva-accent dark:hover:text-solutiva-dark-accent transition-colors duration-200"
                    >
                      <Icon size={14} className="text-solutiva-accent dark:text-solutiva-dark-accent shrink-0" strokeWidth={2} />
                      {value}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-3 text-sm text-solutiva-text/65 dark:text-solutiva-dark-text/60">
                      <Icon size={14} className="text-solutiva-accent dark:text-solutiva-dark-accent shrink-0" strokeWidth={2} />
                      {value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Badge de confianza */}
          <div className="space-y-5">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-solutiva-text/40 dark:text-solutiva-dark-text/35">
              Garantía
            </h4>
            <div className="space-y-3">
              {[
                "Código entregado con documentación",
                "Soporte post-lanzamiento incluido",
                "Iteraciones sin costo adicional",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="mt-[3px] h-4 w-4 rounded-full bg-solutiva-accent/15 dark:bg-solutiva-dark-accent/15 flex items-center justify-center shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-solutiva-accent dark:bg-solutiva-dark-accent" />
                  </span>
                  <span className="text-xs leading-relaxed text-solutiva-text/60 dark:text-solutiva-dark-text/55">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Barra inferior ── */}
        <div className="py-6 border-t border-solutiva-border/60 dark:border-solutiva-dark-border/30 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-solutiva-text/40 dark:text-solutiva-dark-text/35">
            © {year} Solutiva. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className="text-xs text-solutiva-text/40 dark:text-solutiva-dark-text/35 hover:text-solutiva-accent dark:hover:text-solutiva-dark-accent transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}