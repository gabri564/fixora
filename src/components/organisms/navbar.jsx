"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

import Logo from "@/components/atoms/logo";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Soluciones", href: "/soluciones" },
  { name: "Creative", href: "/creative" },
  { name: "Software", href: "/software" },
  { name: "Hardware", href: "/hardware" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Empresa", href: "/empresa" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  // Luego vendrá desde JWT
  const [isLogged] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [menuOpen]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setHideNavbar(
        document.body.classList.contains(
          "creative-modal-open"
        )
      );
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (
    pathname === "/creative" &&
    hideNavbar
  ) {
    return null;
  }

  return (
    <>
      {/* ========================= */}
      {/* DESKTOP */}
      {/* ========================= */}

      <header
        id="main-navbar"
        className="
          fixed
          top-4
          left-1/2
          z-50
          hidden
          w-[94%]
          max-w-7xl
          -translate-x-1/2
          lg:block
        "
      >
        <nav
          className="
            flex
            items-center
            justify-between
            rounded-[1.6rem]
            border
            border-white/10
            bg-white/70
            px-4
            py-2
            shadow-[var(--shadow)]
            backdrop-blur-2xl
            dark:bg-black/40
          "
        >
          <Logo />

          <div className="flex items-center gap-7">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  text-sm
                  font-medium
                  text-foreground/85
                  transition-all
                  duration-300
                  hover:text-primary
                "
              >
                {link.name}
              </Link>
            ))}

          </div>

          <div className="flex items-center gap-3">

            {!isLogged ? (
              <>

                <Link
                  href="/iniciar-sesion"
                  className="
                    rounded-xl
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    transition
                    hover:text-primary
                  "
                >
                  Iniciar sesión
                </Link>

                <Link
                  href="/registrarse"
                  className="
                    rounded-xl
                    bg-primary
                    px-5
                    py-2
                    text-sm
                    font-bold
                    text-black
                    transition
                    hover:scale-105
                  "
                >
                  Registrarse
                </Link>

              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="font-semibold hover:text-primary"
                >
                  Dashboard
                </Link>

                <button
                  className="font-semibold hover:text-primary"
                >
                  Cerrar sesión
                </button>
              </>
            )}

          </div>

        </nav>
      </header>
      {/* ========================= */}
      {/* MOBILE */}
      {/* ========================= */}

      <header
        className="
          fixed
          top-4
          left-1/2
          z-50
          w-[92%]
          -translate-x-1/2
          lg:hidden
        "
      >
        <div ref={menuRef}>

          {/* Barra superior */}

          <nav
            className="
              flex
              items-center
              justify-between
              rounded-[1.4rem]
              border
              border-white/10
              bg-white/70
              px-4
              py-2
              shadow-[var(--shadow)]
              backdrop-blur-2xl
              dark:bg-black/40
            "
          >
            <Logo />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                transition
                hover:bg-white/10
              "
            >
              {menuOpen ? (
                <HiOutlineXMark size={24} />
              ) : (
                <HiOutlineBars3 size={24} />
              )}
            </button>

          </nav>

          {menuOpen && (

            <div
              className="
                absolute
                right-0
                mt-3
                w-[82vw]
                max-w-[340px]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/90
                shadow-[var(--shadow)]
                backdrop-blur-2xl
                dark:bg-black/60
              "
            >

              {/* CONTENIDO CON SCROLL */}

              <div
                className="
                  max-h-[70vh]
                  overflow-y-auto
                  px-3
                  pt-3
                "
              >

                <div className="flex flex-col gap-1">

                  {navLinks.map((link) => (

                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="
                        rounded-2xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        hover:bg-primary
                        hover:text-black
                      "
                    >
                      {link.name}
                    </Link>

                  ))}

                </div>

              </div>

              {/* FOOTER FIJO */}

              <div
                className="
                  border-t
                  border-white/10
                  p-3
                  bg-white/70
                  dark:bg-black/40
                "
              >

                {!isLogged ? (

                  <div className="flex flex-col gap-3">

<Link
  href="/iniciar-sesion"
  onClick={() => setMenuOpen(false)}
  className="
    rounded-2xl
    border
    border-border
    px-4
    py-3
    text-center
    font-semibold
    transition-all
    duration-200
    hover:bg-primary/15
    hover:border-primary
    active:scale-95
    active:bg-primary
    active:text-black
  "
>
  Iniciar sesión
</Link>

                    <Link
                      href="/registrarse"
                      onClick={() => setMenuOpen(false)}
                      className="
                        rounded-2xl
                        bg-primary
                        py-3
                        text-center
                        font-bold
                        text-black
                        transition
                        hover:scale-[1.02]
                      "
                    >
                      Registrarse
                    </Link>

                  </div>

                ) : (

                  <div className="flex flex-col gap-3">

                    <Link
                      href="/dashboard"
                      className="
                        rounded-2xl
                        border
                        border-border
                        py-3
                        text-center
                      "
                    >
                      Dashboard
                    </Link>

                    <button
                      className="
                        rounded-2xl
                        bg-red-500
                        py-3
                        font-bold
                        text-white
                      "
                    >
                      Cerrar sesión
                    </button>

                  </div>

                )}

              </div>

            </div>

          )}

        </div>

      </header>

      
    </>
  );
}