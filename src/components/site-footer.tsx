import Link from "next/link";
import xIcon from "@/images/x-icon.svg";
import Image from "next/image";
import bigLogo from "@/images/big-logo.webp";

const footerData = {
  sections: [
    {
      title: "SOLUTIONS",
      items: [
        "City ID",
        "Viral city",
        "Totem Toy city",
        "Cooking City",
        "IP Strategy",
      ],
    },
    {
      title: "MANDATES",
      items: [
        "The Issuance Mandate",
        "The AI Agentic Scaling Mandate",
        "The IP RWA Mandate",
        "The Creator Journey: From Zero to Empire",
      ],
    },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#9BB4D2] px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto  grid grid-cols-2 md:grid-cols-4 gap-0">
        {footerData.sections.map(({ title, items }) => (
          <div key={title}>
            <h4 className="font-medium text-xl mb-3 text-[#030405]">{title}</h4>
            <ul className="space-y-2 text-lg font-bold text-foreground">
              {items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h4 className="font-medium text-xl mt-6 mb-3 text-[#030405]">
          FOLLOW US
        </h4>
        <Link
          href="https://x.com/cookingcityHQ"
          target="_blank"
          className="size-16 bg-[#9B7DF5] flex items-center justify-center"
        >
          <Image src={xIcon} alt="X" className="size-8" />
        </Link>
      </div>
      <Image
        src={bigLogo}
        alt="City Protocol"
        className="w-full h-auto mt-[36px]"
      />
      <div className="text-center border-t border-[#839BB7] text-lg font-medium text-foreground pt-4 mt-8">
        © 2025 <span className="text-[#9B7DF5]">RICH</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
