"use client";

import Lottie from "lottie-react";
import bannerAnimation from "@/animations/banner.json";

export function Hero() {
  return (
    <section className="pb-6 md:min-h-screen overflow-x-hidden">
      <div className="max-w-6xl px-4 md:px-10 mx-auto mt-2 md:mt-8">
        <h1 className="text-[38px] md:text-[80px] font-bold md:text-center leading-tight text-foreground">
          The IP <br className="md:hidden" />{" "}
          <span className="bg-primary text-primary-foreground px-2 rounded">
            Capital Market{" "}
          </span>{" "}
          <br className="hidden md:block" />
          Starts Here
        </h1>
        <p className="mt-2 md:text-center text-sm md:text-base text-muted-foreground">
          Our full lifecycle stack gives developers a clear path from first
          believers to durable economies.
        </p>
      </div>
      {/* <Image
        src={heroImg}
        alt="Hero"
        className="w-full h-auto mt-[30px] md:hidden"
      />
      <Image
        src={heroDesktopImg}
        alt="Hero"
        className="w-full h-auto mt-[30px] hidden md:block"
      /> */}

      <Lottie
        animationData={bannerAnimation}
        loop={true}
        className="w-full h-auto mt-[20px] scale-x-105"
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
    </section>
  );
}
