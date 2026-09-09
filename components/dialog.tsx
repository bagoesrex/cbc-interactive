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
      className="dialog-card m-auto h-fit max-h-[78cqh] w-[90cqw] overflow-y-auto rounded-md bg-[#fff8f5] text-stone-800 shadow-2xl"
    >
      <div className="flex items-start justify-between gap-4 border-b border-b-gray-300 bg-gray-100 px-2 py-3">
        <p id={titleId} className="font-dancing text-xl font-extrabold">
          {title}
        </p>
        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label="Tutup dialog"
          className="cursor-pointer rounded-md px-2.5 py-1 text-lg leading-none hover:bg-stone-800/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
        >
          ✕
        </button>
      </div>
      <div className="bg-white px-2 py-4 text-center text-sm">{children}</div>
      <div className="border-t bg-red-200 py-1">
        <div className="mx-auto w-[40%] rounded-sm border bg-white px-1 text-center">
          <p className="font-dancing text-xs font-bold tracking-[1.1]">
            giftkuy.id
          </p>
        </div>
      </div>
    </dialog>
  );
}
