import Link from "next/link";
import { FiArrowRight, FiBox } from "react-icons/fi";

export default function HardwareProductCard({
  image,
  title,
  category,
  description,
  status = "Consultar stock",
  priceLabel = "Consultar precio",
  specs = [],
  href = "/contacto",
  buttonLabel = "Cotizar producto",
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow)] transition duration-300 hover:-translate-y-2 hover:border-primary">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 via-card to-background">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center text-muted">
              <FiBox className="text-6xl text-primary" />
              <span className="mt-4 text-sm font-bold uppercase tracking-wider">
                Imagen referencial
              </span>
            </div>
          </div>
        )}

        <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
          {category}
        </span>

        <span className="absolute right-5 top-5 rounded-full bg-background/90 px-4 py-2 text-xs font-bold text-foreground backdrop-blur">
          {status}
        </span>
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-black text-foreground">
            {title}
          </h3>

          <span className="shrink-0 rounded-full bg-primary/10 px-4 py-2 text-sm font-black text-primary">
            {priceLabel}
          </span>
        </div>

        <p className="mt-4 leading-7 text-muted">
          {description}
        </p>

        {specs.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {specs.map((spec) => (
              <li
                key={spec}
                className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted"
              >
                {spec}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={href}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white transition hover:bg-primary-hover"
        >
          {buttonLabel}
          <FiArrowRight />
        </Link>
      </div>
    </article>
  );
}