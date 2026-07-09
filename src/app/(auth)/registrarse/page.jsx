"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        px-6
        py-24
      "
    >
      <div
        className="
          w-full
          max-w-xl
          rounded-[2rem]
          border
          border-border
          bg-card
          p-8
          shadow-[var(--shadow)]
        "
      >
        <div className="text-center">
          <h1
            className="
              text-4xl
              font-black
            "
          >
            Crear Cuenta
          </h1>

          <p
            className="
              mt-4
              text-muted
            "
          >
            Regístrate para descargar recursos gratuitos,
            comprar productos y administrar tus pedidos.
          </p>
        </div>

        <form className="mt-10 space-y-5">

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="font-medium">
                Nombres
              </label>

              <input
                type="text"
                placeholder="Juan"
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
                  transition-all
                  focus:border-primary
                "
              />
            </div>

            <div>
              <label className="font-medium">
                Apellidos
              </label>

              <input
                type="text"
                placeholder="Pérez"
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
                  transition-all
                  focus:border-primary
                "
              />
            </div>

          </div>

          <div>
            <label className="font-medium">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
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
                transition-all
                focus:border-primary
              "
            />
          </div>

          <div>
            <label className="font-medium">
              Número de teléfono
            </label>

            <input
              type="tel"
              placeholder="987654321"
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
                transition-all
                focus:border-primary
              "
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="font-medium">
                Contraseña
              </label>

              <input
                type="password"
                placeholder="********"
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
                  transition-all
                  focus:border-primary
                "
              />
            </div>

            <div>
              <label className="font-medium">
                Confirmar contraseña
              </label>

              <input
                type="password"
                placeholder="********"
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
                  transition-all
                  focus:border-primary
                "
              />
            </div>

          </div>

          <button
            type="submit"
            className="
              w-full
              rounded-2xl
              bg-primary
              py-4
              font-bold
              text-black
              transition-all
              duration-300
              hover:scale-[1.02]
            "
          >
            Crear Cuenta
          </button>

        </form>

        <div className="mt-8 text-center">

          <p className="text-muted">
            ¿Ya tienes una cuenta?
          </p>

          <Link
            href="/iniciar-sesion"
            className="
              mt-2
              inline-block
              font-bold
              text-primary
              hover:underline
            "
          >
            Iniciar sesión
          </Link>

        </div>

      </div>
    </main>
  );
}