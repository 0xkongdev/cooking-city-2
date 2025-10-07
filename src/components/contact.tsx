import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section
      id="contact"
      className="px-4 md:px-10 py-12"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <span className="badge">Contact Us</span>
        <div className="h-px w-full mt-5 bg-[#9B7DF5]" />
        <p className="mt-3 text-foreground max-w-2xl text-[22px] leading-[28px] font-medium">
          No matter if you want to grow your own IP or you want to invest on IP
          that will grow fast, let's chat!
        </p>
        <form className="mt-6 grid gap-4 md:max-w-2xl" action="#" method="post">
          <div>
            <label htmlFor="name">Name</label>
            <Input id="name" name="name" />
          </div>

          <div>
            <label htmlFor="company">Company</label>
            <Input id="company" name="company" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Input id="email" name="email" type="email" />
          </div>

          <div>
            <label htmlFor="notes">Notes</label>
            <Input id="notes" name="notes" />
          </div>

          <Button type="submit" className="w-full mt-4">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
}
