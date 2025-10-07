export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[36px] md:text-[80px] font-bold tracking-tight text-foreground">
      {children}
    </h2>
  );
}
