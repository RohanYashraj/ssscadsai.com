import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ as: Tag = "section", className, children, ...props }, ref) => (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("mx-auto max-w-6xl px-6", className)}
      {...props}
    >
      {children}
    </Tag>
  )
);
Section.displayName = "Section";

export { Section };
