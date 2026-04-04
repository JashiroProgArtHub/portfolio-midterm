import React from "react";
import Image from "next/image";
import Photo from "@/public/parola=selfie=pfp.jpg";
import Background from "@/public/bg-building.jpg";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiGit,
  SiPostman,
} from "react-icons/si";

const tools = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Git", icon: <SiGit /> },
  { name: "REST APIs", icon: <SiPostman /> },
];

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-background text-foreground px-6 md:px-20 py-16 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative h-40 md:h-52 w-full overflow-hidden rounded-xl border border-darkblue shadow-lg">
          <Image
            src={Background}
            alt="Banner"
            className="object-cover w-full h-full grayscale-[20%] brightness-75"
          />
          <div className="absolute inset-0 bg-gray-40 backdrop-blur-[2px]"></div>
        </div>

        <div className="px-8 -mt-14 md:-mt-20 flex items-end space-x-2">
          <div className="relative group">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-background shadow-shadow">
              <Image
                src={Photo}
                alt="Jashen Loberanes"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="pb-2">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-text-black">
              Jashen Loberanes
            </h1>
            <p className="text-[10px] md:text-[12px] text-[#00A3C2]/80 uppercase tracking-wider">
              Web Designer
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className=" border border-border rounded-2xl p-6 shadow-sm bg-text-greyish-cyan/20 dark:bg-text-greyish-cyan/10">
          <h3 className="relative text-lg font-semibold mb-4 text-[#00A3C2]/80 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-10 after:bg-[#00A3C2]/80">
            About
          </h3>
          <p className="text-text-dark-gray leading-relaxed">
            I build scalable web applications and clean UI systems focused on
            performance and business results. I specialize in modern stacks like
            Next.js and design systems that are easy to maintain and grow.
          </p>
        </div>
        <div className="border border-border rounded-2xl p-6 shadow-sm bg-text-greyish-cyan/20 dark:bg-text-greyish-cyan/10">
          <h3 className="relative text-lg font-semibold mb-4 text-[#00A3C2]/80 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-10 after:bg-[#00A3C2]/80">
            Demographic Profile
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-text-dark-gray/60 font-bold">
                Location
              </span>
              <p className="text-text-dark-gray">Poblacion, Cordova, Cebu</p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-text-dark-gray/60 font-bold">
                Age / Gender
              </span>
              <p className="text-text-dark-gray">28, Male</p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-text-dark-gray/60 font-bold">
                Language
              </span>
              <p className="text-text-dark-gray">
                English, Cebuano, Tagalog, Japanese
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-text-dark-gray/60 font-bold">
                Occupation
              </span>
              <p className="text-text-dark-gray">Software Engineer</p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="/resume.pdf"
              download
              className="text-sm font-medium text-[#00A3C2]/80 hover:text-[#00A3C2] flex items-center gap-1.5 transition-colors"
            >
              Download Professional Resume
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        <div className="border border-border rounded-2xl p-6 shadow-sm bg-text-greyish-cyan/10">
          <h3 className="relative text-lg font-semibold mb-4 text-[#00A3C2]/80 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-10 after:bg-[#00A3C2]/80">
            Core Toolkit
          </h3>

          <div className="grid grid-cols-4 gap-4 p-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group relative flex flex-col items-center"
              >
                {/* The Icon Container */}
                <div className="p-3 bg-muted rounded-xl hover:bg-primary/10 transition-colors cursor-help text-2xl">
                  {tool.icon}
                </div>

                {/* The Tooltip - Shows on Group Hover */}
                <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center">
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-gray-900 shadow-lg rounded-md">
                    {tool.name}
                  </span>
                  {/* Small Triangle/Arrow */}
                  <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-900"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
