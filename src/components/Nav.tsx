import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-neon.jpeg";

const links = [
  { href: "#contenido", label: "Contenido" },
  { href: "#que-hago", label: "Qué hago" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sistemas", label: "Sistemas" },
  { href: "#sobre-mi", label: "Sobre mí" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 md:h-24 flex items-center justify-between">
        <a href="#top" aria-label="InteliGENTE11" className="logo-frame inline-flex items-center">
          <img src={logo} alt="InteliGENTE11" className="h-10 sm:h-11 md:h-14 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contacto" className="hidden md:inline-flex btn-primary px-4 py-2 rounded-lg text-sm">Trabajar conmigo</a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col p-5 gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80">{l.label}</a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary px-4 py-2 rounded-lg text-center">Trabajar conmigo</a>
          </div>
        </div>
      )}
    </header>
  );
}
