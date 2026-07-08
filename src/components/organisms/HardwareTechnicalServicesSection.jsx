import SectionBadge from "../atoms/SectionBadge";
import ServiceCard from "../atoms/ServiceCard";

const services = [
  {
    title: "Diagnóstico técnico",
    description:
      "Revisión del estado del equipo para identificar fallas de rendimiento, temperatura, almacenamiento, memoria o componentes.",
  },
  {
    title: "Mantenimiento preventivo",
    description:
      "Limpieza interna, revisión de ventiladores, control de temperatura y prevención de fallas futuras.",
  },
  {
    title: "Instalación de componentes",
    description:
      "Instalamos memorias RAM, discos SSD, tarjetas gráficas, fuentes de poder y otros componentes compatibles.",
  },
  {
    title: "Reparación de equipos",
    description:
      "Atención de fallas físicas en laptops, PCs, pantallas, teclados, puertos, cargadores y periféricos.",
  },
  {
    title: "Optimización térmica",
    description:
      "Cambio de pasta térmica, limpieza de disipadores y mejora del flujo de aire para evitar sobrecalentamiento.",
  },
  {
    title: "Asesoría de compra",
    description:
      "Te ayudamos a elegir el producto correcto según tu necesidad, presupuesto, compatibilidad y tipo de uso.",
  },
];

export default function HardwareTechnicalServicesSection() {
  return (
    <section className="mt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionBadge>
            Servicios técnicos
          </SectionBadge>

          <h2 className="mt-6 text-4xl font-black text-foreground md:text-5xl">
            Soporte técnico para hardware
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Además del catálogo de productos, FIXORA brinda atención técnica
            para mejorar, reparar y mantener tus equipos en buen estado.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}