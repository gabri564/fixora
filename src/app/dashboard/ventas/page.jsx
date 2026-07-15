export const metadata = {
  title: "Ventas | Dashboard FIXORA",
};

export default function SalesPage() {
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
            Ventas
          </h1>

          <p
            className="
              mt-3
              text-muted
            "
          >
            Visualiza el historial de ventas,
            ingresos y estado de los pagos
            realizados por los clientes.
          </p>

        </div>

      </div>

      <div
        className="
          mt-10
          grid
          gap-6
          md:grid-cols-3
        "
      >

        <div
          className="
            rounded-[2rem]
            border
            border-border
            bg-card
            p-6
            shadow-[var(--shadow)]
          "
        >

          <p className="text-muted">
            Ventas Totales
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-black
            "
          >
            S/ 0.00
          </h2>

        </div>

        <div
          className="
            rounded-[2rem]
            border
            border-border
            bg-card
            p-6
            shadow-[var(--shadow)]
          "
        >

          <p className="text-muted">
            Pedidos
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-black
            "
          >
            0
          </h2>

        </div>

        <div
          className="
            rounded-[2rem]
            border
            border-border
            bg-card
            p-6
            shadow-[var(--shadow)]
          "
        >

          <p className="text-muted">
            Clientes
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-black
            "
          >
            0
          </h2>

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
                Venta
              </th>

              <th className="p-5 text-left">
                Cliente
              </th>

              <th className="p-5 text-left">
                Monto
              </th>

              <th className="p-5 text-left">
                Método
              </th>

              <th className="p-5 text-left">
                Fecha
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td
                className="
                  p-5
                  text-muted
                "
              >
                Sin ventas registradas
              </td>

              <td className="p-5">
                -
              </td>

              <td className="p-5">
                -
              </td>

              <td className="p-5">
                -
              </td>

              <td className="p-5">
                -
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}