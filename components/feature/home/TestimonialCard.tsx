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
    <div className="relative flex flex-col gap-4 text-left">
      <Card className="border border-border bg-background/50 backdrop-blur-sm shadow-none rounded-[2rem] p-4 lg:p-8">
        <CardContent className="pt-6">
          <Quote className="w-10 h-10 text-text-cyan opacity-20 fill-text-cyan mb-4" />
          <p className="text-xl font-medium text-text-black leading-relaxed">
            {quote}
          </p>
        </CardContent>
      </Card>
      
      <div className="absolute -bottom-2 left-10 w-8 h-8 bg-background border-r border-b border-border rotate-45 -z-10" />

      <div className="flex items-center gap-3 px-6 mt-2">
        <Avatar className="w-12 h-12 border-2 border-primary shadow-sm">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-text-dark-gray text-white">
            {name?.charAt(0) || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-bold text-sm text-text-black">{name}</span>
          <span className="text-xs text-text-gray">{handle}</span>
        </div>
      </div>
    </div>
  )
}