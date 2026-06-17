import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contacto" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--violet)]/20 via-transparent to-[var(--electric)]/20 blur-3xl" />
        <h2 className="text-3xl md:text-6xl font-bold leading-tight">
          La IA no es el futuro.<br/>
          <span className="text-gradient">Es el presente.</span>
        </h2>
        <p className="text-muted-foreground text-lg mt-5 max-w-2xl mx-auto">
          La diferencia es si la usás o la ignorás.
        </p>
        <a
          href="https://wa.me/5491131772207?text=Hola%20Sebasti%C3%A1n%2C%20quiero%20aplicar%20IA%20en%20mi%20negocio"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl mt-10 text-base"
        >
          <MessageCircle size={20} /> Hablemos por WhatsApp
        </a>
      </div>
    </section>
  );
}
