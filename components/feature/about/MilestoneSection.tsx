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
    <div className="max-w-7xl mx-auto my-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-3xl font-bold leading-tight">
          Building a Better Way to{" "}
          <span className="text-[#00A3C2]">Innovate</span>, One Milestone at a
          Time.
        </h2>
        <p className="mt-4 text-text-dark-gray leading-relaxed">
          From classroom projects to developing real-world management systems,
          here is how my technical journey has evolved.
        </p>
      </div>

      <div className="relative border-l-2 border-[#00A3C2]/20 ml-4 md:ml-0 pl-8 space-y-12">
        {milestones.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#00A3C2] border-4 border-background shadow-[0_0_10px_#00A3C2]" />

            <span className="text-sm font-bold text-[#00A3C2] tracking-widest">
              {item.year}
            </span>
            <h4 className="text-xl font-bold mt-1">{item.title}</h4>
            <p className="text-text-dark-gray mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
