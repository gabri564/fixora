import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="
        flex
        items-center
        gap-4
        transition-all
        duration-300
        hover:opacity-90
      "
    >
      {/* LOGO CONTAINER */}

      <div
        className="
          relative
          flex
          h-[60px]
          w-[60px]
          items-center
          justify-center
          overflow-hidden
          rounded-[1.3rem]
          border
          border-white/10
          bg-white
          shadow-[0_8px_28px_rgba(0,0,0,0.10)]
          dark:border-white/5
          dark:bg-white
        "
      >
        <Image
          src="/LOGO.webp"
          alt="FIXORA Logo"
          fill
          priority
          sizes="60px"
          className="
            object-cover
          "
        />
      </div>

      {/* BRAND */}

      <div className="flex flex-col leading-none">
        <h1
          className="
            text-[1.28rem]
            font-black
            tracking-[0.22em]
            text-foreground
          "
        >
          FIX
          <span className="text-primary">
            ORA
          </span>
        </h1>

        <span
          className="
            mt-1.5
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.30em]
            text-muted
          "
        >
          SMART TECHNOLOGY
        </span>
      </div>
    </Link>
  );
}