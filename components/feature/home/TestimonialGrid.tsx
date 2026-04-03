import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { TestimonialCard } from "./TestimonialCard"
import { testimonials } from "@/constants/testimonial" 

export function TestimonialSection() {
  return (
    <section className="relative py-24 px-6 md:px-20 max-w-7xl mx-auto text-center overflow-hidden">
      <span className="text-text-gray text-sm font-medium uppercase tracking-[0.2em]">
        Testimonials
      </span>
      
      <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-16 text-text-black tracking-tight">
        Trusted by <span className="text-text-cyan">Visionary</span> Founders
      </h2>
      
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
        
        <div className="flex justify-center items-center gap-3 mt-16">
          <div className="h-1.5 w-10 rounded-full bg-primary transition-all" />
          <div className="h-1.5 w-3 rounded-full bg-border hover:bg-text-gray transition-colors cursor-pointer" />
          <div className="h-1.5 w-3 rounded-full bg-border hover:bg-text-gray transition-colors cursor-pointer" />
        </div>
      </Carousel>

      <div className="absolute -top-24 -right-24 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
    </section>
  )
}