"use client";

import { useState } from "react";
import Image from "next/image";

const PHOTOS: Array<{
  caption: string;
  rotate: string;
  position: string;
}> = [
  {
    caption: "Hari itu, ketawamu paling keras ♡",
    rotate: "-rotate-3",
    position: "object-left",
  },
  {
    caption: "Sore yang tidak mau pulang",
    rotate: "rotate-2",
    position: "object-center",
  },
  {
    caption: "Megumin + kafe = rumah kedua",
    rotate: "-rotate-2",
    position: "object-right",
  },
];

export function GalleryBody() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? PHOTOS[selected] : null;

  return (
    <div className="relative px-[4cqw] py-[4cqw]">
      <div className="text-center">
        <p className="font-dancing text-[4.6cqw] leading-tight font-bold text-stone-900">
          Tiga potong rindu
        </p>
      </div>
      <p className="font-architects-daughter mx-auto mt-[1.4cqw] max-w-[62cqw] text-center text-[3.1cqw] text-stone-500">
        Ketuk foto untuk melihat lebih dekat, Megumin.
      </p>

      <div className="mt-[2.4cqw] grid grid-cols-2 gap-[3cqw]">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo.caption}
            type="button"
            onClick={() => setSelected(i)}
            aria-label={`Perbesar foto: ${photo.caption}`}
            className="cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
          >
            <figure
              className={`bg-white p-[2cqw] pb-[3cqw] shadow-md shadow-stone-400/40 transition-transform duration-300 ease-out hover:scale-[1.03] hover:rotate-0 ${photo.rotate}`}
            >
              <span className="relative block aspect-square overflow-hidden bg-stone-100">
                <Image
                  src="/placeholder.svg"
                  alt={photo.caption}
                  fill
                  draggable={false}
                  sizes="40vw"
                  className={`object-cover select-none ${photo.position}`}
                />
              </span>
              <figcaption className="font-architects-daughter mt-[1.8cqw] text-center text-[2.9cqw] leading-tight text-stone-700">
                {photo.caption}
              </figcaption>
            </figure>
          </button>
        ))}

        <figure className="flex rotate-2 flex-col items-center justify-center border-[0.35cqw] border-dashed border-stone-900 bg-[#fffdf7] p-[3cqw] text-center">
          <p className="text-[6cqw]">📸</p>
          <p className="font-dancing mt-[1cqw] text-[3.8cqw] font-bold text-stone-900">
            Slot ke-4: besok
          </p>
          <p className="font-architects-daughter mt-[0.8cqw] text-[3cqw] text-stone-600">
            Masih kosong, nunggu foto baru bareng kamu.
          </p>
        </figure>
      </div>

      {/* Lightbox: selalu di-mount agar transisi buka/tutup mulus */}
      <div
        aria-hidden={active === null}
        className={`absolute inset-0 z-20 flex items-center justify-center bg-stone-900/60 p-[5cqw] transition-opacity duration-300 ease-out ${
          active !== null ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Tutup foto"
          onClick={() => setSelected(null)}
          tabIndex={active !== null ? 0 : -1}
          className="absolute inset-0 cursor-pointer"
        />
        <figure
          className={`relative w-[72cqw] bg-white p-[2.5cqw] pb-[3.5cqw] shadow-xl transition-all duration-300 ease-out ${
            active !== null
              ? "scale-100 rotate-0 opacity-100"
              : "scale-90 rotate-2 opacity-0"
          }`}
        >
          {active !== null && (
            <>
              <span className="relative block aspect-square overflow-hidden bg-stone-100">
                <Image
                  src="/placeholder.svg"
                  alt={active.caption}
                  fill
                  draggable={false}
                  sizes="72vw"
                  className={`object-cover select-none ${active.position}`}
                />
              </span>
              <figcaption className="font-architects-daughter mt-[2cqw] text-center text-[3.1cqw] text-stone-700">
                {active.caption}
              </figcaption>
              <span className="mt-[1.6cqw] block text-center text-[2.7cqw] font-semibold tracking-widest text-stone-400 uppercase">
                Ketuk di luar untuk menutup
              </span>
            </>
          )}
        </figure>
      </div>
    </div>
  );
}
