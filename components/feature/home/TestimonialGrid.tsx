import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { TestimonialCard } from "./TestimonialCard"
import { testimonials } from "@/constants/testimonial" 

export function TestimonialSection() {
  return (
    <section className="relative py-24 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header - Left Aligned to match About/Services */}
      <div className="mb-16">
        <p className="text-[10px] md:text-[12px] text-[#00A3C2]/80 uppercase tracking-wider mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-text-black tracking-tight">
          Trusted by <span className="text-[#00A3C2]/80">Visionary</span> Founders
        </h2>
      </div>
      
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard 
                quote={t.quote}
                name={t.author}
                handle={t.handle}
                image={t.avatarUrl}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Pagination Indicators - Styled with brand Teal */}
        <div className="flex justify-center items-center gap-3 mt-16">
          <div className="h-1.5 w-10 rounded-full bg-[#00A3C2]/80 transition-all shadow-sm" />
          <div className="h-1.5 w-3 rounded-full bg-border hover:bg-[#00A3C2]/40 transition-colors cursor-pointer" />
          <div className="h-1.5 w-3 rounded-full bg-border hover:bg-[#00A3C2]/40 transition-colors cursor-pointer" />
        </div>
      </Carousel>

      {/* Background Glow - Adjusted to match the soft cyan/teal accents */}
      <div className="absolute -top-24 -right-24 -z-10 w-96 h-96 bg-[#00A3C2]/5 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 -z-10 w-72 h-72 bg-[#00A3C2]/5 blur-[100px] rounded-full" />
    </section>
  )
}