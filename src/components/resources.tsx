"use client";

import resource2 from "@/images/resources/resource-2.png";
import resource3 from "@/images/resources/resource-3.png";
import Image from "next/image";
const resources = [
  {
    title: "Attention Module",
    image: resource2,
    description: (
      <>
        Attention is the discovery layer for on-chain assets—it’s how users
        surface opportunities with durable value and sustainable yield. City
        Protocol leverages on-chain personas, reputation, and interests to
        reimagine how assets are distributed and found across Web3.
        <span className="block h-1 md:h-2" /> We look at attention through
        three lenses: the personal affinity and recognition a user has around an
        asset; how well the user’s on-chain footprint and history align with the
        asset’s narrative, community, and utility; and, most importantly,
        whether users can actively participate in creating and routing attention
        instead of only consuming it.
        <span className="block h-1 md:h-2" /> The Attention Module has three
        core components: Viral City, which measures mindshare and lowers the
        threshold for users to create and amplify crypto-native content; City
        ID, which anchors a user’s on-chain persona and reputation; and the
        Totem Layer, which helps phygital assets gain offline traction and bring
        that signal back on-chain. Together, the Attention Module helps users
        discover assets that match their investment goals and participation
        style.
      </>
    ),
  },
  {
    title: "Capital Module",
    image: resource3,
    description: (
      <>
        The Capital Module of City Protocol targets three large, under-allocated
        sources of sustainable real-world yield that remain hard to access
        on-chain due to fragmented distribution, limited investor rails, and
        insufficient attention. These include the Creator Economy (valued at
        $250B and projected to grow to $480B by 2027), the Live Events boom
        (where demand for in-person experiences is at an all-time highs—Live
        Nation reported over $23B in 2024 revenue), the rapidly expanding
        private credit market (projected to reach $2.8T by 2028), and more.
        <span className="block h-1 md:h-2" /> The Capital Module tokenizes
        real-world assets into on-chain, yield-bearing primitives, making RWA
        exposure more accessible while improving transparency and composability.
        Given the scale of today’s IP-driven economy, City Protocol packages
        these opportunities into DeFi-native vaults so users can discover,
        allocate, and manage exposure with a familiar on-chain UX.
        <span className="block h-1 md:h-2" /> With the Capital Module, City
        Protocol brings experience-economy RWAs on-chain to support creators and
        operators such as YouTubers, DJs, and pop-up hosts. Users can stake
        stablecoins to participate and earn real-world yield, targeting roughly
        10–20% depending on the underlying asset and deal structure.
        <span className="block h-1 md:h-2" /> The Capital Module also provides
        institutions a cleaner pathway to alternative yield opportunities, with
        on-chain settlement, programmable distribution, and verifiable
        performance over time.
      </>
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
