import Image from "next/image";

type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function Logo({ className = "", markClassName = "h-12 w-12" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/images/trail-waste-globe.png"
        alt=""
        width={96}
        height={96}
        className={`shrink-0 ${markClassName}`}
        priority
      />
      <span className="font-logo text-[1.45rem] font-extrabold leading-[0.9] tracking-[0.02em] text-[#175567] sm:text-[1.6rem]">
        <span className="block">Trail</span>
        <span className="mt-0.5 block">Waste Disposal</span>
      </span>
    </span>
  );
}
