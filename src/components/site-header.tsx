"use client";

import { MenuIcon, Layers, BookOpen, Users, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";

function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#solutions"
            className="px-10 py-2 text-base font-medium"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("solutions");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                history.pushState(null, "", "#solutions");
              }
            }}
          >
            Solutions
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#resources"
            className="px-10 py-2 text-base font-medium"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("resources");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                history.pushState(null, "", "#resources");
              }
            }}
          >
            Resources
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#contact"
            className="px-10 py-2 text-base font-medium"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                history.pushState(null, "", "#contact");
              }
            }}
          >
            Community
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <MenuIcon className="size-8 stroke-[1.25]" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="px-0 w-[85vw] sm:w-[380px] md:rounded-l-xl bg-background/95 backdrop-blur"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="px-5 pt-5 pb-3 border-b">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="City Protocol" className="size-8" />
          </div>
        </div>

        <nav className="py-1">
          <ul className="">
            <li>
              <Link
                href="#solutions"
                scroll={false}
                className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const el = document.getElementById("solutions");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.pushState(null, "", "#solutions");
                  }
                }}
              >
                <span className="inline-flex items-center gap-3 text-base">
                  <Layers className="size-5 text-muted-foreground" />
                  <span className="font-medium">Solutions</span>
                </span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </Link>
            </li>
            <li className="border-t" />
            <li>
              <Link
                href="#resources"
                scroll={false}
                className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const el = document.getElementById("resources");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.pushState(null, "", "#resources");
                  }
                }}
              >
                <span className="inline-flex items-center gap-3 text-base">
                  <BookOpen className="size-5 text-muted-foreground" />
                  <span className="font-medium">Resources</span>
                </span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </Link>
            </li>
            <li className="border-t" />
            <li>
              <Link
                href="#contact"
                scroll={false}
                className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.pushState(null, "", "#contact");
                  }
                }}
              >
                <span className="inline-flex items-center gap-3 text-base">
                  <Users className="size-5 text-muted-foreground" />
                  <span className="font-medium">Community</span>
                </span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="px-5 pb-5 pt-8">
          <Button asChild className="w-full">
            <Link
              href="#contact"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.pushState(null, "", "#contact");
                }
              }}
            >
              Get in touch
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  return (
    <div className="px-4 md:px-10 py-4 md:border-b md:border-[#D4D4D8]">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="City Protocol home"
          className="inline-flex items-center gap-2"
        >
          <Image src={logo} alt="City Protocol" className="size-12" />
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </div>
  );
}
