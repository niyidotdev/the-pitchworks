import Social from "../assets/icons/social.svg?react";
import Design from "../assets/icons/design.svg?react";
import Content from "../assets/icons/content.svg?react";
import Dev from "../assets/icons/dev.svg?react";
import Seo from "../assets/icons/seo.svg?react";
import Brand from "../assets/icons/brand.svg?react";

export const marqueeServices = [
  "Social Media Management",
  "Brand Design",
  "Content Writing",
  "UI/UX Design",
  "Website Development",
];

export const stats = [
  { number: "07", symbol: "+", label: "Years of Experience" },
  { number: "150", symbol: "+", label: "Projects Completed" },
  { number: "100", symbol: "%", label: "Client Satisfaction" },
];

export const services = [
  {
    icon: <Social />,
    title: "Social Media Management",
    description:
      "We manage your social media presence, creating engaging content, running campaigns, and analyzing performance to grow your brand.",
  },
  {
    icon: <Brand />,
    title: "Brand Design",
    description:
      "We create compelling brand identities that resonate with your audience and set you apart from the competition.",
  },
  {
    icon: <Dev />,
    title: "Web Development",
    description:
      "We build responsive, fast, and user-friendly websites that convert visitors into customers and drive business growth.",
  },
  {
    icon: <Content />,
    title: "Content Strategy",
    description:
      "We develop content strategies that engage your audience, build trust, and drive meaningful interactions with your brand.",
  },
  {
    icon: <Seo />,
    title: "SEO Optimization",
    description:
      "We optimize your online presence to improve search rankings, increase visibility, and attract more qualified leads.",
  },
  {
    icon: <Design />,
    title: "UI/UX Design",
    description:
      "We design intuitive user experiences that delight users and make your digital products easy to use and navigate.",
  },
];

export const portfolioFilters = [
  "All",
  "Web Design",
  "App Design",
  "Branding",
  "Marketing",
];

export const portfolioProjects = [
  {
    title: "SaaS Dashboard Website",
    category: "Web Design",
    image: "/images/portfolio-saas-dashboard.jpg",
    description:
      "A conversion-focused marketing site for a B2B SaaS platform, designed to clearly explain features and drive demo bookings.",
    tags: ["Landing Page", "UI/UX", "Webflow"],
  },
  {
    title: "Wellness Mobile App UI",
    category: "App Design",
    image: "/images/portfolio-wellness-app.jpg",
    description:
      "Mobile app interface for a wellness brand with calming visuals, habit tracking flows, and clear onboarding.",
    tags: ["iOS", "Product Design", "Prototyping"],
  },
  {
    title: "E-commerce Brand Refresh",
    category: "Branding",
    image: "/images/portfolio-ecommerce-brand.jpg",
    description:
      "Complete visual identity refresh for a fashion e-commerce brand, including logo, palette, and social templates.",
    tags: ["Logo", "Identity System", "Guidelines"],
  },
  {
    title: "Performance Marketing Funnel",
    category: "Marketing",
    image: "/images/portfolio-marketing-funnel.jpg",
    description:
      "Multi-channel campaign funnel with optimized landing pages and email sequences to improve lead quality.",
    tags: ["Paid Ads", "Email", "CRO"],
  },
  {
    title: "Creative Studio Portfolio Site",
    category: "Web Design",
    image: "/images/portfolio-creative-studio.jpg",
    description:
      "Portfolio site for a creative studio highlighting case studies with strong visuals and storytelling.",
    tags: ["Case Studies", "Responsive", "Animations"],
  },
  {
    title: "Founder Personal Brand Kit",
    category: "Branding",
    image: "/images/portfolio-personal-brand.jpg",
    description:
      "Personal brand system for a founder including typography, color system, and social media post templates.",
    tags: ["Personal Brand", "Social", "Templates"],
  },
];

export const testimonials = [
  {
    quote:
      "PitchWorks helped us create a stunning website that perfectly represents our brand. We couldn't be happier with the results.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
  },
  {
    quote:
      "Their social media management transformed our online presence. Our engagement has increased by 300% in just three months.",
    name: "Michael Chen",
    title: "Founder, Creative Studio",
  },
  {
    quote:
      "The team's attention to detail and creative approach exceeded our expectations. Highly recommend their services.",
    name: "Emily Rodriguez",
    title: "Marketing Director, Growth Co.",
  },
  {
    quote:
      "PitchWorks delivered a complete brand redesign that elevated our business. Professional, efficient, and results-driven.",
    name: "David Thompson",
    title: "Owner, Thompson Design",
  },
];
