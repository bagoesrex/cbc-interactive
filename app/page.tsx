import { HERO_IMAGE } from "@/config/site";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-dvh">
      {/* Stage = background + area main. @container membuat 1cqw / var(--stroke)
          pada anak-anaknya resolve ke lebar background ini. */}
      <div
        className="@container relative m-auto overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          aspectRatio: `${HERO_IMAGE.width} / ${HERO_IMAGE.height}`,
          // Ikat ke tinggi viewport, bukan ke 934px, agar tetap
          // full-height walau zoom-out (viewport CSS membesar).
          width: `min(100vw, calc(100dvh * ${HERO_IMAGE.width} / ${HERO_IMAGE.height}))`,
          maxWidth: "100vw",
          backgroundImage: `url(${HERO_IMAGE.src})`,
        }}
      >
        <div className="animate-scale-pulse absolute top-[28%] left-[8%] aspect-407/624 w-[38%]">
          <Image
            src="/character.png"
            alt="Character"
            fill
            priority
            draggable={false}
            className="sticker-outline cursor-pointer object-contain"
          />
        </div>
        <div className="animate-scale-pulse absolute top-[50%] left-[50%] aspect-475/470 w-[30%]">
          <Image
            src="/gift.png"
            alt="Gift"
            fill
            priority
            draggable={false}
            className="sticker-outline cursor-pointer object-contain"
          />
        </div>
        <div className="animate-scale-pulse absolute top-[36%] right-[5%] aspect-451/384 w-[15%] -scale-x-100 rotate-5">
          <Image
            src="/gallery.png"
            alt="Gallery"
            fill
            priority
            draggable={false}
            className="sticker-outline cursor-pointer object-contain"
          />
        </div>
        <div className="animate-scale-pulse absolute top-[23%] left-[47%] aspect-423/405 w-[12%]">
          <Image
            src="/letter.png"
            alt="Letter"
            fill
            priority
            draggable={false}
            className="sticker-outline cursor-pointer object-contain"
          />
        </div>
      </div>
    </main>
  );
}
