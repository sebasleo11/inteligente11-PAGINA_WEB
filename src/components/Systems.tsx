import { MessageCircle, HelpCircle, Filter, CalendarCheck2 } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Responde", desc: "Atiende mensajes al instante en cualquier canal." },
  { icon: HelpCircle, title: "Pregunta", desc: "Entiende necesidades con preguntas inteligentes." },
  { icon: Filter, title: "Filtra", desc: "Identifica clientes calificados de forma automática." },
  { icon: CalendarCheck2, title: "Agenda", desc: "Coordina reuniones sin intervención humana." },
];

export default function Systems() {
  return (
    <section id="sistemas" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-6xl mx-auto px-5 md:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="chip mb-4">Sistemas</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">Cómo funciona un <span className="text-gradient">sistema inteligente</span></h2>
          <p className="text-muted-foreground mt-4">Infraestructura de conversión inteligente multicanal.</p>
        </div>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="glow-card p-6 text-center h-full">
                <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-[var(--electric)] to-[var(--violet)] flex items-center justify-center text-background mb-3">
                  <s.icon size={22} />
                </div>
                <div className="text-xs uppercase tracking-widest text-[var(--electric)] mb-1">Paso 0{i + 1}</div>
                <h3 className="font-semibold mb-1.5">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-10">
          Ejemplo en producción: <span className="text-foreground font-semibold">Model SXL</span> — sistema de conversión inteligente multicanal.
        </p>
      </div>
    </section>
  );
}
