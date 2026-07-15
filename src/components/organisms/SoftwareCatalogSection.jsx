import SectionBadge from "../atoms/SectionBadge";
import SoftwareProductCard from "../molecules/SoftwareProductCard";

const products = [
  {
    title: "Windows",
    category: "Sistema operativo",
    status: "Consultar licencia",
    priceLabel: "Cotizar",
    description:
      "Instalación y configuración de sistema operativo para laptops y computadoras de escritorio.",
    specs: ["Instalación", "Configuración", "Soporte"],
  },
  {
    title: "Microsoft Office",
    category: "Ofimática",
    status: "Consultar disponibilidad",
    priceLabel: "Cotizar",
    description:
      "Programas para documentos, hojas de cálculo, presentaciones y trabajo administrativo.",
    specs: ["Word", "Excel", "PowerPoint"],
  },
  {
    title: "Antivirus",
    category: "Seguridad",
    status: "Disponible",
    priceLabel: "Consultar",
    description:
      "Soluciones de protección para equipos personales, de estudio, oficina o empresa.",
    specs: ["Protección", "Seguridad", "Actualizaciones"],
  },
  {
    title: "Adobe Photoshop",
    category: "Diseño",
    status: "A pedido",
    priceLabel: "Cotizar",
    description:
      "Software para edición de imágenes, diseño visual, retoque fotográfico y contenido digital.",
    specs: ["Diseño", "Edición", "Creatividad"],
  },
  {
    title: "Adobe Illustrator",
    category: "Diseño",
    status: "A pedido",
    priceLabel: "Cotizar",
    description:
      "Herramienta para diseño vectorial, logos, piezas gráficas, ilustraciones y branding.",
    specs: ["Vectorial", "Logos", "Branding"],
  },
  {
    title: "AutoCAD",
    category: "Ingeniería",
    status: "Consultar licencia",
    priceLabel: "Cotizar",
    description:
      "Software técnico para planos, diseño arquitectónico, ingeniería y proyectos profesionales.",
    specs: ["Planos", "Diseño técnico", "Profesional"],
  },
  {
    title: "Canva Pro",
    category: "Diseño digital",
    status: "Consultar",
    priceLabel: "Cotizar",
    description:
      "Herramienta para crear diseños, presentaciones, publicaciones y contenido para redes sociales.",
    specs: ["Diseños", "Plantillas", "Redes sociales"],
  },
  {
    title: "Utilitarios del sistema",
    category: "Mantenimiento",
    status: "Disponible",
    priceLabel: "Consultar",
    description:
      "Programas para limpieza, compresión, recuperación, diagnóstico y optimización del equipo.",
    specs: ["Limpieza", "Optimización", "Mantenimiento"],
  },
];

export default function SoftwareCatalogSection() {
  return (
    <section id="catalogo-software" className="mt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionBadge>
              Catálogo
            </SectionBadge>

            <h2 className="mt-6 text-4xl font-black text-foreground md:text-5xl">
              Software destacado
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Estos son algunos programas y soluciones digitales que pueden
              solicitarse mediante cotización. Más adelante se podrá integrar
              carrito, stock digital y pagos.
            </p>
          </div>

          <p className="rounded-3xl border border-border bg-card px-6 py-4 text-sm font-semibold leading-7 text-muted shadow-[var(--shadow)] md:max-w-sm">
            Además, contamos con otros programas y licencias digitales sujetos a
            disponibilidad y cotización.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <SoftwareProductCard
              key={product.title}
              title={product.title}
              category={product.category}
              status={product.status}
              priceLabel={product.priceLabel}
              description={product.description}
              specs={product.specs}
              buttonLabel="Cotizar software"
              href="/contacto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}