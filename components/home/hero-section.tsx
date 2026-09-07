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
      className={cn("bg-cover bg-center bg-no-repeat", className)}
      style={{
        aspectRatio: `${HERO_IMAGE.width} / ${HERO_IMAGE.height}`,
        maxWidth: `min(${HERO_IMAGE.width}px, 60vh)`,
        backgroundImage: `url(${HERO_IMAGE.src})`,
      }}
    >
      <div className="flex h-full flex-col items-center justify-center">
        {children}
      </div>
    </MaxWidthWrapper>
  );
}
