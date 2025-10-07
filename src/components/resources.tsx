"use client";

import resource1 from "@/images/resources/resource-1.png";
import resource2 from "@/images/resources/resource-2.png";
import resource3 from "@/images/resources/resource-3.png";
import resource4 from "@/images/resources/resource-4.png";
import Image from "next/image";
const resources = [
  {
    title: "The Issuance Mandate",
    description: (
      <>
        Every IP deserves a path to markets. The Issuance Mandate establishes
        the infrastructure for creators to tokenize and launch IP without
        gatekeepers.
        <span className="block h-1 md:h-2" /> Through our fair launch mechanisms
        bonding curves, conviction pools, and automated price discovery any
        creator can bring their IP to market in minutes, not months.{" "}
        <span className="block h-1 md:h-2" /> Just transparent, on-chain
        issuance where early supporters and creators share upside equally. This
        is how IP becomes programmable capital.
      </>
    ),
    image: resource1,
  },
  {
    title: "The AI Agentic Scaling Mandate",
    image: resource2,
    description: (
      <>
        The AI Agentic Scaling Mandate transforms consumers into co-creators
        through AI-powered tools and phygital experiences that turn your
        favorite characters from screen to tab
        <span className="block h-1 md:h-2" /> Traditional growth is guesswork.
        Creators spam content everywhere hoping something sticks. Communities
        form accidentally. Attribution is impossible, so contributor rewarded.
        <span className="block h-1 md:h-2" /> City Protocol brings AI-powered
        generative tools and incentives to growth. City ID creates portable
        reputation. Viral City empowers every fan to create quality content.
        Totem Toy City extends digital IP into physical products—turning
        on-screen characters into rea ollectibles.{" "}
        <span className="block h-1 md:h-2" />
        This isn't growth hacking. It's growth architecture—sustainable systems
        that compound value and transform passive audiences into active
        builders.
      </>
    ),
  },
  {
    title: "The Ip RWA Mandate",
    image: resource3,
    description: (
      <>
        IP is the largest untapped asset class in crypto. The IP RWA Mandate
        bridges traditional IP rights with on-chain financial infrastructure.
        <span className="block h-1 md:h-2" />
        From music catalogs to patent portfolios to brand equity, trillions of
        dollars in IP value remains locked in outdated legal structures. City
        Protocol enables fractional ownership, liquid secondary markets, and
        IP-backed securities that bring this asset class on-chain.
        <span className="block h-1 md:h-2" /> Real-world assets meet
        programmable IP. DeFi gets a multi-trillion dollar upgrade.
      </>
    ),
  },
  {
    title: "The Creator Journey: From Zero To Empire",
    image: resource4,
    description: (
      <>
        The path from idea to empire shouldn't require venture capital or
        institutional gatekeepers. The Creator Journey Mandate maps the complete
        lifecycle of IP development on City Protocol.
        <span className="block h-1 md:h-2" /> Launch on Cooking City. Build
        community through Viral City. Establish identity via City ID. Enable
        ownership with Totem Toy City. Scale revenue through IP Strategy.
        <span className="block h-1 md:h-2" /> Every creator, from solo artists
        to indie studios, gets access to the same infrastructure that powers
        billion-dollar IP portfolios. This is how empires are built on-chain.
      </>
    ),
  },
];

export function Resources() {
  return (
    <section id="resources" className="px-4 md:px-25 py-6 md:py-20">
      <div className="">
        <span className="badge">City Protocol Resources</span>
        <div className="h-px w-full mt-5 md:mt-10 bg-[#9B7DF5]" />
        <div className="mt-6 md:mt-10 grid md:grid-cols-4 gap-4">
          {resources.map(({ title, description, image }) => (
            <article key={title} className="card">
              <div className="card-body border p-5 md:min-h-[950px]">
                <Image
                  src={image}
                  alt={title}
                  className="mb-5 size-[50px] md:size-[60px] 2xl:size-[80px]"
                />
                <h3 className="text-[32px] 2xl:text-[46px] font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-muted-foreground">{description}</p>
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
