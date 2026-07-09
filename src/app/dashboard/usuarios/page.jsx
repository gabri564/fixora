export const metadata = {
  title: "Usuarios | Dashboard FIXORA",
};

export default function UsersPage() {
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
            Usuarios
          </h1>

          <p
            className="
              mt-3
              text-muted
            "
          >
            Administra los usuarios registrados,
            clientes y administradores de FIXORA.
          </p>

        </div>

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
                Correo
              </th>

              <th className="p-5 text-left">
                Rol
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

              <td className="p-5 text-muted">
                Sin usuarios registrados
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
                  Ver
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}