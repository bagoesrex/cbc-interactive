"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

interface DialogProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

/** Dialog reusable: 1 komponen untuk semua tombol, isi via `title` + `children`.
 *  Pakai elemen <dialog> bawaan browser sehingga dapat gratis:
 *  top-layer (lolos dari overflow-hidden stage), tombol Esc, dan
 *  pengembalian fokus ke tombol pemicu saat ditutup. */
export function Dialog({ open, title, onClose, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  // Kunci scroll body selama dialog terbuka.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      // Lebar/tinggi dialog murni ikut stage (@container), bukan viewport — walau
      // <dialog> tampil di top-layer, cqw/cqh tetap resolve ke ancestor
      // container-nya (stage). Tanpa batas rem: rem tidak ikut membesar
      // saat zoom-out, sehingga min(90cqw, 26rem) dulu mengunci dialog di 416px
      // sementara background terus membesar -> dialog terlihat mengecil.
      className="dialog-card m-auto h-fit max-h-[78cqh] w-[90cqw] overflow-y-auto rounded-[1.8cqw] bg-[#fff8f5] text-stone-800 shadow-2xl"
    >
      <div className="flex items-center justify-between gap-[3.2cqw] border-b-[0.4cqw] border-stone-900/10 bg-[#fff8f5] px-[3cqw] py-[2.4cqw]">
        <p
          id={titleId}
          className="inline-block rounded-full border-[0.35cqw] border-stone-900 bg-amber-100 px-[3.2cqw] py-[1cqw] text-[2.8cqw] font-bold tracking-[0.18cqw] text-stone-900 uppercase"
        >
          {title}
        </p>
        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label="Tutup dialog"
          className="cursor-pointer rounded-[1cqw] border-[0.35cqw] border-stone-900 bg-white px-[2.2cqw] py-[1cqw] text-[3cqw] leading-none font-bold text-stone-900 transition hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 active:translate-y-[0.2cqw]"
        >
          ✕
        </button>
      </div>
      <div className="bg-white text-[2.8cqw] outline-[0.5cqw] outline-offset-[-1.2cqw] outline-black/50 outline-dotted">
        {children}
      </div>
      <div className="border-t-[0.35cqw] border-stone-900/10 bg-[#fff8f5] py-[1.6cqw]">
        <div className="mx-auto w-fit rounded-full border-[0.35cqw] border-stone-900 bg-white px-[4cqw] py-[0.6cqw] text-center">
          <p className="font-dancing text-[3cqw] font-bold tracking-[0.2cqw] text-stone-900">
            giftkuy.id
          </p>
        </div>
      </div>
    </dialog>
  );
}
