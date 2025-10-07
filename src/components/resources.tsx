"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import resource1 from "@/images/resources/resource-1.png";
import resource2 from "@/images/resources/resource-2.png";
import resource3 from "@/images/resources/resource-3.png";
import resource4 from "@/images/resources/resource-4.png";

const resources = [
  {
    title: "The Issuance Mandate",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: resource1,
  },
  {
    title: "The AI Agentic Scaling Mandate",
    image: resource2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "The Ip RWA Mandate",
    image: resource3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "The Creator Journey: From Zero To Empire",
    image: resource4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export function Resources() {
  return (
    <section id="resources" className="px-4 md:px-10 py-6">
      <div className="max-w-6xl mx-auto">
        <span className="badge">City Protocol Resources</span>
        <div className="h-px w-full mt-5 bg-[#9B7DF5]" />
        <div className="mt-6 grid md:grid-cols-4 gap-4">
          {resources.map(({ title, description, image }) => (
            <article key={title} className="card">
              <div className="card-body border p-5">
                <Image src={image} alt={title} className="mb-5 size-[50px]" />
                <h3 className="text-[32px] font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-muted-foreground">{description}</p>
                <Button
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
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
