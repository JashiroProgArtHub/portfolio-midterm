const stats = [
  { 
    label: "Projects Completed", 
    value: "12+", 
    detail: "From conceptualizing initial schemas to deploying live applications, these 12+ projects represent a diverse portfolio of full-stack systems." 
  },
  { 
    label: "UI Components", 
    value: "150+", 
    detail: "Developed an extensive library of 150+ reusable, open-source UI components built with Next.js and Tailwind CSS for rapid development." 
  },
  { 
    label: "Design Tools", 
    value: "10+", 
    detail: "Leveraging a comprehensive suite of over 10 industry-standard design tools to bridge the gap between creative vision and technical implementation." 
  },
  { 
    label: "Clients", 
    value: "100+", 
    detail: "Empowering over 100 clients by delivering high-impact web solutions designed to accelerate startup growth and digital operations." 
  }, 
];

export default function RecordSection() {
  return (
    <section className="py-24 px-4 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-black mb-4 tracking-tight">
          My Journey by the Numbers
        </h2>
        <p className="text-text-gray mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Tracking the key metrics, technical breakthroughs, and project milestones 
          that mark my progress as I level up as a developer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="flex flex-col items-center p-8 rounded-xl border border-border bg-muted/30 dark:bg-accent/5 hover:border-primary/50 transition-all duration-300 group bg-text-greyish-cyan/20"
            >
              <span className="text-4xl font-black text-primary mb-2 transition-transform group-hover:scale-110">
                {stat.value}
              </span>
              
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-text-dark-gray mb-4">
                {stat.label}
              </span>
              
              <p className="text-sm text-text-gray leading-relaxed text-center font-medium">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}