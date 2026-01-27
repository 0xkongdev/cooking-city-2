"use client";
import Link from "next/link";
import xIcon from "@/images/x-icon.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "./logo";

// Solution
// Cooking City: https://cooking.city/en
// City ID: Cityprotocol.co/cityid
// MANDATES
// The Issuance Mandate: https://city-protocol.gitbook.io/docs/three-mandates/the-issuance-mandate
// The AI Agentic Scaling Mandate: https://city-protocol.gitbook.io/docs/three-mandates/the-ai-agentic-scaling-mandate
// The IP RWA Mandate: https://city-protocol.gitbook.io/docs/three-mandates/the-ip-strategy-mandate
// The Creator Journey: From Zero to Empire: https://city-protocol.gitbook.io/docs/three-mandates/the-creator-journey-from-zero-to-empire

const footerData = {
  sections: [
    {
      title: "SOLUTIONS",
          items: [
            {
              title: "City ID / City Passport",
              link: "https://cityprotocol.co/cityid/",
            },
            {
              title: "Viral City",
              link: "https://viral-city-baseapp.cityprotocol.co/dashboard",
            },
            {
              title: "City Vault (Coming Soon)",
              link: "#",
            },
            {
              title: "Totem Toy City",
              link: "https://totem.cityprotocol.co/",
            },
            {
              title: "IP Strategy",
              link: "https://cityprotocol.co/ipstrategy/home",
            },
          ],
    },
    {
      title: "MANDATES",
      items: [
        {
          title: "The Issuance Mandate",
          link: "https://city-protocol.gitbook.io/docs/three-mandates/the-issuance-mandate",
        },
        {
          title: "The AI Agentic Scaling Mandate",
          link: "https://city-protocol.gitbook.io/docs/three-mandates/the-ai-agentic-scaling-mandate",
        },
        {
          title: "The IP RWA Mandate",
          link: "https://city-protocol.gitbook.io/docs/three-mandates/the-ip-strategy-mandate",
        },
        {
          title: "The Creator Journey: From Zero to Empire",
          link: "https://city-protocol.gitbook.io/docs/three-mandates/the-creator-journey-from-zero-to-empire",
        },
      ],
    },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#9BB4D2] pt-10">
      <div className="grid grid-cols-2 md:grid-cols-12 px-4 md:px-25 gap-0">
        {footerData.sections.map(({ title, items }, index) => (
          <div
            key={title}
            className={cn(index === 1 ? "md:col-span-4" : "md:col-span-3")}
          >
            <h4 className="font-medium text-xl mb-3 text-[#030405]">{title}</h4>
            <ul className="space-y-2 text-lg font-bold text-foreground">
              {items.map(({ title, link }) => (
                <li key={title}>
                  <Link href={link} target="_blank" className="hover:underline">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 md:col-span-1 2xl:-translate-x-[150px]">
          <h4 className="font-medium text-xl mt-6 mb-3 text-[#030405] md:mt-0">
            FOLLOW US
          </h4>
          <Link
            href="https://x.com/cityprotocolHQ"
            target="_blank"
            className="size-16 bg-[#9B7DF5] flex items-center justify-center"
          >
            <Image src={xIcon} alt="X" className="size-8" />
          </Link>
        </div>
        <div className="md:col-span-4 flex -ml-3.5 mt-4 md:mt-0 md:ml-0 md:justify-end col-span-2">
          {/* <Image
            src={bigLogo}
            alt="City Protocol"
            className="w-full h-auto mt-[36px] md:mt-0 self-end md:w-1/2 md:max-w-[500px]"
          /> */}
          <div className="flex text-[#193246] h-22 -ml-1 md:-ml-0 md:h-16 md:self-end md:items-end w-full md:w-auto">
            <Logo />
          </div>
        </div>
      </div>

      <div className="text-center px-4 md:px-25 border-t border-[#839BB7] text-lg font-medium text-foreground py-4 mt-8">
        © 2025 <span className="text-[#9B7DF5]">City Protocol</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
