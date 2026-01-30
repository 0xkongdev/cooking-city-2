"use client";

import resource2 from "@/images/resources/resource-2.png";
import resource3 from "@/images/resources/resource-3.png";
import Image from "next/image";
const resources = [
  {
    title: "Attention Module",
    image: resource2,
    description: (
      <img
        src="/animations/Gif 1.gif"
        alt="Attention Module"
        className="w-full h-auto unoptimized"
      />
    ),
  },
  {
    title: "Capital Module",
    image: resource3,
    description: (
      <img
        src="/animations/Gif 2.gif"
        alt="Capital Module"
        className="w-full h-auto unoptimized"
      />
    ),
  },
];

export function Resources() {
  return (
    <section id="resources" className="px-4 md:px-25 py-6 md:py-20">
      <div className="">
        <span className="badge">City Protocol Resources</span>
        <p className="mt-4 text-muted-foreground max-w-3xl text-sm md:text-base">
          City Protocol is built around two core modules—the Attention Module
          and the Capital Module. Together, they form a dual flywheel designed
          to accelerate investment democratization.
        </p>
        <div className="h-px w-full mt-5 md:mt-10 bg-[#9B7DF5]" />
        <div className="mt-6 md:mt-10 grid md:grid-cols-2 gap-4">
          {resources.map(({ title, description, image }) => (
            <article key={title} className="card flex flex-col h-full">
              <div className="card-body border p-5 flex-1">
                <Image
                  src={image}
                  alt={title}
                  className="mb-5 size-[50px] md:size-[60px] 2xl:size-[80px]"
                />
                <h3 className="text-[32px] 2xl:text-[46px] font-bold text-foreground">
                  {title}
                </h3>
                <div className="mt-6 text-muted-foreground">{description}</div>
                {/* <Button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                      history.pushState(null, "", "#contact");
                    }
                  }}
                  type="button"
                  className="mt-20 w-full"
                >
                  Contact us
                </Button> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
