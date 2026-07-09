"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      if (data.user?.role === "admin") {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      alert("Error al iniciar sesión.");
    } finally {
      setLoading(false);
    }
  };

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
            Iniciar Sesión
          </h1>

          <p
            className="
              mt-4
              text-muted
            "
          >
            Ingresa para descargar recursos,
            comprar diseños y administrar tu cuenta.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <div>
            <label className="font-medium">
              Correo electrónico
            </label>

            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
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
              Contraseña
            </label>

            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
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

          <button
            type="submit"
            disabled={loading}
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
            {loading
              ? "Ingresando..."
              : "Iniciar Sesión"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/recuperar-password"
            className="
              text-sm
              text-primary
              hover:underline
            "
          >
            ¿Olvidaste tu contraseña?
          </Link>

          <p className="mt-6 text-muted">
            ¿No tienes una cuenta?
          </p>

          <Link
            href="/registrarse"
            className="
              mt-2
              inline-block
              font-bold
              text-primary
              hover:underline
            "
          >
            Crear una cuenta
          </Link>
        </div>
      </div>
    </main>
  );
}