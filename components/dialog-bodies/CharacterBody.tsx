import Image from "next/image";

export function CharacterBody() {
  return (
    <div className="relative z-0 overflow-hidden px-[2.4cqw] py-[2.4cqw]">
      <div className="font-architects-daughter relative z-10 space-y-[2.4cqw] text-[3.5cqw] font-[395] tracking-[0.3cqw]">
        <p className="font-dancing text-[4.6cqw] leading-tight font-bold text-stone-900">
          Halo, Megumin
        </p>
        <p>
          Selamat hari lahir. Semoga tahun ini kamu makin sering tersenyum
          karena hal-hal kecil, dan makin jarang capek karena hal-hal besar.
        </p>
        <p>
          Terima kasih sudah jadi orang yang selalu bikin hari-hari terasa lebih
          ringan. Tertawamu itu hadiah — hari ini giliranmu menerima yang
          manis-manis. Selamat ulang tahun! ♡
        </p>
        <p className="text-[3cqw] text-stone-500">
          Psst… masih ada 3 kejutan lain di kafe ini. Coba ketuk kado, galeri,
          dan suratnya!
        </p>
      </div>
      <div className="absolute right-0 bottom-[-16cqw] z-0 aspect-407/624 w-[40cqw] opacity-20">
        <Image
          src={"/character.png"}
          alt=""
          fill
          priority
          draggable={false}
          className="pointer-events-none -scale-x-100 object-contain select-none"
        />
      </div>
    </div>
  );
}
