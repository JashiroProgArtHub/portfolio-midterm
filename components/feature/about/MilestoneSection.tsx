import React from 'react';

const milestones = [
  {
    year: "2024",
    title: "Foundations & Design Systems",
    desc: "Acquired specialized certifications in Full-Stack Development, strategically prioritizing UI/UX design principles to create intuitive, user-centric web interfaces.",
  },
  {
    year: "2025",
    title: "Collaborative Growth",
    desc: "Achieved advanced design credentials through the delivery of high-impact web projects and transitioned into collaborative team environments to build scalable digital solutions.",
  },
  {
    year: "2026",
    title: "Design Innovation",
    desc: "Serving as the Lead Web Designer for SocratAI and SysGems, bridging the gap between complex technical architecture and seamless, high-fidelity user experiences.",
  },
];

export default function MilestoneSection() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      {/* Left Content - Matching Section Header Style */}
      <div className="space-y-4">
        <p className="text-[10px] md:text-[12px] text-[#00A3C2]/80 uppercase tracking-[0.2em] font-bold">
          My Journey
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-text-black leading-tight tracking-tight">
          Building a Better Way to <br />
          <span className="text-[#00A3C2]/80">Innovate</span>, One Milestone at a
          Time.
        </h2>
        <p className="max-w-md text-text-dark-gray leading-relaxed">
          From classroom projects to developing real-world management systems,
          here is how my technical journey has evolved into high-end digital solutions.
        </p>
      </div>

      {/* Right Content - Timeline with Glassmorphic Elements */}
      <div className="relative border-l-2 border-[#00A3C2]/20 ml-4 md:ml-0 pl-10 space-y-10">
        {milestones.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* The Animated Node matching your About Section shadow style */}
            <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full bg-[#00A3C2]/80 border-4 border-background shadow-shadow transition-transform duration-300 group-hover:scale-125" />

            {/* Inner Content Card for scannability */}
            <div className="p-6 rounded-2xl border border-transparent hover:border-border hover:bg-text-greyish-cyan/20 dark:hover:bg-text-greyish-cyan/10 transition-all duration-300">
              <span className="text-[12px] font-bold text-[#00A3C2]/80 tracking-widest uppercase">
                {item.year}
              </span>
              <h4 className="text-xl font-bold mt-1 text-text-black group-hover:text-[#00A3C2] transition-colors">
                {item.title}
              </h4>
              <p className="text-text-dark-gray mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}