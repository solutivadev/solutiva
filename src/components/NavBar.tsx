import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Menu, X, Briefcase, Settings, MessageSquare } from "lucide-react";
import logo from "../assets/logo.png";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

// ─── Constantes ───────────────────────────────────────────────────────────────

const links: NavLink[] = [
  { name: "Servicios",  href: "/servicios",  icon: <Briefcase   size={16} strokeWidth={2} /> },
  { name: "Productos",  href: "/productos",  icon: <Settings    size={16} strokeWidth={2} /> },
  { name: "Contacto",   href: "/contacto",   icon: <MessageSquare size={16} strokeWidth={2} /> },
];

// ─── Sub-componente: Indicador de ruta activa animado ─────────────────────────

function ActivePill({
  links,
  currentPath,
  containerRef,
}: {
  links: NavLink[];
  currentPath: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [style, setStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const idx = links.findIndex((l) => l.href === currentPath);
    if (idx === -1 || !containerRef.current) {
      setStyle((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const items = containerRef.current.querySelectorAll("[data-nav-item]");
    const el = items[idx] as HTMLElement;
    if (!el) return;
    const parent = containerRef.current.getBoundingClientRect();
    const child  = el.getBoundingClientRect();
    setStyle({
      left:    child.left - parent.left,
      width:   child.width,
      opacity: 1,
    });
  }, [currentPath, links, containerRef]);

  return (
    <span
      aria-hidden
      className="absolute top-1 bottom-1 rounded-xl bg-white dark:bg-solutiva-dark-accent shadow-sm pointer-events-none"
      style={{
        left:    style.left,
        width:   style.width,
        opacity: style.opacity,
        transition: "left 0.35s cubic-bezier(0.4,0,0.2,1), width 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.2s",
      }}
    />
  );
}

// ─── Navbar principal ─────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [visible, setVisible]         = useState(true);
  const lastScrollY                   = useRef(0);
  const location                      = useLocation();
  const navRef                        = useRef<HTMLDivElement>(null);

  // Scroll: fondo + hide-on-scroll-down
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setVisible(y < lastScrollY.current || y < 60);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra menú al cambiar de ruta
  useEffect(() => { setMobileOpen(false); }, [location]);

  // Bloquea scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 w-full z-[100]",
          "transition-all duration-500 ease-in-out",
          scrolled
            ? "py-3 bg-white/90 dark:bg-solutiva-dark-bg/90 backdrop-blur-xl border-b border-solutiva-border dark:border-solutiva-dark-border shadow-sm"
            : "py-5 bg-transparent",
          visible ? "translate-y-0" : "-translate-y-full",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative h-10 w-10 rounded-xl shadow-sm flex items-center justify-center border border-solutiva-border dark:border-white/10 bg-white dark:bg-solutiva-dark-card overflow-hidden group-hover:shadow-md transition-all duration-300">
                {/* Glow on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-solutiva-accent/10 dark:bg-solutiva-dark-accent/10" />
                <img
                  src={logo}
                  alt="Solutiva"
                  className="h-6 w-6 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 dark:brightness-110"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-solutiva-text dark:text-white">
                Solutiva
              </span>
            </Link>

            {/* ── Desktop nav (cápsula con pill animado) ── */}
            <div
              ref={navRef}
              className="hidden md:flex items-center gap-0.5 relative bg-gray-100/60 dark:bg-white/5 p-1 rounded-2xl border border-gray-200/80 dark:border-white/10 backdrop-blur-sm"
            >
              {/* Pill deslizante que sigue el link activo */}
              <ActivePill
                links={links}
                currentPath={location.pathname}
                containerRef={navRef}
              />

              {links.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    data-nav-item
                    className={[
                      "relative z-10 px-5 py-2 rounded-xl text-sm font-bold transition-colors duration-200 select-none",
                      isActive
                        ? "text-solutiva-primary dark:text-solutiva-dark-bg"
                        : "text-solutiva-text/55 dark:text-solutiva-dark-text/55 hover:text-solutiva-primary dark:hover:text-white",
                    ].join(" ")}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* ── Desktop CTA ── */}
            <Link
              to="/contacto"
              className="hidden md:flex items-center gap-2 bg-solutiva-primary dark:bg-solutiva-dark-accent text-white dark:text-solutiva-dark-bg px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 hover:scale-[1.03] active:scale-95 transition-all shadow-md shadow-solutiva-primary/20 dark:shadow-solutiva-dark-accent/20 shrink-0"
            >
              <Mail size={16} strokeWidth={2.5} />
              Cotizar
            </Link>

            {/* ── Hamburguesa móvil ── */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              className={[
                "md:hidden relative h-10 w-10 flex items-center justify-center rounded-xl border transition-all duration-300",
                mobileOpen
                  ? "bg-solutiva-primary border-solutiva-primary text-white"
                  : "bg-white dark:bg-solutiva-dark-card border-solutiva-border dark:border-white/10 text-solutiva-text dark:text-solutiva-dark-text shadow-sm",
              ].join(" ")}
            >
              <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
                <X size={20} strokeWidth={2.5} />
              </span>
              <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
                <Menu size={20} strokeWidth={2.5} />
              </span>
            </button>

          </div>
        </div>
      </nav>

      {/* ── Overlay móvil ── */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden
        className={[
          "md:hidden fixed inset-0 z-[98] bg-black/30 backdrop-blur-sm transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* ── Menú móvil (drawer desde arriba) ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={[
          "md:hidden fixed top-0 left-0 right-0 z-[99]",
          "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-6 pointer-events-none",
        ].join(" ")}
      >
        {/* Card flotante */}
        <div className="mx-4 mt-[4.5rem] bg-white dark:bg-solutiva-dark-card rounded-[2rem] shadow-2xl border border-solutiva-border dark:border-solutiva-dark-border overflow-hidden">

          {/* Links */}
          <nav className="p-3 flex flex-col gap-1">
            {links.map((link, i) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  style={{ transitionDelay: mobileOpen ? `${i * 40 + 60}ms` : "0ms" }}
                  className={[
                    "flex items-center gap-4 px-4 py-3.5 rounded-[1.4rem] font-bold text-base transition-all duration-300",
                    mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                    isActive
                      ? "bg-solutiva-primary/8 dark:bg-solutiva-dark-accent/10 text-solutiva-primary dark:text-solutiva-dark-accent"
                      : "text-solutiva-text dark:text-solutiva-dark-text hover:bg-gray-50 dark:hover:bg-white/5",
                  ].join(" ")}
                >
                  <span className={[
                    "p-2 rounded-xl transition-colors",
                    isActive
                      ? "bg-solutiva-primary text-white dark:bg-solutiva-dark-accent dark:text-solutiva-dark-bg"
                      : "bg-gray-100 dark:bg-white/8 text-solutiva-text/60 dark:text-solutiva-dark-text/60",
                  ].join(" ")}>
                    {link.icon}
                  </span>
                  {link.name}

                  {/* Indicador activo */}
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-solutiva-primary dark:bg-solutiva-dark-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Divisor */}
          <div className="h-px mx-5 bg-solutiva-border dark:bg-solutiva-dark-border" />

          {/* CTA móvil */}
          <div className="p-3">
            <Link
              to="/contacto"
              style={{ transitionDelay: mobileOpen ? `${links.length * 40 + 80}ms` : "0ms" }}
              className={[
                "flex items-center justify-center gap-2.5 w-full py-4 rounded-[1.4rem] font-black text-base",
                "bg-solutiva-primary dark:bg-solutiva-dark-accent text-white dark:text-solutiva-dark-bg",
                "shadow-lg shadow-solutiva-primary/25 dark:shadow-solutiva-dark-accent/20",
                "active:scale-[0.98] transition-all duration-300",
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              ].join(" ")}
            >
              <Mail size={18} strokeWidth={2.5} />
              Cotizar ahora
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}