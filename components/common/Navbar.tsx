"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import profilePic from "@/assets/images/parola-selfie-pfp.jpg";
import { NAV_LINKS } from "@/constants/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        inter.className,
        "sticky top-0 z-50 w-[95%] max-w-7xl mx-auto mt-5 rounded-full",
        "backdrop-blur-md border border-[#00A3C2]/20 bg-gray-900/40 text-white py-2 px-4",
      )}
    >
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link href="/" className="flex gap-3 items-center group">
          <Avatar className="h-10 w-10 border border-[#00A3C2]/50">
            <AvatarImage src={profilePic.src} alt="Jashen Loberanes" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight">
              Jashen Loberanes
            </span>
            <span className="text-[10px] text-[#00A3C2]/80 uppercase tracking-wider">
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
                    <Link href={link.href} className="contents">
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2 hover:bg-white/5",

                          isActive
                            ? 
                              "bg-white/4 text-[#00A3C2] border-[#00A3C2]"
                            : 
                              "bg-transparent border-transparent text-zinc-400 hover:text-[#00A3C2] hover:border-white/3",
                        )}  
                      >
                        <span>{link.label}</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="rounded-full px-6 bg-[#00A3C2] hover:bg-[#00A3C2]/90 text-white text-xs font-bold uppercase tracking-widest transition-all active:scale-95">
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
}
