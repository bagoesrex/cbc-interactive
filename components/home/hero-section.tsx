import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { HERO_IMAGE } from "@/config/site";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
}

export function HeroSection({ children, className }: HeroSectionProps) {
  return (
    <MaxWidthWrapper
      className={cn(
        "@container relative overflow-hidden bg-cover bg-center bg-no-repeat",
        className,
      )}
      style={{
        aspectRatio: `${HERO_IMAGE.width} / ${HERO_IMAGE.height}`,
        // Ikat ke tinggi viewport, bukan ke 934px.
        // min(934px, 60vh) bikin saat zoom-out viewport CSS membesar
        // tapi width ke-cap 934px -> height cuma 1685px -> ada gap.
        width: `min(100vw, calc(100dvh * ${HERO_IMAGE.width} / ${HERO_IMAGE.height}))`,
        maxWidth: "100vw",
        backgroundImage: `url(${HERO_IMAGE.src})`,
      }}
    >
      {children}
    </MaxWidthWrapper>
  );
}
