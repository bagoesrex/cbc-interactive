export function LetterBody() {
  return (
    <div className="relative overflow-hidden px-[4cqw] py-[4cqw]">
      <div className="mt-[2cqw] flex items-end justify-between">
        <p className="font-dancing text-[4.6cqw] leading-tight font-bold text-stone-900">
          Hai Megumin,
          <span
            aria-hidden
            className="ml-[1.5cqw] inline-flex gap-[0.8cqw] align-middle"
          >
            <span
              style={{ animationDelay: "0s" }}
              className="typing-dot inline-block h-[1.2cqw] w-[1.2cqw] rounded-full bg-stone-400"
            />
            <span
              style={{ animationDelay: "0.2s" }}
              className="typing-dot inline-block h-[1.2cqw] w-[1.2cqw] rounded-full bg-stone-400"
            />
            <span
              style={{ animationDelay: "0.4s" }}
              className="typing-dot inline-block h-[1.2cqw] w-[1.2cqw] rounded-full bg-stone-400"
            />
          </span>
        </p>
        <p className="font-architects-daughter text-[2.9cqw] text-stone-400">
          10 September 2026
        </p>
      </div>

      <div className="font-architects-daughter mt-[1.6cqw] space-y-[2cqw] text-[3.3cqw] leading-relaxed text-stone-700">
        <p>
          Di antara semua orang yang pernah mampir di kafe kecil ini, kamu yang
          paling sering pulang membawa pulang tawa orang lain.
        </p>
        <p>
          Semoga di umur yang baru ini, hal-hal baik mengejarmu secepat kamu
          mengejar hal yang kamu suka. Sehat terus, mekar terus, jangan lupa
          makan manis secukupnya — kecuali hari ini, hari ini bebas!
        </p>
        <p>
          Kalau dunia lagi berisik, ingat: ada satu meja di sudut kafe yang
          selalu menyimpan tempat untukmu.
        </p>
      </div>

      <p className="font-dancing mt-[2.4cqw] text-right text-[3.8cqw] font-bold text-stone-900">
        — dari seseorang yang sayang kamu
      </p>
    </div>
  );
}
