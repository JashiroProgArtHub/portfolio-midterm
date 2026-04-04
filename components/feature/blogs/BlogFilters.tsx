"use client"

import { useState, useTransition } from "react"
import { usePathname, useRouter } from "next/navigation"
import { blogPosts } from "@/constants/blogs"
import { Search, X, RotateCcw } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

const categories = ["All", ...new Set(blogPosts.map((b) => b.category))]

const dates = blogPosts.map((b) => {
  const d = new Date(b.date)
  return {
    year: d.getFullYear().toString(),
    month: String(d.getMonth() + 1).padStart(2, "0"),
    day: String(d.getDate()).padStart(2, "0"),
    label: d.toDateString(),
  }
})

const uniqueDates = Array.from(
  new Map(dates.map((d) => [`${d.year}-${d.month}-${d.day}`, d])).values()
)

export default function BlogFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [, startTransition] = useTransition()

  
  let activeCategory = "All"
  const categoryMatch = pathname?.match(/^\/blogs\/category\/(.+)$/)
  if (categoryMatch) {
    const rawCategory = decodeURIComponent(categoryMatch[1]).toLowerCase()
    const matchedCategory = categories.find(
      (cat) => cat.toLowerCase() === rawCategory
    )
    activeCategory = matchedCategory ?? "All"
  }

  let activeDate = ""
  const dateMatch = pathname?.match(/^\/blogs\/date\/(.+)$/)
  if (dateMatch) {
    activeDate = dateMatch[1]
  }

  const handleCategoryClick = (cat: string) => {
    startTransition(() => {
      if (cat === "All") {
        router.push("/blogs")
      } else {
        router.push(`/blogs/category/${encodeURIComponent(cat.toLowerCase())}`)
      }
    })
  }

  const handleDateChange = (value: string) => {
    startTransition(() => {
      router.push(`/blogs/date/${value}`)
    })
  }

  const handleReset = () => {
    setSearchQuery("")
    startTransition(() => router.push("/blogs"))
  }

  return (
    <div className="flex flex-col gap-8 mb-12 max-w-7xl mx-auto px-4">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        <div className="flex flex-wrap gap-2 order-2 md:order-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.1em] transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#00A3C2]/10 border-[#00A3C2]/50 text-[#00A3C2]"
                  : "bg-transparent border-border text-muted-foreground/60 hover:border-[#00A3C2]/30"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-xs order-1 md:order-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00A3C2]/60" />
          <Input
            placeholder="Search blogs..."
            className="pl-11 pr-10 h-11 rounded-xl bg-[#00A3C2]/5 border-border focus-visible:ring-[#00A3C2]/40 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/40 hover:text-[#00A3C2]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 border-t border-border pt-6">
        <Select onValueChange={handleDateChange} value={activeDate}>
          <SelectTrigger
            className={`w-52 h-10 rounded-lg text-xs font-semibold transition-colors focus:ring-0 focus:ring-offset-0 ${
              activeDate
                ? "bg-[#00A3C2]/10 border-[#00A3C2]/50 text-[#00A3C2]"
                : "bg-transparent border-border text-muted-foreground hover:border-[#00A3C2]/30"
            }`}
          >
            <SelectValue  placeholder="FILTER BY DATE" />
          </SelectTrigger>

          <SelectContent className="bg-background/95 backdrop-blur-md border-[#00A3C2]/20 shadow-xl">
            <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#00A3C2]/60">Years</div>
            {[...new Set(dates.map((d) => d.year))].map((year) => (
              <SelectItem key={year} value={year} className="focus:bg-[#00A3C2]/10 focus:text-[#00A3C2] text-xs">
                {year}
              </SelectItem>
            ))}
            <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#00A3C2]/60 border-t border-border mt-1">Full Dates</div>
            {uniqueDates.map((d) => (
              <SelectItem
                key={`${d.year}-${d.month}-${d.day}`}
                value={`${d.year}/${d.month}/${d.day}`}
                className="focus:bg-[#00A3C2]/10 focus:text-[#00A3C2] text-xs"
              >
                {d.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="ghost"
          onClick={handleReset}
          className="text-muted-foreground hover:text-[#00A3C2] hover:bg-transparent flex items-center gap-2 group text-xs font-bold uppercase tracking-wider"
        >
          <RotateCcw className="w-3.5 h-3.5 group-hover:-rotate-45 transition-transform" />
          Reset
        </Button>
      </div>
    </div>
  )
}