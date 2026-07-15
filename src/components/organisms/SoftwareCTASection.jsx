import Link from "next/link";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

export default function SoftwareCTASection() {
  return (
    <section className="mt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow)] md:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Cotización
              </span>

              <h2 className="mt-6 text-4xl font-black text-foreground md:text-5xl">
                ¿Buscas un programa o necesitas instalar software en tu equipo?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                Escríbenos y te ayudamos a cotizar software, licencias digitales,
                instalación, configuración u optimización según tu necesidad.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-primary-hover"
                >
                  Solicitar cotización
                  <FiArrowRight />
                </Link>

                <Link
                  href="#catalogo-software"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-bold text-foreground transition hover:border-primary hover:text-primary"
                >
                  Ver catálogo
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-background p-8 text-center">
              <FiMessageCircle className="mx-auto text-6xl text-primary" />

              <h3 className="mt-6 text-2xl font-black text-foreground">
                Atención personalizada
              </h3>

              <p className="mt-4 leading-7 text-muted">
                Cuéntanos qué software necesitas y te orientamos con una opción
                adecuada para tu equipo, trabajo o estudio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}