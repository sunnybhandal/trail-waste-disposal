import Image from "next/image";

type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function Logo({ className = "", markClassName = "h-11 w-11" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/images/trail-waste-globe.png"
        alt=""
        width={88}
        height={88}
        className={`shrink-0 ${markClassName}`}
        priority
      />
      <span className="leading-none">
        <span className="block font-display text-[1.45rem] font-semibold tracking-tight text-forest sm:text-[1.6rem]">
          Trail
        </span>
        <span className="mt-0.5 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink">
          Waste Disposal
        </span>
      </span>
    </span>
  );
}
