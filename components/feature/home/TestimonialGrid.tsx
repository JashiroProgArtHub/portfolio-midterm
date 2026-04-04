import { TestimonialCard } from "./TestimonialCard"
import { testimonials } from "@/constants/testimonial" 

export function TestimonialSection() {
  return (
    <section className="relative py-24 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-16">
        <p className="text-[10px] md:text-[12px] text-[#00A3C2]/80 uppercase tracking-wider mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-text-black tracking-tight">
          Trusted by <span className="text-[#00A3C2]/80">Visionary</span> Founders
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <TestimonialCard 
            key={i}
            quote={t.quote}
            name={t.author}
            handle={t.handle}
            image={t.avatarUrl}
          />
        ))}
      </div>

      <div className="absolute -top-24 -right-24 -z-10 w-96 h-96 bg-[#00A3C2]/5 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 -z-10 w-72 h-72 bg-[#00A3C2]/5 blur-[100px] rounded-full" />
    </section>
  )
}