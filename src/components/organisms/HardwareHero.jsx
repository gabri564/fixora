import Link from "next/link";
import SectionBadge from "../atoms/SectionBadge";
import { FiArrowRight, FiCpu, FiShoppingBag, FiTool } from "react-icons/fi";

export default function HardwareHero() {
  return (
    <section className="pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionBadge>
              Hardware
            </SectionBadge>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-foreground md:text-7xl">
              Catálogo de hardware y servicios técnicos para tus equipos
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              En FIXORA ofrecemos laptops, componentes, periféricos y accesorios
              tecnológicos de calidad. También brindamos soporte técnico,
              mantenimiento, diagnóstico y asesoría para mejorar el rendimiento
              de tus equipos.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#catalogo-hardware"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-white transition hover:bg-primary-hover"
              >
                Ver productos
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
                <FiShoppingBag className="text-4xl text-primary" />
                <h3 className="mt-5 text-2xl font-black text-foreground">
                  Catálogo
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  Productos tecnológicos para trabajo, estudio, diseño y gaming.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-background p-6">
                <FiTool className="text-4xl text-primary" />
                <h3 className="mt-5 text-2xl font-black text-foreground">
                  Soporte
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  Diagnóstico, mantenimiento y reparación de equipos.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-background p-6 sm:col-span-2">
                <FiCpu className="text-4xl text-primary" />
                <h3 className="mt-5 text-2xl font-black text-foreground">
                  Componentes de calidad
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  Trabajamos con productos sujetos a disponibilidad y cotización,
                  priorizando compatibilidad, rendimiento y durabilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}