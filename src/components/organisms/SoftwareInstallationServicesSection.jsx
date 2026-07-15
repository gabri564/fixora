import SectionBadge from "../atoms/SectionBadge";
import ServiceCard from "../atoms/ServiceCard";

const services = [
  {
    title: "Instalación de software",
    description:
      "Instalamos programas según la necesidad del usuario, verificando compatibilidad con el equipo.",
  },
  {
    title: "Configuración inicial",
    description:
      "Realizamos ajustes básicos para que el software quede listo para su uso personal, académico o laboral.",
  },
  {
    title: "Instalación de Windows",
    description:
      "Configuramos el sistema operativo, controladores, actualizaciones y opciones iniciales del equipo.",
  },
  {
    title: "Instalación de Office",
    description:
      "Configuramos herramientas de ofimática para documentos, hojas de cálculo y presentaciones.",
  },
  {
    title: "Seguridad y antivirus",
    description:
      "Instalamos y configuramos soluciones de protección para mejorar la seguridad del sistema.",
  },
  {
    title: "Optimización del sistema",
    description:
      "Revisamos programas de inicio, rendimiento, limpieza básica y configuración para mejorar la fluidez.",
  },
  {
    title: "Asesoría de software",
    description:
      "Te orientamos para elegir el programa adecuado según tu presupuesto, equipo y tipo de uso.",
  },
  {
    title: "Soporte post-instalación",
    description:
      "Brindamos orientación después de la instalación para resolver dudas o ajustes básicos del programa.",
  },
];

export default function SoftwareInstallationServicesSection() {
  return (
    <section className="mt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionBadge>
            Servicios
          </SectionBadge>

          <h2 className="mt-6 text-4xl font-black text-foreground md:text-5xl">
            Instalación y configuración de software
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Además del catálogo de programas, FIXORA brinda instalación,
            configuración, optimización y asesoría para el uso adecuado del
            software.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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