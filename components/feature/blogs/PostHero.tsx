import Link from "next/link";

interface PostHeroProps {
  title: string;
  category: string;
  date: string;
  description: string;
}

export const PostHero = ({ title, category, date, description }: PostHeroProps) => (
  <header className="pt-32 pb-16 px-6 border-b border-border bg-gradient-to-b from-secondary/10 to-transparent">
    <div className="max-w-4xl mx-auto">
      <Link href="/blogs" className="text-sm font-medium text-[#00A3C2] hover:opacity-70 transition-opacity">
        ← Back to all writing
      </Link>
      
      <div className="mt-8 flex items-center gap-3">
        <span className="px-3 py-1 rounded-full bg-[#00A3C2]/10 border border-[#00A3C2]/20 text-[#00A3C2] text-[10px] font-bold uppercase tracking-widest">
          {category}
        </span>
        <span className="text-sm text-muted-foreground">{date}</span>
      </div>

      <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
        {title}
      </h1>
      <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
        {description}
      </p>
    </div>
  </header>
);