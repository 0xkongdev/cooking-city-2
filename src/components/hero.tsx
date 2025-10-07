import heroImg from "@/images/hero-img.webp";
import heroDesktopImg from "@/images/hero-desktop-img.webp";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pb-6 md:min-h-screen">
      <div className="max-w-6xl px-4 md:px-10 mx-auto mt-2 md:mt-8">
        <h1 className="text-[38px] md:text-[80px] font-bold md:text-center leading-tight text-foreground">
          Grow The Inner <br className="md:hidden" /> Power Of{" "}
          <br className="hidden md:block" /> Intellectual{" "}
          <span className="bg-primary text-primary-foreground px-2 rounded">
            Property
          </span>
        </h1>
        <p className="mt-2 md:mt-6 md:text-center text-sm md:text-base text-muted-foreground">
          Our full lifecycle stack gives developers a clear path from first
          believers to durable economies.
        </p>
      </div>
      <Image
        src={heroImg}
        alt="Hero"
        className="w-full h-auto mt-[30px] md:hidden"
      />
      <Image
        src={heroDesktopImg}
        alt="Hero"
        className="w-full h-auto mt-[30px] hidden md:block"
      />
    </section>
  );
}
