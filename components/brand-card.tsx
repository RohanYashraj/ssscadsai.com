"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import type { SubBrand, SubBrandAccent } from "@/lib/sub-brands";

const accentBarClass: Record<SubBrandAccent, string> = {
  sage: "accent-bar-sage",
  terracotta: "accent-bar-terracotta",
  gold: "accent-bar-gold",
  slate: "accent-bar-slate",
};

const accentTextClass: Record<SubBrandAccent, string> = {
  sage: "text-sage",
  terracotta: "text-terracotta",
  gold: "text-gold",
  slate: "text-slate-accent",
};

const accentBgClass: Record<SubBrandAccent, string> = {
  sage: "bg-sage-light",
  terracotta: "bg-terracotta-light",
  gold: "bg-gold-light",
  slate: "bg-slate-light",
};

interface BrandCardProps {
  brand: SubBrand;
  index: number;
  className?: string;
}

export function BrandCard({ brand, index, className }: BrandCardProps) {
  const href = brand.url ?? "#";
  const isExternal = href.startsWith("http");

  const linkProps = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <div className={cn("brand-card group", className)}>
      {/* Content side */}
      <div
        className={cn(
          "relative p-6 sm:p-8 flex flex-col justify-center",
          accentBarClass[brand.accent],
        )}
      >
        <span className="brand-card-index" aria-hidden="true">
          {indexLabel}
        </span>

        <span
          className={cn(
            "inline-block w-fit text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4",
            accentBgClass[brand.accent],
            accentTextClass[brand.accent],
          )}
        >
          {brand.category}
        </span>

        <h3 className="font-display text-xl sm:text-2xl leading-tight text-foreground mb-3">
          {brand.headline}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {brand.description}
        </p>

        <Link
          href={href}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium w-fit transition-all duration-300",
            accentTextClass[brand.accent],
            "hover:gap-3",
          )}
          {...linkProps}
        >
          Visit {brand.name}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Image side */}
      <div className="brand-card-image aspect-[4/3] sm:aspect-auto relative">
        {brand.image ? (
          <Image
            src={brand.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
      </div>
    </div>
  );
}
