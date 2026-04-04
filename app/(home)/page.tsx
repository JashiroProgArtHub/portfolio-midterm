import HeroSection from "@/components/feature/home/HeroSection"
import {TestimonialSection} from "@/components/feature/home/TestimonialGrid"
import {ServicesSection} from "@/components/feature/home/ServiceSection"
import {CTASection} from "@/components/feature/home/CTASection"

export default function Homepage(){
    return(
        <>
        <HeroSection/>
        <TestimonialSection/>
        <ServicesSection/>
        <CTASection/>
        </>
    )
}