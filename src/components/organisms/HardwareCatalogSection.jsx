import SectionBadge from "../atoms/SectionBadge";
import HardwareProductCard from "../molecules/HardwareProductCard";

const products = [
  {
    title: "Laptop empresarial",
    category: "Laptops",
    status: "Consultar stock",
    priceLabel: "Cotizar",
    description:
      "Equipo recomendado para oficina, clases, trabajo remoto y uso profesional diario.",
    specs: ["Intel / AMD", "SSD", "RAM ampliable"],
  },
  {
    title: "PC de escritorio",
    category: "Computadoras",
    status: "A pedido",
    priceLabel: "Cotizar",
    description:
      "Computadora armada según necesidad: estudio, oficina, diseño, edición o gaming.",
    specs: ["Personalizable", "Alto rendimiento", "Garantía"],
  },
  {
    title: "Mouse inalámbrico",
    category: "Periféricos",
    status: "Disponible",
    priceLabel: "Consultar",
    description:
      "Mouse cómodo y práctico para oficina, estudio, navegación y trabajo diario.",
    specs: ["USB", "Inalámbrico", "Ergonómico"],
  },
  {
    title: "Teclado profesional",
    category: "Periféricos",
    status: "Consultar stock",
    priceLabel: "Consultar",
    description:
      "Teclados para productividad, estudio, oficina o configuración gamer.",
    specs: ["USB", "Mecánico / Membrana", "Resistente"],
  },
  {
    title: "Memoria RAM",
    category: "Componentes",
    status: "Disponible",
    priceLabel: "Cotizar",
    description:
      "Mejora la velocidad y capacidad de respuesta de laptops y computadoras.",
    specs: ["DDR3 / DDR4", "8GB / 16GB", "Instalación"],
  },
  {
    title: "Disco SSD",
    category: "Almacenamiento",
    status: "Disponible",
    priceLabel: "Cotizar",
    description:
      "Actualiza tu equipo con almacenamiento rápido para mejorar el arranque y rendimiento.",
    specs: ["240GB", "480GB", "1TB"],
  },
  {
    title: "Tarjeta gráfica",
    category: "Componentes",
    status: "A pedido",
    priceLabel: "Cotizar",
    description:
      "Opciones gráficas para diseño, edición, videojuegos y tareas de alto consumo.",
    specs: ["NVIDIA / AMD", "Gaming", "Diseño"],
  },
  {
    title: "Monitor Full HD",
    category: "Monitores",
    status: "Consultar stock",
    priceLabel: "Consultar",
    description:
      "Pantallas para trabajo, estudio, diseño, entretenimiento o configuración doble monitor.",
    specs: ["Full HD", "HDMI", "Oficina / Gaming"],
  },
];

export default function HardwareCatalogSection() {
  return (
    <section id="catalogo-hardware" className="mt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionBadge>
              Catálogo
            </SectionBadge>

            <h2 className="mt-6 text-4xl font-black text-foreground md:text-5xl">
              Productos destacados
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Estos son algunos productos que pueden solicitarse mediante
              cotización. Más adelante se podrá integrar carrito, stock y pagos.
            </p>
          </div>

          <p className="rounded-3xl border border-border bg-card px-6 py-4 text-sm font-semibold leading-7 text-muted shadow-[var(--shadow)] md:max-w-sm">
            Además, contamos con otros productos tecnológicos de calidad sujetos
            a disponibilidad.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <HardwareProductCard
              key={product.title}
              title={product.title}
              category={product.category}
              status={product.status}
              priceLabel={product.priceLabel}
              description={product.description}
              specs={product.specs}
              buttonLabel="Cotizar producto"
              href="/contacto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}