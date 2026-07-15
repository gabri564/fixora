export const metadata = {
  title: "Categorías | Dashboard FIXORA",
};

export default function CategoriesPage() {
  return (
    <div>

      <div
        className="
          flex
          flex-col
          gap-6
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div>

          <h1
            className="
              text-4xl
              font-black
            "
          >
            Categorías
          </h1>

          <p
            className="
              mt-3
              text-muted
            "
          >
            Administra las categorías de los
            productos y recursos publicados
            en FIXORA Creative.
          </p>

        </div>

        <button
          className="
            rounded-2xl
            bg-primary
            px-6
            py-4
            font-bold
            text-black
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          Nueva Categoría
        </button>

      </div>

      <div
        className="
          mt-10
          overflow-x-auto
          rounded-[2rem]
          border
          border-border
          bg-card
          shadow-[var(--shadow)]
        "
      >

        <table className="w-full">

          <thead className="border-b border-border">

            <tr>

              <th className="p-5 text-left">
                Nombre
              </th>

              <th className="p-5 text-left">
                Productos
              </th>

              <th className="p-5 text-left">
                Estado
              </th>

              <th className="p-5 text-left">
                Acciones
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="p-5">
                Branding
              </td>

              <td className="p-5">
                0
              </td>

              <td className="p-5">
                Activa
              </td>

              <td className="p-5">

                <button
                  className="
                    rounded-xl
                    border
                    border-border
                    px-4
                    py-2
                  "
                >
                  Editar
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}