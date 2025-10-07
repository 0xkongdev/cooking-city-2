import { SectionHeading } from "@/components/section-heading";

export function WhyBuild() {
  return (
    <section className="px-4 md:px-10 py-6 md:py-16" aria-labelledby="why">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 md:gap-14 items-start">
        <div>
          <SectionHeading>
            Why We Build A{" "}
            <span className="bg-primary px-2 rounded text-primary-foreground">
              City
            </span>
          </SectionHeading>
          <p className="mt-3 text-muted-foreground leading-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="h-60 md:h-80 w-full bg-neutral-900" />
      </div>
    </section>
  );
}
