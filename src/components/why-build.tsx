import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import whyBuild from "@/images/why_build_gif.gif";

export function WhyBuild() {
  return (
    <section className="px-4 md:px-25 py-6 md:py-20" aria-labelledby="why">
      <div className="grid md:grid-cols-2 gap-5 md:gap-[150px] items-stretch">
        <div>
          <SectionHeading>
            Why We're
            <br />
            Building
            <div className="bg-primary px-2 rounded text-primary-foreground w-fit mt-2">
              City Protocol
            </div>
          </SectionHeading>
          <p className="mt-3 text-muted-foreground leading-6 text-sm md:text-base">
            Every breakout onchain assets is a feedback loop between attention and capital. Capital funds production and distribution; attention creates demand, revenue, and the wealth effect that attracts more capital. <br />
            City Protocol is that infrastructure. We're building the financial
            layer where IP becomes liquid capital where creators launch,
            communities invest, and sustainable revenue flows back to those who
            build.
            <br />  If you only solve one side, on-chain assets can’t either launch or sustain. 
            <br /> City Protocol is built as an Attention - Capital flywheel, a single system that bootstraps and compounds both.
          </p>
        </div>
        <div className="h-60 md:h-auto w-full">
          <Image
            src={whyBuild}
            alt="Why We're Building"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
