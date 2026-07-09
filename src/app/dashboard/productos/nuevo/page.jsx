export const metadata = {
  title: "Nuevo Producto | Dashboard FIXORA",
};

export default function NewProductPage() {
  return (
    <div>

      <div>

        <h1
          className="
            text-4xl
            font-black
          "
        >
          Nuevo Producto
        </h1>

        <p
          className="
            mt-3
            text-muted
          "
        >
          Publica un nuevo recurso, diseño,
          plantilla, proyecto o producto digital
          para FIXORA Creative.
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
                Título
              </label>

              <input
                type="text"
                placeholder="Nombre del producto"
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
                Categoría
              </label>

              <select
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
              >
                <option>Branding</option>
                <option>Flyers</option>
                <option>Logos</option>
                <option>Mockups</option>
                <option>Redes Sociales</option>
              </select>

            </div>

            <div>

              <label className="font-medium">
                Tipo
              </label>

              <select
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
              >
                <option>Gratis</option>
                <option>Premium</option>
                <option>Proyecto</option>
              </select>

            </div>

            <div>

              <label className="font-medium">
                Precio
              </label>

              <input
                type="number"
                placeholder="0.00"
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
            Descripción
          </h2>

          <textarea
            rows={8}
            placeholder="Describe el producto..."
            className="
              mt-6
              w-full
              rounded-2xl
              border
              border-border
              bg-background
              p-5
              outline-none
              focus:border-primary
            "
          />

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
            Imagen
          </h2>

          <input
            type="file"
            className="
              mt-6
              block
              w-full
            "
          />

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
          Guardar Producto
        </button>

      </form>

    </div>
  );
}