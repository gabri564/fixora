"use client";

import { useEffect, useRef, useState } from "react";

import {
  HiOutlineEllipsisHorizontal,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineLanguage,
  HiOutlineCog6Tooth,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

export default function FloatingMenu() {
  const menuRef = useRef(null);

  const [open, setOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    false
  );

  /* LOAD THEME */

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    const isDark =
      savedTheme === "dark";

    document.documentElement.classList.toggle(
      "dark",
      isDark
    );

    requestAnimationFrame(() => {
      setDarkMode(isDark);
    });
  }, []);

  /* CLOSE OUTSIDE */

  useEffect(() => {
    const handleClickOutside = (
      event
    ) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* TOGGLE THEME */

  const toggleTheme = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);

    document.documentElement.classList.toggle(
      "dark",
      newDarkMode
    );

    localStorage.setItem(
      "theme",
      newDarkMode
        ? "dark"
        : "light"
    );
  };

  return (
    <div
      ref={menuRef}
      className="
        fixed
        bottom-6
        right-6
        z-[100]
        flex
        flex-col
        items-end
        gap-4
      "
    >
      {/* FLOAT MENU */}

      {open && (
        <div
          className="
            flex
            w-[220px]
            flex-col
            gap-2
            rounded-[2rem]
            border
            border-white/10
            bg-white/75
            p-3
            shadow-[var(--shadow)]
            backdrop-blur-2xl
            dark:bg-black/45
          "
        >
          {/* CHAT */}

          <button
            className="
              flex
              items-center
              gap-3
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
            <HiOutlineChatBubbleLeftRight
              size={20}
            />

            Asistente
          </button>

          {/* THEME */}

          <button
            onClick={toggleTheme}
            className="
              flex
              items-center
              gap-3
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
            {darkMode ? (
              <HiOutlineSun size={20} />
            ) : (
              <HiOutlineMoon size={20} />
            )}

            {darkMode
              ? "Modo Claro"
              : "Modo Oscuro"}
          </button>

          {/* LANGUAGE */}

          <button
            className="
              flex
              items-center
              gap-3
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
            <HiOutlineLanguage size={20} />

            Idioma
          </button>

          {/* SETTINGS */}

          <button
            className="
              flex
              items-center
              gap-3
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
            <HiOutlineCog6Tooth size={20} />

            Ajustes
          </button>
        </div>
      )}

      {/* FLOAT BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/75
          text-foreground
          shadow-[var(--shadow)]
          backdrop-blur-2xl
          transition-all
          duration-300
          dark:bg-black/45
          hover:scale-105
          hover:border-primary
          hover:text-primary
        "
      >
        <HiOutlineEllipsisHorizontal
          size={26}
        />
      </button>
    </div>
  );
}