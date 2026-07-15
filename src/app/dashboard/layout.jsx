import Link from "next/link";

export const metadata = {
  title: "Dashboard | FIXORA",
};

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Productos",
    href: "/dashboard/productos",
  },
  {
    name: "Categorías",
    href: "/dashboard/categorias",
  },
  {
    name: "Pedidos",
    href: "/dashboard/pedidos",
  },
  {
    name: "Usuarios",
    href: "/dashboard/usuarios",
  },
  {
    name: "Ventas",
    href: "/dashboard/ventas",
  },
  {
    name: "Configuración",
    href: "/dashboard/configuracion",
  },
];

export default function DashboardLayout({
  children,
}) {
  return (
    <main
      className="
        min-h-screen
        bg-background
      "
    >
      <div
        className="
          grid
          min-h-screen
          lg:grid-cols-[270px_1fr]
        "
      >
        {/* SIDEBAR */}

        <aside
          className="
            border-r
            border-border
            bg-card
            p-8
          "
        >
          <h1
            className="
              text-3xl
              font-black
            "
          >
            FIX
            <span className="text-primary">
              ORA
            </span>
          </h1>

          <p
            className="
              mt-2
              text-sm
              text-muted
            "
          >
            Panel Administrativo
          </p>

          <nav
            className="
              mt-10
              flex
              flex-col
              gap-3
            "
          >
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  rounded-2xl
                  px-5
                  py-4
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-primary
                  hover:text-black
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* CONTENIDO */}

        <section
          className="
            p-8
            lg:p-10
          "
        >
          {children}
        </section>
      </div>
    </main>
  );
}