"use client";

import Link from "next/link";

export default function RecoverPasswordPage() {
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
          max-w-md
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
            Recuperar Contraseña
          </h1>

          <p
            className="
              mt-4
              text-muted
            "
          >
            Ingresa tu correo electrónico y te enviaremos un
            enlace para restablecer tu contraseña.
          </p>

        </div>

        <form className="mt-10 space-y-6">

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
            Enviar enlace
          </button>

        </form>

        <div className="mt-8 text-center">

          <Link
            href="/iniciar-sesion"
            className="
              font-bold
              text-primary
              hover:underline
            "
          >
            Volver al inicio de sesión
          </Link>

        </div>

      </div>
    </main>
  );
}