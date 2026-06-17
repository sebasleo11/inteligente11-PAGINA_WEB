import logo from "@/assets/logo-neon.jpeg";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="logo-frame inline-flex">
          <img src={logo} alt="InteliGENTE11" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
        </span>
        <p>© {new Date().getFullYear()} Sebastián Acuña — Argentina. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
