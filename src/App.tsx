import { useState } from "react";
import Navbar from "./components/navbar";
import Sparkle from "./assets/icons/sparkle.svg?react";
import Marquee from "react-fast-marquee";
import {
  marqueeServices,
  stats,
  services,
  portfolioFilters,
  portfolioProjects,
  testimonials,
} from "./data/mockData";

function App() {
  const [activePortfolioFilter, setActivePortfolioFilter] = useState("All");

  const filteredPortfolioProjects =
    activePortfolioFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activePortfolioFilter,
        );

  return (
    <section className="overflow-x-hidden">
      <div
        id="hero"
        className="bg-[url('/images/hero-bg-blur.png')] bg-contain bg-no-repeat px-6 md:px-8"
      >
        <Navbar />

        {/* Hero section */}
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 pt-32 pb-12 md:grid-cols-2 md:pt-10 md:pb-16">
          <div>
            <div className="flex max-w-fit items-center gap-2 rounded-full border-white/10 bg-[linear-gradient(153.09deg,rgba(255,255,255,0.12)_16.83%,rgba(255,255,255,0.08)_85.44%)] px-4 py-2 text-sm shadow-lg ring-1 ring-black/5 backdrop-blur-lg">
              <Sparkle className="size-4 fill-[#9D86FF] text-[#9D86FF]" />
              Available For Work
            </div>
            <h1 className="mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl">
              Your Creative Partner Helping Businesses Scale With Confidence.
            </h1>
            <p className="my-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              We create websites, content, designs, and marketing solutions
              tailored to your brand’s goals.
            </p>
            <div className="flex gap-4">
              <button className="text-pitch-deep transform cursor-pointer rounded-full bg-white px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105">
                Let's Talk
              </button>
              <button className="transform cursor-pointer rounded-full bg-[linear-gradient(153.09deg,rgba(255,255,255,0.12)_16.83%,rgba(255,255,255,0.08)_85.44%)] px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105">
                Our Works
              </button>
            </div>
          </div>
          <div className="w-full">
            <img
              src="/images/hero.png"
              alt="hero image"
              fetchPriority="high"
              className="w-full"
            />
          </div>
        </section>
      </div>

      {/* Services */}
      <div className="bg-linear-to-b from-[#9D86FF] to-[#7D52FD] py-2">
        <div className="flex w-full overflow-hidden bg-white py-4 whitespace-nowrap">
          <Marquee autoFill pauseOnHover>
            {marqueeServices.map((service, idx) => (
              <div
                key={idx}
                className="text-pitch-deep flex shrink-0 items-center gap-2 px-10 text-base"
              >
                <Sparkle className="size-4 fill-[#9D86FF] text-[#9D86FF]" />
                {service}
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* About */}
      <section id="about" className="relative px-6 py-16 sm:py-20 md:px-8">
        {/* LEFT HALF CIRCLE */}
        <div className="pointer-events-none absolute top-1/2 -left-80 h-100 w-100 -translate-y-1/2 rounded-full bg-[#7D52FD] blur-[200px]" />
        {/* RIGHT HALF CIRCLE */}
        <div className="pointer-events-none absolute top-1/2 -right-80 hidden h-100 w-100 -translate-y-1/2 rounded-full bg-[#7D52FD] blur-[200px] md:block" />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Image */}
            <div className="place-self-center">
              <img
                src="/images/about.png"
                width={360}
                height={360}
                alt="lady holding laptop"
              />
            </div>
            {/* Content */}
            <div>
              <h2 className="mb-6 text-4xl font-bold text-[#9D86FF]">
                ABOUT US
              </h2>
              <p className="mb-6 text-base leading-relaxed sm:text-lg">
                Pitchworks is a creative agency that partners with businesses to
                make their brand visible by the right audience. We offer
                services in website development, content writing, design,
                marketing, and social media management, all tailored to your
                goals.
              </p>
            </div>
          </div>
          {/* Stats Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#FFFFFF1F] bg-[#FFFFFF14] p-8 text-center shadow-lg"
              >
                <p className="mb-2 text-4xl font-bold text-white">
                  {stat.number}
                  <span className="text-[#9D86FF]">{stat.symbol}</span>
                </p>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialities */}
      <section id="services" className="px-6 py-16 sm:py-20 md:px-8 lg:py-24">
        <div className="container mx-auto bg-[url('/images/eclipse-bg.png')] bg-contain bg-center bg-no-repeat">
          {/* Section Header */}
          <p className="mb-6 text-center text-sm font-semibold tracking-wider text-[#9D86FF] uppercase">
            Services
          </p>

          <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            Our Specialities
          </h2>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#FFFFFF1F] bg-[#FFFFFF14] p-6 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects/Portfolio */}
      <section
        id="portfolio"
        className="bg-pitch-deep px-6 py-16 sm:py-20 md:px-8 lg:py-24"
      >
        <div className="container mx-auto">
          {/* Section Header */}
          <p className="mb-6 text-center text-sm font-semibold tracking-wider text-[#9D86FF] uppercase">
            Portfolio
          </p>

          <h2 className="mx-auto mb-8 max-w-3xl text-center text-4xl font-bold text-white md:text-5xl">
            Projects that reflect our expertise and vision
          </h2>

          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {portfolioFilters.map((filter, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePortfolioFilter(filter)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activePortfolioFilter === filter
                    ? "text-pitch-deep bg-white shadow-lg shadow-black/20"
                    : "bg-[linear-gradient(153.09deg,rgba(255,255,255,0.12)_16.83%,rgba(255,255,255,0.08)_85.44%)] text-white/80 backdrop-blur-lg hover:text-white hover:shadow-lg hover:shadow-black/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPortfolioProjects.map((project, idx) => (
              <article
                key={`${project.title}-${idx}`}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#FFFFFF1F] bg-[#FFFFFF0F] shadow-lg shadow-black/20 backdrop-blur-lg"
              >
                <div className="relative h-40 w-full bg-linear-to-tr from-[#9D86FF]/50 via-[#7D52FD]/30 to-[#9D86FF]/10">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="inline-flex items-center rounded-full bg-black/30 px-3 py-1 text-xs font-semibold tracking-wide text-white/90 uppercase backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-white/70">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="px-6 py-16 sm:py-20 md:px-8 lg:py-24">
        <div className="container mx-auto">
          {/* Section Header */}
          <p className="mb-6 text-center text-sm font-semibold tracking-wider text-[#9D86FF] uppercase">
            Testimonials
          </p>

          <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            What Clients Say
          </h2>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#FFFFFF1F] bg-[#FFFFFF14] p-6 shadow-lg backdrop-blur-lg"
              >
                <p className="mb-6 text-base leading-relaxed text-[#D0CFD3]">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                    <span className="text-lg font-semibold text-white">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-white/60">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <section
        id="contact"
        className="bg-pitch-deep relative rounded-t-[80px] px-6 py-16 sm:py-20 md:rounded-t-[100px] md:px-8 lg:rounded-t-[120px] lg:py-24"
      >
        {/* TOP HORIZONTAL GLOW */}
        <div className="pointer-events-none absolute top-0 left-1/2 -z-10 -mt-30 h-70 w-105 -translate-x-1/2 rounded-full bg-[#7D52FD] blur-[200px]" />

        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="flex max-w-fit items-center gap-2 rounded-full border-white/10 bg-[linear-gradient(153.09deg,rgba(255,255,255,0.12)_16.83%,rgba(255,255,255,0.08)_85.44%)] px-4 py-2 text-sm shadow-lg ring-1 ring-black/5 backdrop-blur-lg">
            <Sparkle className="size-4 fill-[#9D86FF] text-[#9D86FF]" />
            Available For Work
          </div>
          <h2 className="my-8 max-w-4xl text-4xl font-bold text-white md:text-5xl">
            Let's work together to transform our ideas into stunning designs.
          </h2>
          <button className="text-pitch-deep transform cursor-pointer rounded-full bg-white px-8 py-3 text-base font-semibold transition-all duration-300 hover:scale-105">
            Hire Us Now
          </button>
        </div>
      </section>

      {/* Copyright Footer */}
      {/* <footer className="main-background border-t border-white/10 px-6 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <Brand />
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} PitchWorks. All rights reserved.
          </p>
        </div>
      </footer> */}
    </section>
  );
}

export default App;
