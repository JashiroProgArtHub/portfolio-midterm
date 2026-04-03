"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { Menu } from "lucide-react"; 
import {ThemeToggle} from "@/components/ui/theme-toggle"

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import profilePic from "@/assets/images/parola-selfie-pfp.jpg";
import { NAV_LINKS } from "@/constants/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header
      className={cn(
        inter.className,
        "sticky top-5 z-50 w-[95%] max-w-7xl mx-auto rounded-full",
        "backdrop-blur-md border border-darkblue text-text-black py-2 px-4 md:px-6 shadow-lg shadow-primary/4",
      )}
    >
      <div className="flex h-12 md:h-14 items-center justify-between">
        <Link
          href="/"
          className="flex gap-2 md:gap-3 items-center group shrink-0"
        >
          <Avatar className="h-8 w-8 md:h-10 md:w-10 border border-blue">
            <AvatarImage src={profilePic.src} alt="Jashen Loberanes" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div className="flex flex-col leading-tight">
            <span className="text-xs md:text-sm font-bold tracking-tight whitespace-nowrap">
              Jashen Loberanes
            </span>
            <span className="text-[9px] md:text-[10px] text-[#00A3C2]/80 uppercase tracking-wider">
              Web Designer
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2 hover:bg-white/5",
                          isActive
                            ? "bg-white/10 text-[#00A3C2] border-[#00A3C2]"
                            : "bg-transparent border-transparent text-zinc-400 hover:text-[#00A3C2] hover:border-white/3",
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
                ``;
              })}
              <ThemeToggle/>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="rounded-full px-6 bg-[#00A3C2] hover:bg-[#00A3C2]/90 text-white text-xs font-bold uppercase tracking-widest transition-all active:scale-95">
            Get in Touch
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/50 rounded-full"
              >
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={cn(
                inter.className,
                "bg-gray-900 border-[#00A3C2]/20 text-white w-[280px] py-2 px-6",
              )}
            >
              <SheetHeader className="text-left flex gap-2 flex-row md:gap-3 group shrink-0 items-center border-b border-white/10 my-2">
                <Avatar className="h-10 w-10 md:h-10 md:w-10 border border-[#00A3C2]/50">
                  <AvatarImage src={profilePic.src} alt="Jashen Loberanes" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="flex flex-col leading-tight">
                <SheetTitle className="text-white text-sm font-bold tracking-tight whitespace-nowrap">Jashen Loberanes</SheetTitle>
                <SheetDescription className="text-[10px]  text-[#00A3C2]/80 uppercase tracking-wider">
                  Web Designer.
                </SheetDescription>
                </div>
              </SheetHeader>

              <nav className="flex flex-col gap-4 mt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium px-4 py-2 rounded-lg transition-colors",
                      pathname === link.href
                        ? "text-[#00A3C2] bg-white/5"
                        : "text-zinc-400 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="border-white/10 my-2" />
                <Button
                  className="w-full rounded-10 bg-[#00A3C2] hover:bg-[#00A3C2]/90 mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
