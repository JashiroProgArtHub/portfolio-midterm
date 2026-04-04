export type BlogPost = {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Design Systems for Product Teams",
    description: "A practical guide to building scalable, accessible design systems.",
    date: "April 4, 2026",
    category: "Design",
    slug: "design-systems/how-to-build-a-token-library",
    content: `Design systems help teams ship faster by creating reusable patterns, shared tokens, and component libraries. This article covers how to structure your system, work with designers and developers, and keep documentation tidy.`,
  },
  {
    title: "UX Research for Landing Pages",
    description: "How to validate assumptions and optimize conversion with research-led design.",
    date: "March 28, 2026",
    category: "UX",
    slug: "ux-research-for-landing-pages",
    content: `Good landing pages start with evidence. Learn how to run lightweight interviews, analyze user behavior, and turn findings into a landing page that resonates with your audience.`,
  },
  {
    title: "Branding with Minimalism",
    description: "Creating a bold brand identity with a clean, minimal visual system.",
    date: "March 18, 2026",
    category: "Branding",
    slug: "branding/minimalist-visual-systems",
    content: `Minimalist branding is not about removing everything; it's about choosing the right details. In this post, we explore typography, spacing, and motion choices that keep a brand strong and memorable.`,
  },
  {
    title: "Motion Design in UI",
    description: "Using motion to make digital products feel intuitive and premium.",
    date: "February 14, 2026",
    category: "Motion",
    slug: "motion-design-in-ui",
    content: `Motion can guide attention, delight users, and make interactions feel more natural. This article explains when to use motion, how much is enough, and which animations help rather than distract.`,
  },
];
