import {
  FaBriefcase as Briefcase,
  FaCode as Code,
  FaServer as Server,
  FaTools as Tool,
  FaBullseye as Target,
  FaEye as Eye,
  FaHeart as Heart,
} from "react-icons/fa";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Creamos sitios web modernos, rápidos, responsivos y optimizados para posicionamiento SEO y experiencia de usuario.",
    Icon: Code,
  },
  {
    title: "Software Empresarial",
    description:
      "Desarrollamos sistemas personalizados para automatizar procesos y mejorar la eficiencia operativa de tu negocio.",
    Icon: Briefcase,
  },
  {
    title: "Soporte Técnico",
    description:
      "Brindamos mantenimiento preventivo y correctivo para equipos informáticos y redes empresariales.",
    Icon: Tool,
  },
  {
    title: "Infraestructura TI",
    description:
      "Implementamos soluciones de redes, servidores, seguridad informática y arquitectura tecnológica escalable.",
    Icon: Server,
  },
];

const values = [
  {
    title: "Nuestra Misión",
    description:
      "Proporcionar soluciones tecnológicas innovadoras, eficientes y de alta calidad que permitan a nuestros clientes optimizar sus procesos internos, mejorar su productividad y alcanzar sus objetivos estratégicos de crecimiento sostenible.",
    Icon: Target,
  },
  {
    title: "Nuestra Visión",
    description:
      "Convertirnos en una empresa líder en innovación tecnológica a nivel regional y nacional, reconocida por la excelencia en nuestros servicios, la calidad de nuestras soluciones y nuestro impacto en la transformación digital de las organizaciones.",
    Icon: Eye,
  },
  {
    title: "Nuestros Valores",
    description:
      "Innovación constante, responsabilidad profesional, integridad en cada proyecto, compromiso con el cliente, transparencia en nuestros procesos, trabajo en equipo y mejora continua como base de nuestro crecimiento.",
    Icon: Heart,
  },
];

export default function EmpresaPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-100 text-gray-900">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
              Soluciones Tecnológicas Integrales
            </span>

            <h1 className="mt-5 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              Impulsando el Futuro Tecnológico de las Empresas Modernas
            </h1>

            <h2 className="mt-3 text-base font-medium text-green-700 md:text-lg">
              Innovación en Software, Hardware, Infraestructura y Transformación Digital
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600">
              Somos una empresa especializada en el desarrollo de soluciones tecnológicas modernas,
              orientadas a la transformación digital de organizaciones públicas y privadas. Nuestro
              objetivo es optimizar procesos, reducir costos operativos y mejorar la eficiencia mediante
              el uso estratégico de la tecnología.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
              Contamos con un equipo multidisciplinario que combina experiencia en desarrollo de software,
              infraestructura tecnológica, soporte técnico y consultoría digital, ofreciendo soluciones
              escalables adaptadas a las necesidades de cada cliente.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700">
                Conocer Más
              </button>
              <button className="rounded-full border border-green-200 bg-white px-6 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-50">
                Nuestros Servicios
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                alt="Empresa tecnológica"
                className="h-[360px] w-full rounded-2xl object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-xs text-gray-500">Innovación + Tecnología + Estrategia</p>
              <h3 className="text-sm font-bold text-green-700">Soluciones Inteligentes Empresariales</h3>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="mb-10 text-center text-2xl font-bold">Nuestra Empresa</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-700">
                  <Icon />
                </div>
                <h3 className="mb-3 text-base font-bold text-green-700">{title}</h3>
                <p className="text-sm leading-6 text-gray-600">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="mb-10 text-center text-2xl font-bold">Nuestros Servicios</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="rounded-2xl bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-lg text-green-700">
                  <Icon />
                </div>
                <h3 className="mb-2 text-sm font-bold text-green-700">{title}</h3>
                <p className="text-xs leading-5 text-gray-600">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold">Construyamos juntos el futuro digital de tu empresa</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600">
            Estamos listos para ayudarte a transformar tu negocio mediante soluciones tecnológicas
            innovadoras, seguras y escalables. Nuestro equipo te acompañará en cada etapa del proceso
            de digitalización.
          </p>
          <button className="mt-6 rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700">
            Contáctanos Ahora
          </button>
        </div>
      </div>
    </section>
  );
}

