export function Solutions() {
  return (
    <section id="solutions" className="px-4 md:px-10 py-6">
      <div className="max-w-6xl mx-auto">
        <span className="badge">City Protocol Solutions</span>
        <div className="h-px w-full mt-5 bg-[#9B7DF5]" />
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            "City ID",
            "Viral City",
            "Totem Toy City",
            "Cooking City",
            "Ip Stategy",
          ].map((item, idx) => (
            <div key={item} className="flex items-center gap-5 border-b pb-6">
              <div className={`shape shape-${idx + 1}`}>{idx + 1}</div>
              <p className="text-[28px] font-bold leading-tight">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
