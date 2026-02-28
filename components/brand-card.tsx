import Link from "next/link";

import { cn } from "@/lib/utils";
import type { SubBrand, SubBrandAccent } from "@/lib/sub-brands";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const accentBadgeClass: Record<SubBrandAccent, string> = {
  emerald: "border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  sky: "border-sky-500/50 bg-sky-500/10 text-sky-600 dark:text-sky-400",
  amber: "border-amber-500/50 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  fuchsia: "border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400",
};

const accentTextClass: Record<SubBrandAccent, string> = {
  emerald: "text-emerald-500",
  sky: "text-sky-500",
  amber: "text-amber-500",
  fuchsia: "text-fuchsia-500",
};

interface BrandCardProps {
  brand: SubBrand;
  className?: string;
  /** If true, compact layout for hero overview grid */
  compact?: boolean;
}

export function BrandCard({ brand, className, compact }: BrandCardProps) {
  const href = brand.url ?? "#";
  const isExternal = href.startsWith("http");

  if (compact) {
    return (
      <div
        className={cn(
          "space-y-1 rounded-2xl border bg-background/80 p-4 transition-colors hover:border-border hover:bg-card/80",
          className
        )}
      >
        <p
          className={cn(
            "text-xs font-medium",
            accentTextClass[brand.accent]
          )}
        >
          {brand.name}
        </p>
        <p className="text-sm font-medium text-foreground/90">
          {brand.tagline}
        </p>
      </div>
    );
  }

  const linkProps = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Card
      className={cn(
        "flex flex-col transition-all duration-200 hover:shadow-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        className
      )}
    >
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
        <h3 className="text-lg font-semibold leading-tight">
          {brand.headline}
        </h3>
      </CardHeader>
      <CardContent className="flex-1 space-y-2 pt-0">
        <p className="text-sm text-muted-foreground">{brand.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link
          href={href}
          className={buttonVariants({ variant: "outline", size: "sm" })}
          {...linkProps}
        >
          Visit {brand.name}
        </Link>
      </CardFooter>
    </Card>
  );
}
