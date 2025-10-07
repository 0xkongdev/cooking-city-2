export function Solutions() {
  return (
    <section id="solutions" className="px-4 md:px-25 py-6 md:py-20">
      <div className="">
        <span className="badge">City Protocol Solutions</span>
        <div className="h-px w-full mt-5 md:mt-10 bg-[#9B7DF5]" />
        <div className="mt-6 grid md:grid-flow-col md:grid-rows-3 gap-y-6 md:gap-x-15 md:gap-y-6">
          {[
            "City ID",
            "Viral City",
            "Totem Toy City",
            "Cooking City",
            "Ip Stategy",
          ].map((item, idx) => (
            <div
              key={item}
              className="flex items-center gap-5 border-b pb-6 md:p-[30px]"
            >
              <div className={`shape shape-${idx + 1}`}>{idx + 1}</div>
              <p className="text-[28px] md:text-[50px] font-bold leading-tight">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
