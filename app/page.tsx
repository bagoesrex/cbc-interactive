import { HeroSection } from "@/components/home/hero-section";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-dvh">
      <HeroSection>
        <div className="animate-scale-pulse absolute top-[28%] left-[8%] aspect-407/624 w-[38%]">
          <Image
            src="/character.png"
            alt="Character"
            fill
            priority
            draggable={false}
            className="cursor-pointer object-contain filter-[drop-shadow(var(--stroke)_0_0_white)_drop-shadow(calc(var(--stroke)*-1)_0_0_white)_drop-shadow(0_var(--stroke)_0_white)_drop-shadow(0_calc(var(--stroke)*-1)_0_white)]"
          />
        </div>
        <div className="animate-scale-pulse absolute top-[50%] left-[50%] aspect-475/470 w-[30%]">
          <Image
            src="/gift.png"
            alt="Gift"
            fill
            priority
            draggable={false}
            className="cursor-pointer object-contain filter-[drop-shadow(var(--stroke)_0_0_white)_drop-shadow(calc(var(--stroke)*-1)_0_0_white)_drop-shadow(0_var(--stroke)_0_white)_drop-shadow(0_calc(var(--stroke)*-1)_0_white)]"
          />
        </div>
        <div className="animate-scale-pulse absolute top-[36%] right-[5%] aspect-451/384 w-[15%] -scale-x-100 rotate-5">
          <Image
            src="/gallery.png"
            alt="Gallery"
            fill
            priority
            draggable={false}
            className="cursor-pointer object-contain filter-[drop-shadow(var(--stroke)_0_0_white)_drop-shadow(calc(var(--stroke)*-1)_0_0_white)_drop-shadow(0_var(--stroke)_0_white)_drop-shadow(0_calc(var(--stroke)*-1)_0_white)]"
          />
        </div>
        <div className="animate-scale-pulse absolute top-[23%] left-[47%] aspect-423/405 w-[12%]">
          <Image
            src="/letter.png"
            alt="Letter"
            fill
            priority
            draggable={false}
            className="cursor-pointer object-contain filter-[drop-shadow(var(--stroke)_0_0_white)_drop-shadow(calc(var(--stroke)*-1)_0_0_white)_drop-shadow(0_var(--stroke)_0_white)_drop-shadow(0_calc(var(--stroke)*-1)_0_white)]"
          />
        </div>
      </HeroSection>
    </main>
  );
}
