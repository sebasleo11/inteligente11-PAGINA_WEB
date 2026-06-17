import heroImg from "@/assets/sebastian-hero.jpg";
import { MessageSquare, Sparkles, Users, CalendarCheck, ArrowRight } from "lucide-react";

const flow = [
  { icon: MessageSquare, label: "Mensaje" },
  { icon: Sparkles, label: "IA" },
  { icon: Users, label: "Cliente" },
  { icon: CalendarCheck, label: "Agenda" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-7">
          <span className="chip"><span className="w-2 h-2 rounded-full bg-[var(--electric)] animate-pulse" /> IA aplicada a negocios reales</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
            <span className="text-gradient">IA simple.</span><br/>
            <span className="text-gradient">IA útil.</span><br/>
            <span className="text-foreground">IA para vos.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Ayudo a emprendedores y negocios a aplicar inteligencia artificial de forma práctica y real.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contenido" className="btn-primary px-6 py-3 rounded-xl inline-flex items-center gap-2">Ver contenido <ArrowRight size={18} /></a>
            <a href="#contacto" className="btn-ghost px-6 py-3 rounded-xl">Trabajar conmigo</a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div><div className="text-foreground font-semibold text-xl">+127K</div>visualizaciones</div>
            <div className="w-px h-10 bg-border" />
            <div><div className="text-foreground font-semibold text-xl">400+</div>videos</div>
            <div className="w-px h-10 bg-border" />
            <div><div className="text-foreground font-semibold text-xl">993</div>suscriptores</div>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--violet)] to-[var(--electric)] opacity-30 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden border border-[color-mix(in_oklab,var(--electric)_30%,transparent)] animate-pulse-glow">
              <img src={heroImg} alt="Sebastián Acuña, creador de InteliGENTE11" width={1024} height={1280} className="w-full h-auto" />
            </div>
            {/* Flow */}
            <div className="mt-6 glow-card p-4 backdrop-blur">
              <div className="flex items-center justify-between gap-2">
                {flow.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 flex-1">
                    <div className="flex flex-col items-center gap-1.5 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-[color-mix(in_oklab,var(--electric)_15%,transparent)] border border-[color-mix(in_oklab,var(--electric)_40%,transparent)] flex items-center justify-center text-[var(--electric)]">
                        <f.icon size={18} />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{f.label}</span>
                    </div>
                    {i < flow.length - 1 && (
                      <div className="relative flex-1 h-px bg-border overflow-hidden">
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[var(--electric)] to-transparent animate-flow" style={{ animationDelay: `${i * 0.6}s` }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
