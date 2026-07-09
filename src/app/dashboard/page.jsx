export const metadata = {
  title: "Dashboard | FIXORA",
};

export default function DashboardPage() {
  return (
    <div>

      <div>
        <h1
          className="
            text-4xl
            font-black
          "
        >
          Panel de Administración
        </h1>

        <p
          className="
            mt-3
            text-lg
            text-muted
          "
        >
          Bienvenido al panel principal de FIXORA.
          Desde aquí podrás administrar productos,
          usuarios, pedidos, ventas, categorías y
          toda la plataforma.
        </p>
      </div>

      <div
        className="
          mt-10
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
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
            Productos
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
            Usuarios
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
            Ventas
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
      </div>

    </div>
  );
}