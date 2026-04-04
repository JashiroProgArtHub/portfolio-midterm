import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

interface TestimonialProps {
  quote: string
  name: string
  handle: string
  image: string
}

export function TestimonialCard({ quote, name, handle, image }: TestimonialProps) {
  return (
    <div className="relative flex flex-col gap-4 text-left group">
      {/* Main Card - Styled with your glassmorphism and border colors */}
      <Card className="border border-border bg-text-greyish-cyan/20 dark:bg-text-greyish-cyan/10 backdrop-blur-md shadow-sm rounded-2xl p-4 lg:p-6 transition-all duration-300 group-hover:border-[#00A3C2]/40">
        <CardContent className="pt-4">
          {/* Quote Icon using your brand accent color */}
          <Quote className="w-8 h-8 text-[#00A3C2]/80 fill-[#00A3C2]/10 mb-4 opacity-60" />
          
          <p className="text-lg font-medium text-text-black leading-relaxed tracking-tight">
            "{quote}"
          </p>
        </CardContent>
      </Card>
      
      {/* Speech Bubble Tail - Color matched to card background */}
      <div className="absolute -bottom-2 left-12 w-6 h-6 bg-[#f4fbfc] dark:bg-[#1a2b2e] border-r border-b border-border rotate-45 -z-10" />

      {/* User Info Section */}
      <div className="flex items-center gap-3 px-8 mt-2">
        <Avatar className="w-12 h-12 border-2 border-[#00A3C2]/80 shadow-shadow transition-transform duration-300 group-hover:scale-105">
          <AvatarImage src={image} alt={name} className="object-cover" />
          <AvatarFallback className="bg-text-dark-gray text-white">
            {name?.charAt(0) || "U"}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex flex-col">
          <span className="font-bold text-sm text-text-black tracking-tight">
            {name}
          </span>
          {/* Sub-label using your brand cyan sub-header style */}
          <span className="text-[10px] text-[#00A3C2]/80 uppercase tracking-wider font-medium">
            {handle}
          </span>
        </div>
      </div>
    </div>
  )
}