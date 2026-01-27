"use client";

import Lottie from "lottie-react";
import bannerAnimation from "@/animations/banner.json";
import { cn } from "@/lib/utils";
import { trustedBy } from "@/lib/constants";
import Image from "next/image";

export function Hero() {
  return (
    <section className="md:min-h-screen overflow-x-hidden relative pb-16">
      <div className="max-w-6xl px-4 md:px-10 mx-auto mt-2 md:mt-8">
        <h1 className="text-[38px] md:text-[80px] font-bold md:text-center leading-tight text-foreground">
          Attention & Capital <br className="md:hidden" />{" "}
          <span className="bg-primary text-primary-foreground px-2 rounded">
            Infrastructure{" "}
          </span>{" "}
          <br className="" />
         for Onchain Assets
        </h1>
        <p className="mt-2 md:text-center text-sm md:text-base text-muted-foreground">
          The Dual Flywheel for Onchain Assets Starts Here
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

      <div className="marquee-container absolute bottom-0 left-0 right-0">
        {/* Left Marquee */}
        <div className="marquee-track h-full">
          <div className="flex animate-marquee-left whitespace-nowrap h-full items-center">
            {/* First set of logos */}
            {trustedBy.map((company, index) => (
              <div
                key={`left-first-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
                className={cn(
                  "flex-shrink-0 mx-4 flex items-center justify-center h-full",
                  company.height ? company.height : "h-full",
                )}
              >
                <Image
                  src={company.image}
                  alt={`trusted by ${index + 1}`}
                  className="h-full w-auto object-contain filter transition-all duration-300"
                  priority={index < 5}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {trustedBy.map((company, index) => (
              <div
                key={`left-second-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
                className={cn(
                  "flex-shrink-0 mx-4 flex items-center justify-center h-full",
                  company.height ? company.height : "h-full",
                )}
              >
                <Image
                  src={company.image}
                  alt={`trusted by ${index + 1}`}
                  className="h-full w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Marquee */}
        <div className="marquee-track h-full">
          <div className="flex animate-marquee-right whitespace-nowrap h-full">
            {/* First set of logos */}
            {trustedBy.map((company, index) => (
              <div
                key={`right-first-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
                className={cn(
                  "flex-shrink-0 mx-4 flex items-center justify-center h-1/2",
                  // index === trustedBy.length - 1 ? "h-1/2" : "h-full"
                )}
              >
                <Image
                  src={company.image}
                  alt={`trusted by ${index + 1}`}
                  className={cn(
                    "h-full w-auto object-contain filter transition-all duration-300",
                    company.height,
                  )}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {trustedBy.map((company, index) => (
              <div
                key={`right-second-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
                className={cn(
                  "flex-shrink-0 mx-4 flex items-center justify-center h-1/2",
                  // index === trustedBy.length - 1 ? "h-1/2" : "h-full"
                )}
              >
                <Image
                  src={company.image}
                  alt={`trusted by ${index + 1}`}
                  className={cn(
                    "h-full w-auto object-contain transition-all duration-300",
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
