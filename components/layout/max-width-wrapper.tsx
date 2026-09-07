import { LAYOUT } from "@/config/layout";
import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function MaxWidthWrapper({
  children,
  className,
  style,
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn("m-auto w-full", LAYOUT.container, className)}
      style={style}
    >
      {children}
    </div>
  );
}
