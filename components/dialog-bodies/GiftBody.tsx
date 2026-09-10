"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const LAYERS: Array<{
  badge: string;
  title: string;
  desc: string;
  hint: string;
  cover: string;
  tape: string;
}> = [
  {
    badge: "Lapisan 1 dari 3",
    title: "Pita lepas!",
    desc: "Ternyata bungkusnya berlapis. Sabar, yang bagus butuh usaha.",
    hint: "Ketuk pita 3x untuk melepasnya",
    cover: "bg-amber-200",
    tape: "bg-rose-400",
  },
  {
    badge: "Lapisan 2 dari 3",
    title: "Kertasnya sobek!",
    desc: "Tinggal kotaknya. Dikit lagi, Megumin.",
    hint: "Gosok kertasnya 3x sampai sobek",
    cover: "bg-rose-200",
    tape: "bg-amber-400",
  },
];

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

function Dots({ step }: { step: number }) {
  return (
    <div aria-hidden className="flex items-center justify-center gap-[1.6cqw]">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`h-[1.8cqw] w-[1.8cqw] rounded-full border-[0.3cqw] border-stone-900 ${
            n <= step ? "bg-stone-900" : "bg-white"
          }`}
        />
      ))}
    </div>
  );
}

/** Bungkus yang dibuka dengan ketukan langsung, bukan tombol.
 *  Tiap ketuk mengupas sedikit (opacity + scale), ketuk ke-3 lolos. */
function PeelBox({
  hint,
  cover,
  tape,
  onDone,
}: {
  hint: string;
  cover: string;
  tape: string;
  onDone: () => void;
}) {
  const needed = 3;
  const [taps, setTaps] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const boxRef = useRef<HTMLButtonElement>(null);

  function tilt(e: React.PointerEvent) {
    const el = boxRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  }

  function untilt() {
    const el = boxRef.current;
    if (el) el.style.transform = "";
  }

  function tap() {
    if (leaving) return;
    const next = taps + 1;
    setTaps(next);
    if (next >= needed) {
      setLeaving(true);
      window.setTimeout(onDone, 320);
    }
  }

  const remaining = needed - taps;
  const coverOpacity = leaving ? 0 : 1 - taps / needed;

  return (
    <>
      <button
        ref={boxRef}
        type="button"
        onClick={tap}
        onPointerMove={tilt}
        onPointerLeave={untilt}
        aria-label={`${hint}. Sisa ${remaining} ketukan.`}
        className="relative mx-auto block w-[52cqw] cursor-pointer transition-transform duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-500 active:scale-95"
      >
        {/* isi yang mengintip */}
        <span className="flex aspect-square flex-col items-center justify-center rounded-[1.6cqw] border-[0.4cqw] border-stone-900 bg-[#fffdf7]">
          <span className="text-[8cqw]">{leaving ? "🎉" : "🎁"}</span>
          <span className="font-architects-daughter text-[3cqw] text-stone-500">
            {leaving ? "kebuka!" : "ngintip…"}
          </span>
        </span>
        {/* kertas pembungkus yang terkupas */}
        <span
          aria-hidden
          style={{ opacity: coverOpacity }}
          className={`absolute inset-0 rounded-[1.6cqw] border-[0.4cqw] border-stone-900 shadow-[0.6cqw_0.6cqw_0_0_#1c1917] transition-all duration-300 ${cover} ${
            leaving ? "scale-110 rotate-3" : "scale-100"
          }`}
        >
          <span
            className={`absolute top-0 bottom-0 left-1/2 w-[4cqw] -translate-x-1/2 ${tape}`}
          />
          <span
            className={`absolute top-1/2 left-0 h-[4cqw] w-full -translate-y-1/2 ${tape}`}
          />
        </span>
      </button>
      <p
        aria-live="polite"
        className="font-architects-daughter mt-[2cqw] text-[3.1cqw] text-stone-600"
      >
        {remaining > 0 ? `${hint} (sisa ${remaining}x)` : "Lepas! Lanjut…"}
      </p>
    </>
  );
}

