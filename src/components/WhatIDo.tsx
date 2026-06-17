import { Brain, Workflow, Wand2, Rocket } from "lucide-react";

const items = [
  { icon: Brain, title: "Inteligencia Artificial aplicada", desc: "Soluciones reales con IA enfocadas en resultados, no en moda." },
  { icon: Workflow, title: "Automatización de procesos", desc: "Eliminá tareas repetitivas y ganá horas cada semana." },
  { icon: Wand2, title: "Creación de contenido con IA", desc: "Más volumen, mejor calidad, en menos tiempo." },
  { icon: Rocket, title: "Productividad y resultados", desc: "Sistemas que se traducen en clientes, ventas y crecimiento." },
];

export default function WhatIDo() {
  return (
    <section id="que-hago" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-12">
          <span className="chip mb-4">Qué hago</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">IA que <span className="text-gradient">trabaja por vos</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i) => (
            <div key={i.title} className="glow-card p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--electric)] to-[var(--violet)] flex items-center justify-center text-background mb-4">
                <i.icon size={22} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{i.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
