import { HeroSection } from "@/components/home/hero-section";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-dvh">
      <HeroSection>
        <div className="absolute top-[28%] left-[8%] aspect-407/624 w-[38%] overflow-hidden">
          <Image
            src="/character.png"
            alt="Character"
            fill
            priority
            draggable={false}
            className="cursor-pointer object-contain"
          />
        </div>
        <div className="absolute top-[50%] left-[50%] aspect-475/470 w-[30%] overflow-hidden">
          <Image
            src="/gift.png"
            alt="Gift"
            fill
            priority
            draggable={false}
            className="cursor-pointer object-contain"
          />
        </div>
        <div className="absolute top-[36%] right-[5%] aspect-451/384 w-[15%] -scale-x-100 rotate-5 overflow-hidden">
          <Image
            src="/gallery.png"
            alt="Gallery"
            fill
            priority
            draggable={false}
            className="cursor-pointer object-contain"
          />
        </div>
        <div className="absolute top-[23%] left-[47%] aspect-423/405 w-[12%] overflow-hidden">
          <Image
            src="/letter.png"
            alt="Letter"
            fill
            priority
            draggable={false}
            className="cursor-pointer object-contain"
          />
        </div>
      </HeroSection>
    </main>
  );
}
