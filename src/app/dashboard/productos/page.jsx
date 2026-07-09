import Link from "next/link";

export const metadata = {
  title: "Productos | Dashboard FIXORA",
};

export default function DashboardProductsPage() {
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
            Productos
          </h1>

          <p
            className="
              mt-3
              text-muted
            "
          >
            Administra todos los recursos digitales,
            diseños gratuitos, premium y proyectos
            publicados en FIXORA Creative.
          </p>

        </div>

        <Link
          href="/dashboard/productos/nuevo"
          className="
            inline-flex
            items-center
            justify-center
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
          Nuevo Producto
        </Link>

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
                Imagen
              </th>

              <th className="p-5 text-left">
                Título
              </th>

              <th className="p-5 text-left">
                Categoría
              </th>

              <th className="p-5 text-left">
                Tipo
              </th>

              <th className="p-5 text-left">
                Precio
              </th>

              <th className="p-5 text-left">
                Acciones
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="p-5 text-muted">
                —
              </td>

              <td className="p-5 text-muted">
                Sin productos registrados
              </td>

              <td className="p-5">-</td>

              <td className="p-5">-</td>

              <td className="p-5">-</td>

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