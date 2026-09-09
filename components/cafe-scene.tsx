"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { HERO_IMAGE } from "@/config/site";
import { Dialog } from "./dialog";

interface Hotspot {
  id: string;
  label: string;
  src: string;
  hotspotClassName: string;
  dialogTitle: string;
  dialogBody: ReactNode;
}

// Cukup tambah/edit entri di sini untuk mengubah tombol + isi dialognya.
const HOTSPOTS: Hotspot[] = [
  {
    id: "character",
    label: "Buka pesan ulang tahun",
    src: "/character.png",
    hotspotClassName: "top-[28cqh] left-[8cqw] aspect-407/624 w-[38cqw]",
    dialogTitle: "Selamat Ulang Tahun!",
    dialogBody: (
      <>
        <p>Di kafe kecil yang manis ini, semua merayakan harimu.</p>
        <p className="mt-2">
          Semoga semua hal baik datang menghampirimu — seperti tulisan di
          jendela itu: <em>Good Things Ahead</em>. ♡
        </p>
      </>
    ),
  },
  {
    id: "gift",
    label: "Buka kado spesial",
    src: "/gift.png",
    hotspotClassName: "top-[50cqh] left-[50cqw] aspect-475/470 w-[30cqw]",
    dialogTitle: "Kado Spesial",
    dialogBody: (
      <>
        <p>Klik bukan sekadar kado — ini doa yang dibungkus pita.</p>
        <p className="mt-2">
          Semoga tahun ini manisnya melebihi semua kue di etalase kafe ini!
        </p>
      </>
    ),
  },
  {
    id: "gallery",
    label: "Buka galeri kenangan",
    src: "/gallery.png",
    hotspotClassName:
      "top-[36cqh] right-[5cqw] aspect-451/384 w-[15cqw] -scale-x-100 rotate-5",
    dialogTitle: "Galeri Kenangan",
    dialogBody: (
      <>
        <p>Potongan momen manis untuk disimpan baik-baik:</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            { src: "/memories.png", alt: "Kenangan manis" },
            { src: "/character.png", alt: "Perayaan ulang tahun" },
            { src: "/gift.png", alt: "Kado ulang tahun" },
            { src: "/letter.png", alt: "Surat spesial" },
          ].map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 400px) 40vw, 180px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "letter",
    label: "Buka surat untukmu",
    src: "/letter.png",
    hotspotClassName: "top-[23cqh] left-[47cqw] aspect-423/405 w-[12cqw]",
    dialogTitle: "Surat Untukmu",
    dialogBody: (
      <>
        <p className="italic">
          &ldquo;You are special&rdquo; — begitu kata kartu di meja itu, dan itu
          benar adanya.
        </p>
        <p className="mt-2">
          Terima kasih sudah menjadi alasan kafe ini terasa hangat hari ini. ♡
        </p>
      </>
    ),
  },
];

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
