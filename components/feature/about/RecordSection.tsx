import React from 'react';

const stats = [
  { 
    label: "Projects Completed", 
    value: "12+", 
    detail: "From conceptualizing initial schemas to deploying live applications, these represent a diverse portfolio of full-stack systems." 
  },
  { 
    label: "UI Components", 
    value: "150+", 
    detail: "Developed an extensive library of reusable, open-source UI components built with Next.js and Tailwind CSS for rapid development." 
  },
  { 
    label: "Design Tools", 
    value: "10+", 
    detail: "Leveraging a comprehensive suite of industry-standard design tools to bridge the gap between creative vision and implementation." 
  },
  { 
    label: "Clients", 
    value: "100+", 
    detail: "Empowering over 100 clients by delivering high-impact web solutions designed to accelerate startup growth and digital operations." 
  }, 
];

export default function RecordSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] md:text-[12px] text-[#00A3C2]/80 uppercase tracking-[0.2em] font-bold mb-2">
            By The Numbers
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-black tracking-tight mb-4">
            My <span className="text-[#00A3C2]/80">Journey</span> in Metrics
          </h2>
          <p className="text-text-dark-gray max-w-2xl text-base md:text-lg leading-relaxed">
            Tracking the technical breakthroughs and project milestones 
            that mark my progress as I scale digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="group flex flex-col p-8 rounded-2xl border border-border bg-text-greyish-cyan/20 dark:bg-text-greyish-cyan/10 hover:border-[#00A3C2]/40 transition-all duration-300 shadow-sm"
            >
              <span className="text-4xl md:text-5xl font-bold text-[#00A3C2]/80 mb-2 transition-transform duration-500 group-hover:scale-110">
                {stat.value}
              </span>
              
              <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-text-black mb-4 after:content-[''] after:block after:h-[2px] after:w-6 after:bg-[#00A3C2]/80 after:mt-1">
                {stat.label}
              </span>
              
              <p className="text-sm text-text-dark-gray leading-relaxed font-normal">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}