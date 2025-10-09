"use client";

import { MenuIcon, Layers, BookOpen, Users, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Logo from "./logo";
import TextLogo from "./text-logo.svg";

function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex" viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-10 py-2 text-base font-medium bg-transparent rounded-none hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent hover:text-current focus:text-current data-[state=open]:text-current focus-visible:ring-0 focus-visible:outline-none [&>svg]:hidden !bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent !rounded-none text-right justify-end w-[200px]">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!bg-[#87F5F5] text-[#193246] border-none shadow-none p-2 !rounded-none **:data-[slot=navigation-menu-link]:hover:bg-transparent **:data-[slot=navigation-menu-link]:focus:bg-transparent **:data-[slot=navigation-menu-link]:hover:text-current **:data-[slot=navigation-menu-link]:focus:text-current **:data-[slot=navigation-menu-link]:data-[active=true]:bg-transparent **:data-[slot=navigation-menu-link]:focus-visible:ring-0 **:data-[slot=navigation-menu-link]:focus-visible:outline-none">
            <div className="grid min-w-[165px] gap-1">
              <NavigationMenuLink asChild>
                <a
                  href="https://cityprotocol.co/cityid"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-sm font-semibold"
                >
                  City ID
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="https://city-protocol.gitbook.io/docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-sm font-semibold"
                >
                  Viral City
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="https://city-protocol.gitbook.io/docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-sm font-semibold"
                >
                  Totem Toy City
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="https://cooking.city/en"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-sm font-semibold"
                >
                  Cooking City
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="https://city-protocol.gitbook.io/docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-sm font-semibold"
                >
                  IP Strategy
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-10 py-2 text-base font-medium bg-transparent rounded-none hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent hover:text-current focus:text-current data-[state=open]:text-current focus-visible:ring-0 focus-visible:outline-none [&>svg]:hidden text-right justify-end w-[200px]">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!bg-[#87F5F5] text-[#193246] border-none shadow-none p-2 !rounded-none **:data-[slot=navigation-menu-link]:hover:bg-transparent **:data-[slot=navigation-menu-link]:focus:bg-transparent **:data-[slot=navigation-menu-link]:hover:text-current **:data-[slot=navigation-menu-link]:focus:text-current **:data-[slot=navigation-menu-link]:data-[active=true]:bg-transparent **:data-[slot=navigation-menu-link]:focus-visible:ring-0 **:data-[slot=navigation-menu-link]:focus-visible:outline-none">
            <div className="grid min-w-[165px] gap-1">
              <NavigationMenuLink asChild>
                <a
                  href="https://city-protocol.gitbook.io/docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-sm font-semibold"
                >
                  The Issuance Mandate
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="https://city-protocol.gitbook.io/docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-sm font-semibold"
                >
                  The AI Agentic Scaling Mandate
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="https://city-protocol.gitbook.io/docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-sm font-semibold"
                >
                  The IP RWA Mandate
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="https://city-protocol.gitbook.io/docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-sm font-semibold"
                >
                  The Creator Journey: From Zero To Empire
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-10 py-2 text-base font-medium bg-transparent rounded-none hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent hover:text-current focus:text-current data-[state=open]:text-current focus-visible:ring-0 focus-visible:outline-none [&>svg]:hidden !bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent !rounded-none text-right justify-end w-[200px]">
            Community
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!bg-[#87F5F5] text-[#193246] border-none shadow-none p-2 !rounded-none **:data-[slot=navigation-menu-link]:hover:bg-transparent **:data-[slot=navigation-menu-link]:focus:bg-transparent **:data-[slot=navigation-menu-link]:hover:text-current **:data-[slot=navigation-menu-link]:focus:text-current **:data-[slot=navigation-menu-link]:data-[active=true]:bg-transparent **:data-[slot=navigation-menu-link]:focus-visible:ring-0 **:data-[slot=navigation-menu-link]:focus-visible:outline-none">
            <div className="grid min-w-[165px] gap-1">
              <NavigationMenuLink asChild>
                <a
                  href="https://x.com/cityprotocolHQ"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-2 text-sm font-semibold"
                >
                  Twitter
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
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
        className="px-0 w-screen sm:w-screen md:rounded-l-xl bg-[#87F5F5]"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="px-5 pt-5 pb-8">
          <div className="flex text-[#193246] -ml-1.5 md:-ml-0 h-10 text-2xl font-bold items-end leading-6">
            <Logo />
          </div>
        </div>

        <nav className="pb-10">
          <ul>
            <li>
              <div className="px-5">
                <div className="text-xs tracking-widest text-[#193246]/70 font-semibold uppercase border-y-2 border-[#7F6CFF] py-3">
                  Solutions
                </div>
                <ul className="divide-y divide-transparent ">
                  <li >
                    <a  href="https://cityprotocol.co/cityid" target="_blank" rel="noreferrer" className="block py-3 text-xs font-semibold text-[#193246]">
                      City ID
                    </a>
                  </li>
                  <li>
                    <a href="https://city-protocol.gitbook.io/docs/" target="_blank" rel="noreferrer" className="block py-3 text-xs font-semibold text-[#193246]">
                      Viral City
                    </a>
                  </li>
                  <li>
                    <a href="https://city-protocol.gitbook.io/docs/" target="_blank" rel="noreferrer" className="block py-3 text-xs font-semibold text-[#193246]">
                      Totem Toy City
                    </a>
                  </li>
                  <li>
                    <a href="https://cooking.city/en" target="_blank" rel="noreferrer" className="block py-3 text-xs font-semibold text-[#193246]">
                      Cooking City
                    </a>
                  </li>
                  <li>
                    <a href="https://city-protocol.gitbook.io/docs/" target="_blank" rel="noreferrer" className="block py-3 text-xs font-semibold text-[#193246]">
                      IP Strategy
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="mt-6">
              <div className="px-5">
                <div className="text-xs tracking-widest text-[#193246]/70 font-semibold uppercase border-y-2 border-[#7F6CFF] py-3">
                  Resources
                </div>
                <ul>
                  <li>
                    <a href="https://city-protocol.gitbook.io/docs/" target="_blank" rel="noreferrer" className="block py-3 text-xs font-semibold text-[#193246]">
                      City Protocol Docs
                    </a>
                  </li>
                  <li>
                    <a href="https://city-protocol.gitbook.io/docs/" target="_blank" rel="noreferrer" className="block py-3 text-xs font-semibold text-[#193246]">
                      City Launchpad Docs
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="mt-6">
              <div className="px-5">
                <div className="text-xs tracking-widest text-[#193246]/70 font-semibold uppercase border-y-2 border-[#7F6CFF] py-3">
                  Community
                </div>
                <ul>
                  <li>
                    <a href="https://x.com/cityprotocolHQ" target="_blank" rel="noreferrer" className="block py-3 text-xs font-semibold text-[#193246]">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        {/* <div className="px-5 pb-5 pt-8">
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
        </div> */}
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  return (
    <div className="sticky inset-x-0 top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-10 py-2 md:border-b md:border-[#D4D4D8]">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="City Protocol home"
          className="inline-flex items-center gap-2"
        >
          <div className="flex text-[#193246] -ml-1.5 md:-ml-0 h-10 md:h-16 text-2xl font-bold items-end leading-6">
            <Logo />
          </div>
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </div>
  );
}
