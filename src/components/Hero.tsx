;
// 1. Importación de componentes de iconos
import AdobeillustratorIcon from "./icons/adobeillustrator";
import CssIcon from "./icons/css";
import ExpoIcon from "./icons/expo";
import FigmaIcon from "./icons/figma";
import GitIcon from "./icons/git";
import GooglemapsIcon from "./icons/googlemaps";
import JavascriptIcon from "./icons/javascript";
import NodedotjsIcon from "./icons/nodedotjs";
import ReactIcon from "./icons/react";
import StripeIcon from "./icons/stripe";
import SupabaseIcon from "./icons/supabase";
import TailwindcssIcon from "./icons/tailwindcss";
import TwilioIcon from "./icons/twilio";
import TypescriptIcon from "./icons/typescript";
import VisualstudiocodeIcon from "./icons/visualstudiocode";
import ViteIcon from "./icons/vite";

export default function Hero() {
  // CONFIGURACIÓN GLOBAL PROFESIONAL
  const iconSize = 52; // Tamaño de todos los iconos
  const scrollDuration = "40s"; // Velocidad del carrusel

  const techStack = [
    { name: "Adobe Illustrator", Icon: AdobeillustratorIcon, color: "#FF9A00" },
    { name: "CSS", Icon: CssIcon, color: "#1572B6" },
    { name: "Expo", Icon: ExpoIcon, color: "#000000" },
    { name: "Figma", Icon: FigmaIcon, color: "#F24E1E" },
    { name: "Git", Icon: GitIcon, color: "#F05032" },
    { name: "Google Maps", Icon: GooglemapsIcon, color: "#4285F4" },
    { name: "JavaScript", Icon: JavascriptIcon, color: "#F7DF1E" },
    { name: "Nodejs", Icon: NodedotjsIcon, color: "#339933" },
    { name: "React", Icon: ReactIcon, color: "#61DAFB" },
    { name: "Supabase", Icon: SupabaseIcon, color: "#3ECF8E" },
    { name: "Stripe", Icon: StripeIcon, color: "#635BFF" },
    { name: "TailwindCSS", Icon: TailwindcssIcon, color: "#06B6D4" },
    { name: "Twilio", Icon: TwilioIcon, color: "#F22F46" },
    { name: "TypeScript", Icon: TypescriptIcon, color: "#3178C6" },
    { name: "VS Code", Icon: VisualstudiocodeIcon, color: "#007ACC" },
    { name: "Vite", Icon: ViteIcon, color: "#646CFF" },
  ];

  // Triplicamos para cubrir pantallas Ultra-Wide sin saltos
  const scrollingStack = [...techStack, ...techStack, ...techStack];

  return (
    <section className="relative overflow-hidden bg-solutiva-bg dark:bg-solutiva-dark-bg transition-colors duration-500">
      
      {/* Glow de fondo decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-solutiva-accent/15 dark:bg-solutiva-dark-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-solutiva-primary/10 dark:bg-solutiva-dark-accent/10 rounded-full blur-[100px]" />
      </div>

      {/* BLOQUE CENTRADO: Título y CTAs */}
      <div className="max-w-6xl mx-auto px-6 pt-44 pb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-solutiva-dark-card border border-solutiva-border dark:border-solutiva-dark-border mb-8 animate-fade-in-up shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solutiva-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-solutiva-accent"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-solutiva-primary dark:text-solutiva-dark-accent">
            Expertos en Transformación Digital
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] text-solutiva-text dark:text-solutiva-dark-text tracking-tight animate-fade-in-up">
          Desarrollo de software que <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-solutiva-primary via-solutiva-accent to-solutiva-primary dark:from-solutiva-dark-accent dark:to-white">
            impulsa tu negocio
          </span>
        </h1>

        <p className="text-lg md:text-xl text-solutiva-text/70 dark:text-solutiva-dark-text/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
          Creamos soluciones digitales modernas, escalables y enfocadas en resultados.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms] mb-12">
          <button className="w-full sm:w-auto bg-solutiva-accent dark:bg-solutiva-dark-accent text-solutiva-primary dark:text-solutiva-dark-bg px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-lg active:scale-95">
            Solicitar cotización
          </button>
        </div>
      </div>

      {/* BLOQUE FULL-WIDTH: Carrusel con Brillo Radial */}
      <div className="w-full pb-32 animate-fade-in-up [animation-delay:600ms]">
        <div className="text-center mb-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-solutiva-text/40 dark:text-solutiva-dark-text/40 mb-2">
            Tecnologías de Vanguardia
          </p>
          <div className="h-px w-12 bg-solutiva-accent mx-auto" />
        </div>

        <div className="relative w-full overflow-hidden group">
          {/* Degradados laterales Premium */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-solutiva-bg dark:from-solutiva-dark-bg to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-solutiva-bg dark:from-solutiva-dark-bg to-transparent z-20" />

          {/* Contenedor de Scroll */}
          <div className="flex animate-scroll hover:[animation-play-state:paused] gap-12 md:gap-24 py-12 items-center">
            {scrollingStack.map((tech, index) => {
              const techId = `${tech.name.replace(/\s+/g, '-').toLowerCase()}-${index}`;
              return (
                <div 
                  key={techId} 
                  className={`group-${techId} relative flex flex-col items-center justify-center transition-all duration-300 hover:scale-125`}
                  style={{ width: iconSize * 1, height: iconSize * 1 }}
                >
                  {/* Icono */}
                  <div className="relative z-10">
                    <tech.Icon size={iconSize} />
                  </div>
                  
                  {/* Inyector de Estilos para el Brillo Radial Detrás */}
                  <style dangerouslySetInnerHTML={{
                    __html: `
                      .group-${techId} svg {
                        fill: ${tech.color};
                        transition: all 0.3s ease;
                        filter: drop-shadow(0 0 2px ${tech.color}22);
                      }

                      /* Pseudo-elemento para el aura radial */
                      .group-${techId}::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%) scale(0.5);
                        width: ${iconSize * 2.5}px;
                        height: ${iconSize * 2.5}px;
                        background: radial-gradient(circle, ${tech.color}33 0%, transparent 90%);
                        border-radius: 50%;
                        transition: all 0.4s ease;
                        opacity: 0;
                        z-index: 0;
                      }

                      /* Efecto Hover: Activa brillo radial y mejora nitidez */
                      .group-${techId}:hover::before {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                      }
                      
                      .group-${techId}:hover svg {
                        filter: drop-shadow(0 0 10px ${tech.color}66);
                      }
                    `
                  }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* LÓGICA DE ANIMACIÓN CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-33.333%)); }
          }
          .animate-scroll {
            animation: scroll ${scrollDuration} linear infinite;
            display: flex;
            width: max-content;
          }
        `
      }} />
    </section>
  );
}