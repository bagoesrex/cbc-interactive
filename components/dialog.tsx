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
      className="dialog-card m-auto h-[78cqh] w-[90cqw] overflow-y-auto rounded-md bg-[#fff8f5] p-3 text-stone-800 shadow-2xl"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 id={titleId} className="text-xl font-bold">
          {title}
        </h2>
        {/* Icon-only button wajib punya nama aksesibel. */}
        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label="Tutup dialog"
          className="cursor-pointer rounded-full bg-stone-800/5 px-2.5 py-1 text-lg leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
        >
          ✕
        </button>
      </div>
      <div className="mt-3 text-sm leading-relaxed">{children}</div>
    </dialog>
  );
}
