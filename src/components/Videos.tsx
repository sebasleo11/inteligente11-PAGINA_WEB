const videos = [
  { id: "eAzYYAX7yWY", title: "Cómo crear tu ebook en un minuto", views: "+10.000 visualizaciones" },
  { id: "6qjGbuFB0fI", title: "Cómo crear tu landing page", views: "+4.100 visualizaciones" },
  { id: "nMzS_AiSjjE", title: "Automatización con IA (Model SXL)", views: "+1.500 visualizaciones", short: true },
];

export default function Videos() {
  return (
    <section id="contenido" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mb-12">
          <span className="chip mb-4">Prueba social</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">Contenido que ya está ayudando a <span className="text-gradient">miles de personas</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 flex flex-col gap-6">
            {videos.filter((v) => !v.short).map((v) => (
              <div key={v.id} className="glow-card overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground">{v.title}</h3>
                  <p className="text-sm text-[var(--electric)] mt-1">{v.views}</p>
                </div>
              </div>
            ))}
          </div>
          {videos.filter((v) => v.short).map((v) => (
            <div key={v.id} className="glow-card overflow-hidden">
              <div className="relative aspect-[9/16] bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm text-[var(--electric)] mt-1">{v.views}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
          Comparto contenido práctico todas las semanas para que puedas aplicar IA sin complicarte.
        </p>
      </div>
    </section>
  );
}
