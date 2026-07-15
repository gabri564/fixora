import Link from "next/link";
import SectionBadge from "../atoms/SectionBadge";
import {
  FiArrowRight,
  FiDownloadCloud,
  FiMonitor,
  FiShield,
} from "react-icons/fi";

export default function SoftwareHero() {
  return (
    <section className="pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionBadge>
              Software
            </SectionBadge>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-foreground md:text-7xl">
              Catálogo de software, licencias e instalación profesional
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              En FIXORA ofrecemos programas, licencias digitales y servicios de
              instalación para equipos personales, profesionales y empresariales.
              Te ayudamos a elegir, instalar y configurar el software adecuado
              para tu necesidad.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#catalogo-software"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-white transition hover:bg-primary-hover"
              >
                Ver programas
                <FiArrowRight />
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 font-bold text-foreground transition hover:border-primary hover:text-primary"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-background p-6">
                <FiDownloadCloud className="text-4xl text-primary" />
                <h3 className="mt-5 text-2xl font-black text-foreground">
                  Catálogo digital
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  Software para oficina, estudio, diseño, seguridad y
                  productividad.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-background p-6">
                <FiShield className="text-4xl text-primary" />
                <h3 className="mt-5 text-2xl font-black text-foreground">
                  Licencias
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  Programas sujetos a disponibilidad, cotización y tipo de
                  licencia.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-background p-6 sm:col-span-2">
                <FiMonitor className="text-4xl text-primary" />
                <h3 className="mt-5 text-2xl font-black text-foreground">
                  Instalación y configuración
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  También brindamos instalación, configuración, optimización y
                  asesoría para el uso correcto del software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}