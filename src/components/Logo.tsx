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
      <span className="font-logo font-extrabold leading-[0.9] tracking-[0.02em] text-[#175567]">
        <span className="block text-[1.6rem] sm:text-[1.8rem]">Trail</span>
        <span className="mt-0.5 block text-[1.15rem] sm:text-[1.3rem]">
          Waste Disposal
        </span>
      </span>
    </span>
  );
}
