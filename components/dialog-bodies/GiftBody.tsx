"use client";

import { useState } from "react";
import Image from "next/image";

const CODE = "GIFTKUY-MEGUMIN-01";

const CONFETTI: Array<{
  left: string;
  delay: string;
  color: string;
  size: string;
  round: string;
}> = [
  {
    left: "6%",
    delay: "0s",
    color: "bg-pink-400",
    size: "w-[1.6cqw] h-[2.4cqw]",
    round: "rounded-[0.3cqw]",
  },
  {
    left: "14%",
    delay: "0.15s",
    color: "bg-amber-300",
    size: "w-[1.4cqw] h-[1.4cqw]",
    round: "rounded-full",
  },
  {
    left: "22%",
    delay: "0.3s",
    color: "bg-sky-300",
    size: "w-[1.6cqw] h-[2.2cqw]",
    round: "rounded-[0.3cqw]",
  },
  {
    left: "30%",
    delay: "0.05s",
    color: "bg-rose-300",
    size: "w-[1.3cqw] h-[1.3cqw]",
    round: "rounded-full",
  },
  {
    left: "38%",
    delay: "0.25s",
    color: "bg-emerald-300",
    size: "w-[1.6cqw] h-[2.4cqw]",
    round: "rounded-[0.3cqw]",
  },
  {
    left: "46%",
    delay: "0.1s",
    color: "bg-violet-300",
    size: "w-[1.4cqw] h-[1.4cqw]",
    round: "rounded-full",
  },
  {
    left: "54%",
    delay: "0.35s",
    color: "bg-pink-300",
    size: "w-[1.6cqw] h-[2.2cqw]",
    round: "rounded-[0.3cqw]",
  },
  {
    left: "62%",
    delay: "0s",
    color: "bg-amber-200",
    size: "w-[1.3cqw] h-[1.3cqw]",
    round: "rounded-full",
  },
  {
    left: "70%",
    delay: "0.2s",
    color: "bg-sky-200",
    size: "w-[1.6cqw] h-[2.4cqw]",
    round: "rounded-[0.3cqw]",
  },
  {
    left: "78%",
    delay: "0.1s",
    color: "bg-rose-200",
    size: "w-[1.4cqw] h-[1.4cqw]",
    round: "rounded-full",
  },
  {
    left: "86%",
    delay: "0.3s",
    color: "bg-emerald-200",
    size: "w-[1.6cqw] h-[2.2cqw]",
    round: "rounded-[0.3cqw]",
  },
  {
    left: "93%",
    delay: "0.15s",
    color: "bg-pink-200",
    size: "w-[1.3cqw] h-[1.3cqw]",
    round: "rounded-full",
  },
];

export function GiftBody() {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(CODE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  if (!opened) {
    return (
      <div className="relative overflow-hidden px-[4cqw] py-[5cqw] text-center">
        <div className="animate-float-slow relative mx-auto aspect-475/470 w-[46cqw]">
          <Image
            src="/gift.png"
            alt="Kado terbungkus untuk Megumin"
            fill
            draggable={false}
            className="object-contain select-none"
          />
        </div>
        <p className="font-dancing mt-[2.4cqw] text-[4.6cqw] leading-tight font-bold text-stone-900">
          Untuk Megumin
        </p>
        <p className="font-architects-daughter mx-auto mt-[1.6cqw] max-w-[64cqw] text-[3.2cqw] leading-snug text-stone-600">
          Ada sesuatu yang dibungkus rapi, diikat pita, dan cuma bisa dibuka
          sama kamu.
        </p>
        <button
          type="button"
          onClick={() => setOpened(true)}
          className="mt-[3cqw] cursor-pointer rounded-[1.2cqw] border-[0.4cqw] border-stone-900 bg-amber-300 px-[5cqw] py-[1.8cqw] text-[3.2cqw] font-bold text-stone-900 shadow-[0.6cqw_0.6cqw_0_0_#1c1917] transition hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 active:translate-x-[0.3cqw] active:translate-y-[0.3cqw] active:shadow-none"
        >
          Buka kado
        </button>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden px-[4cqw] py-[4cqw]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[30cqw]"
      >
        {CONFETTI.map((c, i) => (
          <span
            key={i}
            style={{ left: c.left, animationDelay: c.delay }}
            className={`confetti-piece absolute top-0 ${c.color} ${c.size} ${c.round}`}
          />
        ))}
      </div>

      <div className="text-center">
        <p className="font-dancing text-[4.6cqw] leading-tight font-bold text-stone-900">
          Kebuka!
        </p>
      </div>
      <div className="mt-[2.4cqw] rounded-[1.6cqw] border-[0.4cqw] border-stone-900 bg-[#fffdf7] p-[3.2cqw] text-center shadow-[0.6cqw_0.6cqw_0_0_#1c1917]">
        <p className="text-[2.7cqw] font-bold tracking-[0.2cqw] text-stone-500 uppercase">
          Voucher spesial
        </p>
        <p className="font-dancing mt-[1cqw] text-[4.6cqw] leading-tight font-bold text-stone-900">
          Satu pelukan hangat
        </p>
        <p className="font-architects-daughter mx-auto mt-[1.2cqw] max-w-[60cqw] text-[3.1cqw] text-stone-600">
          Berlaku kapan saja Megumin butuh. Bisa ditukar dengan cokelat, jalan
          sore, atau cerita sampai lupa waktu.
        </p>
        <div className="mt-[2.4cqw] flex items-center justify-center gap-[2cqw]">
          <p className="rounded-[1cqw] border-[0.35cqw] border-dashed border-stone-900 bg-white px-[3.5cqw] py-[1.4cqw] font-mono text-[3cqw] font-bold tracking-widest text-stone-900">
            {CODE}
          </p>
          <button
            type="button"
            onClick={copyCode}
            className="cursor-pointer rounded-[1cqw] border-[0.35cqw] border-stone-900 bg-white px-[3cqw] py-[1.4cqw] text-[2.9cqw] font-bold text-stone-900 transition hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 active:translate-y-[0.2cqw]"
            aria-label="Salin kode voucher"
          >
            Salin
          </button>
        </div>
        <p
          aria-live="polite"
          className="mt-[1.6cqw] h-[4cqw] text-[2.9cqw] font-semibold text-stone-600"
        >
          {copied
            ? "Tersalin. Simpan baik-baik."
            : "Ketuk Salin untuk menyimpan kode"}
        </p>
      </div>
      <p className="font-architects-daughter mt-[2cqw] text-center text-[2.9cqw] text-stone-500">
        Dibungkus dengan rapi oleh giftkuy.id — dibuka dengan bahagia oleh
        Megumin.
      </p>
    </div>
  );
}
