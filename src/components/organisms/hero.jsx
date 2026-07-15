import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-32
        pb-20
        px-5
        sm:px-6
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-12
          lg:grid-cols-2
        "
      >
        {/* LEFT */}

        <div>

          <p className="font-semibold text-primary">
            FIXORA
          </p>

          <h1
            className="
              mt-4
              text-3xl
              font-bold
              leading-tight
              sm:text-4xl
              lg:text-5xl
            "
          >
            Tecnología moderna para hogares y empresas
          </h1>

          <p
            className="
              mt-5
              text-muted
              leading-7
            "
          >
            Optimización, soporte técnico y soluciones digitales
            para que tu equipo funcione al máximo rendimiento.
          </p>

          {/* BOTONES */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >
            <button
              className="
                w-full
                rounded-xl
                bg-primary
                px-6
                py-3
                font-medium
                text-white
                sm:w-auto
              "
            >
              Solicitar diagnóstico
            </button>

            <button
              className="
                w-full
                rounded-xl
                border
                border-border
                px-6
                py-3
                font-medium
                sm:w-auto
              "
            >
              Ver servicios
            </button>
          </div>

          {/* STATS */}

          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-6
              sm:grid-cols-4
            "
          >
            <div>
              <p className="text-xl font-bold">500+</p>
              <p className="text-sm text-muted">Clientes</p>
            </div>

            <div>
              <p className="text-xl font-bold">300+</p>
              <p className="text-sm text-muted">Equipos</p>
            </div>

            <div>
              <p className="text-xl font-bold">98%</p>
              <p className="text-sm text-muted">Satisfacción</p>
            </div>

            <div>
              <p className="text-xl font-bold">24h</p>
              <p className="text-sm text-muted">Soporte</p>
            </div>
          </div>

        </div>

        {/* IMAGEN */}

        <div className="relative">

          <div
            className="
              absolute
              -inset-8
              rounded-full
              bg-primary/10
              blur-3xl
            "
          />

          <Image
            src="/home/fixora-hero.webp"
            alt="FIXORA Hero"
            width={600}
            height={600}
            className="
              relative
              mx-auto
              w-full
              max-w-md
              rounded-3xl
              object-cover
              shadow-2xl
            "
          />

        </div>

      </div>
    </section>
  );
}