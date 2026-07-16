import SectionBadge from "../atoms/SectionBadge";
import HardwareCategoryCard from "../molecules/HardwareCategoryCard";

const categories = [
  {
    iconName: "monitor",
    title: "Laptops",
    description:
      "Equipos portátiles para estudio, oficina, trabajo remoto, diseño y uso profesional.",
  },
  {
    iconName: "server",
    title: "PCs de escritorio",
    description:
      "Computadoras armadas o personalizadas según necesidad, presupuesto y tipo de uso.",
  },
  {
    iconName: "mouse",
    title: "Mouse y periféricos",
    description:
      "Mouse, teclados, audífonos, cámaras web y accesorios para mejorar tu experiencia.",
  },
  {
    iconName: "cpu",
    title: "Memorias RAM",
    description:
      "Componentes para mejorar la velocidad, fluidez y capacidad de respuesta del equipo.",
  },
  {
    iconName: "hardDrive",
    title: "Discos SSD",
    description:
      "Unidades de almacenamiento para acelerar el encendido, carga de programas y archivos.",
  },
  {
    iconName: "zap",
    title: "Tarjetas gráficas",
    description:
      "Componentes orientados a diseño, edición, videojuegos, modelado y alto rendimiento.",
  },
  {
    iconName: "grid",
    title: "Cases y fuentes",
    description:
      "Gabinetes, fuentes de poder y componentes internos para equipos más estables.",
  },
  {
    iconName: "wifi",
    title: "Redes y conectividad",
    description:
      "Routers, adaptadores, repetidores y accesorios para mejorar la conexión.",
  },
  {
    iconName: "camera",
    title: "Cámaras y accesorios",
    description:
      "Cámaras web, soportes, adaptadores y productos útiles para clases o reuniones.",
  },
  {
    iconName: "headphones",
    title: "Audio y accesorios",
    description:
      "Audífonos, parlantes y accesorios tecnológicos para uso personal o profesional.",
  },
  {
    iconName: "box",
    title: "Otros productos",
    description:
      "También contamos con otros productos tecnológicos de calidad según disponibilidad.",
  },
];

export default function HardwareCategoriesSection() {
  return (
    <section className="mt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionBadge>
            Categorías
          </SectionBadge>

          <h2 className="mt-6 text-4xl font-black text-foreground md:text-5xl">
            Productos de hardware disponibles
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Explora nuestras categorías principales de hardware, componentes,
            periféricos y accesorios tecnológicos para diferentes necesidades.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <HardwareCategoryCard
              key={category.title}
              iconName={category.iconName}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}