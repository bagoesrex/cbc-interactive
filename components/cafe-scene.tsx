"use client";

import { useState } from "react";
import Image from "next/image";
import { HERO_IMAGE } from "@/config/site";
import { HOTSPOTS } from "@/config/data";
import { Dialog } from "./dialog";

export function CafeScene() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = HOTSPOTS.find((item) => item.id === activeId) ?? null;

  return (
    <div
      // [container-type:size] (bukan inline-size) agar cqw DAN cqh
      // sama-sama resolve ke stage ini. Aman karena ukuran stage
      // sudah definitif (width eksplisit + aspect-ratio), tidak dari konten.
      className="@container-size relative m-auto overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        aspectRatio: `${HERO_IMAGE.width} / ${HERO_IMAGE.height}`,
        // Ikat ke tinggi viewport, bukan ke 934px, agar tetap
        // full-height walau zoom-out (viewport CSS membesar).
        width: `min(100vw, calc(100dvh * ${HERO_IMAGE.width} / ${HERO_IMAGE.height}))`,
        maxWidth: "100vw",
        backgroundImage: `url(${HERO_IMAGE.src})`,
      }}
    >
      {HOTSPOTS.map((item) => (
        // <button> asli (bukan div onClick) agar bisa dijangkau keyboard
        // (Tab + Enter/Space). aria-label jadi nama tombol karena <img> dekoratif.
        <button
          key={item.id}
          type="button"
          aria-haspopup="dialog"
          aria-label={item.label}
          title={item.label}
          onClick={() => setActiveId(item.id)}
          className={`animate-scale-pulse absolute cursor-pointer ${item.hotspotClassName}`}
        >
          <Image
            src={item.src}
            alt=""
            fill
            priority
            draggable={false}
            className="sticker-outline object-contain"
          />
        </button>
      ))}

      <Dialog
        open={active !== null}
        title={active?.dialogTitle ?? ""}
        onClose={() => setActiveId(null)}
      >
        {active?.dialogBody}
      </Dialog>
    </div>
  );
}
