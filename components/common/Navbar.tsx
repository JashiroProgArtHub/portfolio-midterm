"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Inter } from 'next/font/google'
import Image from 'next/image'
import {usePathname} from "next/navigation";
import profilePic from "@/assets/images/parola-selfie-pfp.jpg"
import {NAV_LINKS} from "@/constants/navigation"


const inter = Inter({ subsets: ['latin'] })


export default function Navbar() {
    const pathname = usePathname();
  return (
    <header className={`${inter.className} sticky top-0 z-50 w-[90%] mx-auto mt-5 rounded-full backdrop-blur-md border-b border-[#00A3C2]/80 bg-gray-800/30 text-white py-2`}>
      <div className="container mx-auto flex h-14 items-center justify-between px-10">
        
        <Link href="/" className="flex gap-4 items-center justify-center">
        <Image src={profilePic} width={45} height={45} alt="profile" className="rounded-full"/>
        <div className="flex flex-col">
          <span className="text-l font-semibold tracking-tight">Jashen Loberanes</span>
          <span className="text-xs text-[#00A3C2]/80">Web Designer</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-24 text-sm font-medium text-zinc-400 p-2">
        <nav className="flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
            key={link.href}
            href={link.href}
            className={`${pathname === link.href ? "text-[#00A3C2]" : "text-[#A0AEC0}"} hover:text-white transition-all duration-300`}
            >
            {link.label}
            </Link>
          ))}
        </nav>
        <Button className="rounded-2 px-6 bg-[#00A3C2] hover:bg-[#00A3C2]/80 text-xs font-bold tracking-widest uppercase transition-transform transition-all duration-300 active:scale-95">
        Get in Touch
        </Button>
        </div>

      </div>
    </header>
  )
}