export function GiftBody() {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => Math.min(s + 1, 3));

  if (step === 0) {
    return (
      <div className="relative overflow-hidden px-[4cqw] py-[5cqw] text-center">
        {/* Kado bisa diketuk langsung — bukan tombol terpisah */}
        <button
          type="button"
          onClick={next}
          aria-label="Ketuk kado untuk mulai membuka"
          className="animate-float-slow relative mx-auto block aspect-475/470 w-[46cqw] cursor-pointer transition-transform duration-150 ease-out hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-500 active:scale-90"
        >
          <Image
            src="/gift.png"
            alt=""
            fill
            draggable={false}
            className="pointer-events-none object-contain select-none"
          />
        </button>
        <p className="font-dancing mt-[2.4cqw] text-[4.6cqw] leading-tight font-bold text-stone-900">
          Untuk Megumin
        </p>
        <p className="font-architects-daughter mx-auto mt-[1.6cqw] max-w-[64cqw] text-[3.2cqw] leading-snug text-stone-600">
          Ketuk kadonya langsung untuk mulai membuka.
        </p>
      </div>
    );
  }

  if (step === 1 || step === 2) {
    const layer = LAYERS[step - 1]!;
    return (
      <div className="relative overflow-hidden px-[4cqw] py-[5cqw] text-center">
        <Dots step={step} />
        <p className="mt-[2cqw] text-[2.7cqw] font-bold tracking-[0.2cqw] text-stone-500 uppercase">
          {layer.badge}
        </p>
        <p className="font-dancing mt-[1cqw] text-[4.6cqw] leading-tight font-bold text-stone-900">
          {layer.title}
        </p>
        <p className="font-architects-daughter mx-auto mt-[1.2cqw] max-w-[60cqw] text-[3.2cqw] text-stone-600">
          {layer.desc}
        </p>
        <div className="mt-[3cqw]">
          <PeelBox
            key={step}
            hint={layer.hint}
            cover={layer.cover}
            tape={layer.tape}
            onDone={next}
          />
        </div>
        <button
          type="button"
          onClick={next}
          className="mt-[2.4cqw] cursor-pointer text-[2.8cqw] font-semibold text-stone-400 underline underline-offset-4 hover:text-stone-600"
        >
          Lewati, buka langsung
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

      <Dots step={3} />
      <div className="mt-[2cqw] text-center">
        <p className="font-dancing text-[4.6cqw] leading-tight font-bold text-stone-900">
          Isinya… kamu!
        </p>
      </div>

      <div className="mt-[2.4cqw] rounded-[1.6cqw] border-[0.4cqw] border-stone-900 bg-[#fffdf7] p-[3.2cqw] text-center shadow-[0.6cqw_0.6cqw_0_0_#1c1917]">
        <p className="font-architects-daughter mx-auto max-w-[60cqw] text-[3.2cqw] leading-relaxed text-stone-700">
          Maaf isinya bukan barang. Isinya doa: semoga Megumin selalu
          dikelilingi orang yang berani repot demi dia — dimulai dari yang bikin
          kado digital aneh ini.
        </p>
        <button
          type="button"
          onClick={() => setStep(0)}
          className="mt-[2.4cqw] cursor-pointer rounded-[1cqw] border-[0.35cqw] border-stone-900 bg-white px-[4cqw] py-[1.4cqw] text-[2.9cqw] font-bold text-stone-900 transition hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 active:translate-y-[0.2cqw]"
        >
          Ulangi dari awal
        </button>
      </div>

      <p className="font-architects-daughter mt-[2.4cqw] text-center text-[2.9cqw] text-stone-500">
        Dibungkus dengan rapi oleh giftkuy.id — dibuka dengan bahagia oleh
        Megumin.
      </p>
    </div>
  );
}
