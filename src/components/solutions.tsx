export function Solutions() {
  return (
    <section id="solutions" className="px-4 md:px-25 py-6 md:py-20">
      <div className="">
        <span className="badge">City Protocol Solutions</span>
        <div className="h-px w-full mt-5 md:mt-10 bg-[#9B7DF5]" />
        <div className="mt-6 grid md:grid-flow-col md:grid-rows-3 gap-y-6 md:gap-x-15 md:gap-y-6">
          {[
            {title: "City ID / City Passport", description: "Identity & reputation layer"},
            {title: "Viral City", description: "Attention & AI UGC layer"},
            {title: "City Vault", description: "RWA Vault layer"},
            {title: "Totem Toy City", description: "Phygitals layer"},
            {title: "RWA Strategy", description: "RWA Liquidity Flywheel layer"},
          ].map((item, idx) => (
            <div
              key={item.title}
              className="flex items-start gap-4 border-b pb-6 md:p-[30px]"
            >
              <div className={`shape shape-${idx + 1} flex-shrink-0 mt-2`}>{idx + 1}</div>
              <div className="flex flex-col gap-2">
                <p className="text-[28px] md:text-[50px] font-bold leading-tight">
                  {item.title}:
                </p>
                <p className="text-muted-foreground text-lg md:text-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
