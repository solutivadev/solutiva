import { Mail, MessageSquare, Send, CheckCircle2, ArrowUpRight, Clock, Sparkles, ChevronDown } from "lucide-react";
import { useState, useId } from "react";
import type { FormEvent, ChangeEvent } from "react";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type FormStatus = "idle" | "sending" | "success";

interface FormData {
  nombre: string;
  email: string;
  servicio: string;
  mensaje: string;
}

// ─── Datos de contacto ────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon:    Mail,
    label:   "Escríbenos",
    value:   "hola@solutiva.io",
    href:    "mailto:hola@solutiva.io",
    bgClass: "bg-solutiva-accent/10 dark:bg-solutiva-dark-accent/10",
    iconClass: "text-solutiva-accent dark:text-solutiva-dark-accent",
  },
  {
    icon:    MessageSquare,
    label:   "WhatsApp",
    value:   "+52 443 123 4567",
    href:    "https://wa.me/524431234567",
    bgClass: "bg-solutiva-primary/10 dark:bg-white/8",
    iconClass: "text-solutiva-primary dark:text-solutiva-dark-text",
  },
];

const promesas = [
  { icon: Clock,    text: "Respondemos en menos de 24 h" },
  { icon: Sparkles, text: "Primera consulta sin costo"    },
  { icon: CheckCircle2, text: "Sin compromisos de contratación" },
];

const servicios = [
  "Desarrollo de Software a Medida",
  "Diseño UX/UI / Auditoría",
  "App Móvil (iOS / Android)",
  "Consulta sobre un Producto SaaS",
  "Otro motivo",
];

// ─── Campo de texto reutilizable ──────────────────────────────────────────────

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-[10px] font-black uppercase tracking-[0.2em] text-solutiva-text/40 dark:text-solutiva-dark-text/35 ml-0.5"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputBase =
  "w-full bg-solutiva-bg dark:bg-solutiva-dark-bg border border-solutiva-border dark:border-solutiva-dark-border rounded-xl px-5 py-3.5 text-sm text-solutiva-text dark:text-solutiva-dark-text placeholder:text-solutiva-text/30 dark:placeholder:text-solutiva-dark-text/30 focus:outline-none focus:border-solutiva-accent dark:focus:border-solutiva-dark-accent focus:ring-2 focus:ring-solutiva-accent/10 dark:focus:ring-solutiva-dark-accent/10 transition-all duration-200";

