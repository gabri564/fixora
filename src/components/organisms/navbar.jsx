"use client";

import Link from "next/link";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";

import Logo from "@/components/atoms/logo";

const navLinks = [
  { name: "Inicio", href: "/" },

  {
    name: "Soluciones",
    href: "/soluciones",
  },

  {
    name: "Creative",
    href: "/creative",
  },

  {
    name: "Software",
    href: "/software",
  },

  {
    name: "Hardware",
    href: "/hardware",
  },

  {
    name: "Proyectos",
    href: "/proyectos",
  },

  {
    name: "Empresa",
    href: "/empresa",
  },

  {
    name: "Contacto",
    href: "/contacto",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const menuRef = useRef(null);

  /* CLOSE MENU WHEN CLICK OUTSIDE */

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
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

  return (
    <>
      {/* DESKTOP NAVBAR */}

      <header
        className="
          fixed
          top-5
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
            rounded-[2rem]
            border
            border-white/10
            bg-white/70
            px-8
            py-4
            shadow-[var(--shadow)]
            backdrop-blur-2xl
            dark:bg-black/40
          "
        >
          {/* LOGO */}

          <Logo />

          {/* NAV LINKS */}

          <div
            className="
              flex
              items-center
              gap-7
            "
          >
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
        </nav>
      </header>

      {/* MOBILE NAVBAR */}

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
          <nav
            className="
              flex
              items-center
              justify-between
              rounded-[1.8rem]
              border
              border-white/10
              bg-white/70
              px-5
              py-4
              shadow-[var(--shadow)]
              backdrop-blur-2xl
              dark:bg-black/40
            "
          >
            {/* LOGO */}

            <Logo />

            {/* MENU BUTTON */}

            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="
                flex
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/20
                p-3
                text-foreground
                backdrop-blur-xl
                transition-all
                duration-300
                dark:bg-black/20
                hover:border-primary
                hover:text-primary
              "
            >
              {menuOpen ? (
                <HiOutlineXMark
                  size={24}
                />
              ) : (
                <HiOutlineBars3
                  size={24}
                />
              )}
            </button>
          </nav>

          {/* MOBILE FLOATING MENU */}

          {menuOpen && (
            <div
              className="
                absolute
                right-0
                mt-3
                w-[70%]
                rounded-[1.8rem]
                border
                border-white/10
                bg-white/80
                p-3
                shadow-[var(--shadow)]
                backdrop-blur-2xl
                dark:bg-black/50
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-2
                "
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                      rounded-2xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-foreground
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
          )}
        </div>
      </header>
    </>
  );
}