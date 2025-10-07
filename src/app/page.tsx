import { Hero } from "@/components/hero";
import { WhyBuild } from "@/components/why-build";
import { Solutions } from "@/components/solutions";
import { Resources } from "@/components/resources";
// import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Hero />
      <WhyBuild />
      <Solutions />
      <Resources />
      {/* <Contact /> */}
      <SiteFooter />
    </main>
  );
}