// ─── Estado de éxito ──────────────────────────────────────────────────────────

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
      <div className="relative">
        <div className="h-20 w-20 rounded-full bg-solutiva-accent/15 dark:bg-solutiva-dark-accent/15 flex items-center justify-center">
          <CheckCircle2
            size={36}
            className="text-solutiva-accent dark:text-solutiva-dark-accent"
            strokeWidth={1.75}
          />
        </div>
        {/* Anillo pulsante */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full border-2 border-solutiva-accent/30 dark:border-solutiva-dark-accent/30 animate-ping"
        />
      </div>

      <div>
        <h2 className="text-2xl font-black text-solutiva-text dark:text-solutiva-dark-text mb-2 tracking-tight">
          ¡Mensaje recibido!
        </h2>
        <p className="text-sm text-solutiva-text/55 dark:text-solutiva-dark-text/50 max-w-xs mx-auto leading-relaxed">
          Nos pondremos en contacto contigo en menos de 24 horas hábiles.
        </p>
      </div>

      <button
        onClick={onReset}
        className="mt-2 text-sm font-bold text-solutiva-accent dark:text-solutiva-dark-accent hover:underline underline-offset-4 transition-all"
      >
        Enviar otro mensaje →
      </button>
    </div>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────

export default function Contacto() {
  const uid = useId();
  const [status, setStatus]   = useState<FormStatus>("idle");
  const [form, setForm]       = useState<FormData>({
    nombre:   "",
    email:    "",
    servicio: servicios[0],
    mensaje:  "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: integrar servicio de email real (Resend, EmailJS, etc.)
    setTimeout(() => setStatus("success"), 1600);
  };

  return (
    <div className="min-h-screen pt-32 pb-28 bg-solutiva-bg dark:bg-solutiva-dark-bg transition-colors duration-300">
      <section className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* ── Columna izquierda ── */}
          <div className="animate-fade-in-up lg:sticky lg:top-32 space-y-12">

            {/* Encabezado */}
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6 bg-solutiva-accent dark:bg-solutiva-dark-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-solutiva-accent dark:text-solutiva-dark-accent">
                  Contacto
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-solutiva-text dark:text-solutiva-dark-text tracking-tight leading-[1.07] mb-5">
                Llevemos tu idea al{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-solutiva-primary via-solutiva-accent to-solutiva-primary dark:from-solutiva-dark-accent dark:to-white">
                  siguiente nivel.
                </span>
              </h1>
              <p className="text-base text-solutiva-text/60 dark:text-solutiva-dark-text/55 leading-relaxed max-w-md">
                ¿Tienes un desafío técnico o una idea que necesita diseño experto? Estamos listos para escucharte y proponer una solución a medida.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, bgClass, iconClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-4 rounded-2xl border border-solutiva-border dark:border-solutiva-dark-border bg-white dark:bg-solutiva-dark-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${bgClass} ${iconClass} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-solutiva-text/35 dark:text-solutiva-dark-text/30 mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-bold text-solutiva-text dark:text-solutiva-dark-text truncate">
                      {value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="text-solutiva-text/20 dark:text-solutiva-dark-text/20 group-hover:text-solutiva-accent dark:group-hover:text-solutiva-dark-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                  />
                </a>
              ))}
            </div>

            {/* Promesas */}
            <div className="space-y-3">
              {promesas.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="h-7 w-7 rounded-lg bg-solutiva-accent/10 dark:bg-solutiva-dark-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={13} className="text-solutiva-accent dark:text-solutiva-dark-accent" strokeWidth={2} />
                  </span>
                  <span className="text-sm text-solutiva-text/65 dark:text-solutiva-dark-text/60 font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* ── Columna derecha: formulario ── */}
          <div className="bg-white dark:bg-solutiva-dark-card border border-solutiva-border dark:border-solutiva-dark-border rounded-[2.5rem] shadow-soft p-8 md:p-10 animate-fade-in-up [animation-delay:150ms]">
            {status === "success" ? (
              <SuccessState onReset={() => setStatus("idle")} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* Nombre + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Nombre" id={`${uid}-nombre`}>
                    <input
                      id={`${uid}-nombre`}
                      name="nombre"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </Field>
                  <Field label="Email" id={`${uid}-email`}>
                    <input
                      id={`${uid}-email`}
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="nombre@empresa.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </Field>
                </div>

                {/* Servicio */}
                <Field label="¿En qué podemos ayudarte?" id={`${uid}-servicio`}>
                  <div className="relative">
                    <select
                      id={`${uid}-servicio`}
                      name="servicio"
                      value={form.servicio}
                      onChange={handleChange}
                      className={`${inputBase} appearance-none pr-10 cursor-pointer`}
                    >
                      {servicios.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-solutiva-text/35 dark:text-solutiva-dark-text/30"
                      strokeWidth={2}
                    />
                  </div>
                </Field>

                {/* Mensaje */}
                <Field label="Tu mensaje" id={`${uid}-mensaje`}>
                  <textarea
                    id={`${uid}-mensaje`}
                    name="mensaje"
                    rows={5}
                    required
                    placeholder="Cuéntanos sobre tu proyecto, plazos, tecnologías preferidas..."
                    value={form.mensaje}
                    onChange={handleChange}
                    className={`${inputBase} resize-none`}
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group w-full flex items-center justify-center gap-2.5 bg-solutiva-accent dark:bg-solutiva-dark-accent text-solutiva-primary dark:text-solutiva-dark-bg py-4 rounded-2xl font-black text-base hover:opacity-90 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all shadow-md shadow-solutiva-accent/20 dark:shadow-solutiva-dark-accent/20"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={16} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Enviar mensaje
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-solutiva-text/35 dark:text-solutiva-dark-text/30">
                  Al enviar aceptas nuestra{" "}
                  <a href="/privacidad" className="underline underline-offset-2 hover:text-solutiva-accent transition-colors">
                    política de privacidad
                  </a>.
                </p>

              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}