import { Youtube, Instagram, Linkedin, Facebook, Music2, ExternalLink } from "lucide-react";

const socials = [
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@InteliGENTE11", handle: "@InteliGENTE11" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/inteligente1979", handle: "@inteligente1979" },
  { name: "TikTok", icon: Music2, url: "https://tiktok.com/@inteligente..11", handle: "@inteligente..11" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/sebastianacuna-creadordigital", handle: "Sebastián Acuña" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/sebas11acuna", handle: "sebas11acuna" },
  { name: "Create Studio", icon: ExternalLink, url: "https://inteligente11-create-studio-landing.vercel.app", handle: "Landing oficial" },
];

const stats = [
  { v: "127.779", l: "Visualizaciones" },
  { v: "400", l: "Videos" },
  { v: "993", l: "Suscriptores" },
  { v: "2023", l: "Desde mayo" },
];

export default function Social() {
  return (
    <section id="redes" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-10">
          <span className="chip mb-4">Redes</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">Subo contenido <span className="text-gradient">todas las semanas</span></h2>
          <p className="text-muted-foreground mt-3">Sobre IA aplicada, automatización y productividad real. Desde Argentina al mundo.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.l} className="glow-card p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="glow-card p-5 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-[color-mix(in_oklab,var(--electric)_15%,transparent)] border border-[color-mix(in_oklab,var(--electric)_35%,transparent)] flex items-center justify-center text-[var(--electric)] group-hover:scale-110 transition-transform">
                <s.icon size={20} />
              </div>
              <div className="flex-1">
                <div className="font-semibold">{s.name}</div>
                <div className="text-xs text-muted-foreground">{s.handle}</div>
              </div>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-[var(--electric)] transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
