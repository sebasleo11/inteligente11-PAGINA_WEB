import { Bot, Cog, FileText, Magnet, Check } from "lucide-react";

const services = [
  { icon: Bot, title: "Agentes de IA para responder clientes", points: ["Disponibles 24/7", "Multicanal", "Respuestas humanas"] },
  { icon: Cog, title: "Automatización de procesos", points: ["Flujos sin fricción", "Integraciones", "Ahorro de horas"] },
  { icon: FileText, title: "Generación de contenido", points: ["Posteos y guiones", "Tono propio", "Escalable"] },
  { icon: Magnet, title: "Sistemas de captación de leads", points: ["Calificación auto", "Agenda inteligente", "Más reuniones"] },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mb-12">
          <span className="chip mb-4">Servicios</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">Soluciones con IA <span className="text-gradient">para negocios</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.title} className="glow-card p-7 flex gap-5">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-[color-mix(in_oklab,var(--violet)_20%,transparent)] border border-[color-mix(in_oklab,var(--violet)_45%,transparent)] flex items-center justify-center text-[var(--electric)]">
                <s.icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-3">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-[var(--electric)]" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#contacto" className="btn-primary inline-flex px-7 py-3.5 rounded-xl">Quiero aplicar IA en mi negocio</a>
        </div>
      </div>
    </section>
  );
}
