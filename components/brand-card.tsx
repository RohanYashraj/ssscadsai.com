"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import type { SubBrand, SubBrandAccent } from "@/lib/sub-brands";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const accentBadgeClass: Record<SubBrandAccent, string> = {
  emerald:
    "border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  sky: "border-sky-500/50 bg-sky-500/10 text-sky-700 dark:text-sky-400",
  amber: "border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  fuchsia:
    "border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-400",
};

const accentTextClass: Record<SubBrandAccent, string> = {
  emerald: "text-emerald-600 dark:text-emerald-400",
  sky: "text-sky-600 dark:text-sky-400",
  amber: "text-amber-600 dark:text-amber-400",
  fuchsia: "text-fuchsia-600 dark:text-fuchsia-400",
};

const accentGradientClass: Record<SubBrandAccent, string> = {
  emerald: "from-emerald-900/70 via-emerald-900/20 to-transparent",
  sky: "from-sky-900/70 via-sky-900/20 to-transparent",
  amber: "from-amber-900/70 via-amber-900/20 to-transparent",
  fuchsia: "from-fuchsia-900/70 via-fuchsia-900/20 to-transparent",
};

interface BrandCardProps {
  brand: SubBrand;
  className?: string;
  /** If true, compact layout for hero overview grid */
  compact?: boolean;
}

function BrandImage({
  brand,
  compact,
  className,
}: {
  brand: SubBrand;
  compact: boolean;
  className?: string;
}) {
  const aspectClass = compact ? "aspect-[4/3]" : "aspect-[16/10]";
  if (brand.image) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden bg-muted",
          aspectClass,
          className
        )}
      >
        <Image
          src={brand.image}
          alt=""
          fill
          sizes={compact ? "(max-width: 400px) 50vw, 200px" : "(max-width: 768px) 100vw, 400px"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {!compact && (
          <div
            className={cn(
              "absolute inset-0 bg-linear-to-t",
              accentGradientClass[brand.accent]
            )}
          />
        )}
      </div>
    );
  }
  const fallbackGradient: Record<SubBrandAccent, string> = {
    emerald: "from-emerald-500/20 to-transparent",
    sky: "from-sky-500/20 to-transparent",
    amber: "from-amber-500/20 to-transparent",
    fuchsia: "from-fuchsia-500/20 to-transparent",
  };
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-muted bg-linear-to-br from-muted-foreground/10 to-muted-foreground/5",
        aspectClass,
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-30 bg-linear-to-br",
          fallbackGradient[brand.accent]
        )}
      />
    </div>
  );
}

export function BrandCard({ brand, className, compact }: BrandCardProps) {
  const href = brand.url ?? "#";
  const isExternal = href.startsWith("http");

  if (compact) {
    return (
      <div
        className={cn(
          "group group/card relative overflow-hidden rounded-2xl border bg-card/90 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5",
          className
        )}
      >
        <BrandImage brand={brand} compact />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-wider",
              accentTextClass[brand.accent]
            )}
          >
            {brand.name}
          </p>
          <p className="text-sm font-medium text-white/95 mt-0.5 line-clamp-2">
            {brand.tagline}
          </p>
        </div>
      </div>
    );
  }

  const linkProps = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border-border/80 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <BrandImage brand={brand} compact={false} />
      </div>
      <CardHeader className="space-y-2 pb-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className={cn(
              "text-xs font-semibold uppercase tracking-wider",
              accentBadgeClass[brand.accent]
            )}
          >
            {brand.category}
          </Badge>
        </div>
        <h3 className="text-lg font-semibold leading-tight font-display">
          {brand.headline}
        </h3>
      </CardHeader>
      <CardContent className="flex-1 space-y-2 pt-0">
        <p className="text-sm text-muted-foreground">{brand.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full px-4 font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
          )}
          {...linkProps}
        >
          Visit {brand.name}
        </Link>
      </CardFooter>
    </Card>
  );
}
