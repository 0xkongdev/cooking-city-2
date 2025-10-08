import { SectionHeading } from "@/components/section-heading";

export function WhyBuild() {
  return (
    <section className="px-4 md:px-25 py-6 md:py-20" aria-labelledby="why">
      <div className="grid md:grid-cols-2 gap-5 md:gap-[250px] items-stretch">
        <div>
          <SectionHeading>
            Why We're
            <div className="bg-primary px-2 rounded text-primary-foreground w-fit">
              Building City
            </div>{" "}
            Protocol
          </SectionHeading>
          <p className="mt-3 text-muted-foreground leading-6 text-sm md:text-base">
            For the first time in history, intellectual property can be
            programmed, traded, and financed like any other asset class. But the
            infrastructure doesn't exist yet. <br />
            City Protocol is that infrastructure. We're building the financial
            layer where IP becomes liquid capital where creators launch,
            communities invest, and sustainable revenue flows back to those who
            build.
            <br /> Every breakthrough IP from films to protocols to brands
            deserves access to markets. City Protocol makes that possible.{" "}
            <br />
            This is the IP capital market. And it starts here.
          </p>
        </div>
        <div className="h-60 md:h-auto w-full bg-neutral-900" />
      </div>
    </section>
  );
}
