import type { Hotspot } from "@/types/hotspot";
import { CharacterBody } from "@/components/dialog-bodies/CharacterBody";
import { GiftBody } from "@/components/dialog-bodies/GiftBody";
import { GalleryBody } from "@/components/dialog-bodies/GalleryBody";
import { LetterBody } from "@/components/dialog-bodies/LetterBody";

// Cukup tambah/edit entri di sini untuk mengubah tombol + isi dialognya.
export const HOTSPOTS: Hotspot[] = [
  {
    id: "character",
    label: "Buka pesan ulang tahun",
    src: "/character.png",
    hotspotClassName: "top-[28cqh] left-[8cqw] aspect-407/624 w-[38cqw]",
    dialogTitle: "Selamat Ulang Tahun!",
    dialogBody: <CharacterBody />,
  },
  {
    id: "gift",
    label: "Buka kado spesial",
    src: "/gift.png",
    hotspotClassName: "top-[50cqh] left-[50cqw] aspect-475/470 w-[30cqw]",
    dialogTitle: "Kado Spesial",
    dialogBody: <GiftBody />,
  },
  {
    id: "gallery",
    label: "Buka galeri kenangan",
    src: "/gallery.png",
    hotspotClassName:
      "top-[36cqh] right-[5cqw] aspect-451/384 w-[15cqw] -scale-x-100 rotate-5",
    dialogTitle: "Galeri Kenangan",
    dialogBody: <GalleryBody />,
  },
  {
    id: "letter",
    label: "Buka surat untukmu",
    src: "/letter.png",
    hotspotClassName: "top-[23cqh] left-[47cqw] aspect-423/405 w-[12cqw]",
    dialogTitle: "Surat Untukmu",
    dialogBody: <LetterBody />,
  },
];
