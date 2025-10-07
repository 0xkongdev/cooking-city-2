import heroImg from "@/images/hero-img.webp";
import Image from "next/image";

export function Hero() {
  return (
    <section className="md:pt-14 pb-6">
      <div className="max-w-6xl px-4 md:px-10 mx-auto mt-2 md:mt-8">
        <h1 className="text-[38px] md:text-7xl font-bold leading-tight text-foreground">
          Grow The Inner <br /> Power Of Intellectual{" "}
          <span className="bg-primary text-primary-foreground px-2 rounded">
            Property
          </span>
        </h1>
        <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-3xl">
          Our full lifecycle stack gives developers a clear path from first
          believers to durable economies.
        </p>
      </div>
      <Image src={heroImg} alt="Hero" className="w-full h-auto mt-[30px]" />
    </section>
  );
}
