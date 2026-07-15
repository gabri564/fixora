export const metadata = {
  title: "Configuración | Dashboard FIXORA",
};

export default function SettingsPage() {
  return (
    <div>

      <div>

        <h1
          className="
            text-4xl
            font-black
          "
        >
          Configuración
        </h1>

        <p
          className="
            mt-3
            text-muted
          "
        >
          Configura la información general
          de la plataforma FIXORA.
        </p>

      </div>

      <form
        className="
          mt-10
          space-y-8
        "
      >

        <div
          className="
            rounded-[2rem]
            border
            border-border
            bg-card
            p-8
            shadow-[var(--shadow)]
          "
        >

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Información General
          </h2>

          <div
            className="
              mt-8
              grid
              gap-6
              md:grid-cols-2
            "
          >

            <div>

              <label className="font-medium">
                Nombre del sitio
              </label>

              <input
                type="text"
                defaultValue="FIXORA"
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  px-5
                  py-4
                  outline-none
                  focus:border-primary
                "
              />

            </div>

            <div>

              <label className="font-medium">
                Correo de contacto
              </label>

              <input
                type="email"
                placeholder="contacto@fixora.com"
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  px-5
                  py-4
                  outline-none
                  focus:border-primary
                "
              />

            </div>

            <div>

              <label className="font-medium">
                Teléfono
              </label>

              <input
                type="text"
                placeholder="+51 999 999 999"
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  px-5
                  py-4
                  outline-none
                  focus:border-primary
                "
              />

            </div>

            <div>

              <label className="font-medium">
                Dirección
              </label>

              <input
                type="text"
                placeholder="Dirección de la empresa"
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  px-5
                  py-4
                  outline-none
                  focus:border-primary
                "
              />

            </div>

          </div>

        </div>

        <div
          className="
            rounded-[2rem]
            border
            border-border
            bg-card
            p-8
            shadow-[var(--shadow)]
          "
        >

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Redes Sociales
          </h2>

          <div
            className="
              mt-8
              space-y-6
            "
          >

            <input
              type="text"
              placeholder="Facebook"
              className="
                w-full
                rounded-2xl
                border
                border-border
                bg-background
                px-5
                py-4
                outline-none
                focus:border-primary
              "
            />

            <input
              type="text"
              placeholder="Instagram"
              className="
                w-full
                rounded-2xl
                border
                border-border
                bg-background
                px-5
                py-4
                outline-none
                focus:border-primary
              "
            />

            <input
              type="text"
              placeholder="WhatsApp"
              className="
                w-full
                rounded-2xl
                border
                border-border
                bg-background
                px-5
                py-4
                outline-none
                focus:border-primary
              "
            />

          </div>

        </div>

        <button
          type="submit"
          className="
            rounded-2xl
            bg-primary
            px-8
            py-4
            font-bold
            text-black
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          Guardar Configuración
        </button>

      </form>

    </div>
  );
}