import aboutImg from "@/assets/sebastian-about.jpg";
import { GraduationCap, Code2, Sparkles, Mic } from "lucide-react";

const exp = [
  { icon: GraduationCap, label: "Cursos" },
  { icon: Mic, label: "Bootcamps" },
  { icon: Code2, label: "Automatizaciones" },
  { icon: Sparkles, label: "Creación de contenido" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-[var(--electric)] to-[var(--violet)] opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border border-border max-w-sm mx-auto">
            <img src={aboutImg} alt="Sebastián Acuña" width={1024} height={1024} loading="lazy" className="w-full h-auto" />
          </div>
        </div>
        <div>
          <span className="chip mb-4">Sobre mí</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Soy <span className="text-gradient">Sebastián Acuña</span></h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Creador de InteliGENTE11. Trabajo con inteligencia artificial aplicada a negocios reales.
            Mi objetivo es que cualquier persona pueda entender y usar IA sin complicaciones.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-7">
            {exp.map((e) => (
              <div key={e.label} className="flex items-center gap-3 glow-card p-3 px-4">
                <e.icon size={18} className="text-[var(--electric)]" />
                <span className="text-sm">{e.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
