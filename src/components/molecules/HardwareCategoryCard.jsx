"use client";

import {
  FiArrowRight,
  FiBox,
  FiCamera,
  FiCpu,
  FiGrid,
  FiHardDrive,
  FiHeadphones,
  FiMonitor,
  FiMousePointer,
  FiServer,
  FiWifi,
  FiZap,
} from "react-icons/fi";

const icons = {
  monitor: FiMonitor,
  server: FiServer,
  mouse: FiMousePointer,
  cpu: FiCpu,
  hardDrive: FiHardDrive,
  zap: FiZap,
  grid: FiGrid,
  wifi: FiWifi,
  camera: FiCamera,
  headphones: FiHeadphones,
  box: FiBox,
};

export default function HardwareCategoryCard({
  iconName = "cpu",
  title,
  description,
  targetId = "catalogo-hardware",
  buttonLabel = "Ver productos",
}) {
  const Icon = icons[iconName] || FiCpu;

  const handleScroll = () => {
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow)] transition duration-300 hover:-translate-y-2 hover:border-primary">
      <div>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="text-3xl" />
        </div>

        <h3 className="mt-8 text-2xl font-black text-foreground">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-muted">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={handleScroll}
        className="mt-8 inline-flex items-center gap-2 text-left font-bold text-primary transition hover:text-primary-hover"
      >
        {buttonLabel}
        <FiArrowRight className="transition group-hover:translate-x-1" />
      </button>
    </article>
  );
}