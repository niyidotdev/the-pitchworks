import Navbar from "./components/navbar";
// import Brand from "./components/brand";
import Sparkle from "./assets/icons/sparkle.svg?react";
import Social from "./assets/icons/social.svg?react";
import Design from "./assets/icons/design.svg?react";
import Content from "./assets/icons/content.svg?react";
import Dev from "./assets/icons/dev.svg?react";
import Seo from "./assets/icons/seo.svg?react";
import Brand from "./assets/icons/brand.svg?react";
import Marquee from "react-fast-marquee";

function App() {
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
            <h1 className="mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
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
            <img src="/images/hero.png" alt="hero image" className="w-full" />
          </div>
        </section>
      </div>

      {/* Services */}
      <div className="bg-linear-to-b from-[#9D86FF] to-[#7D52FD] py-2">
        <div className="flex w-full overflow-hidden bg-white py-4 whitespace-nowrap">
          <Marquee autoFill pauseOnHover>
            {[
              "Social Media Management",
              "Brand Design",
              "Content Writing",
              "UI/UX Design",
              "Website Development",
            ].map((service, idx) => (
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
      <section id="about" className="relative px-6 py-24 md:px-8">
        {/* LEFT HALF CIRCLE */}
        <div className="pointer-events-none absolute top-1/2 -left-80 h-125 w-125 -translate-y-1/2 rounded-full bg-[#7D52FD] blur-[180px]" />
        {/* RIGHT HALF CIRCLE */}
        <div className="pointer-events-none absolute top-1/2 -right-80 h-125 w-125 -translate-y-1/2 rounded-full bg-[#7D52FD] blur-[180px]" />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Image */}
            <div className="relative flex items-center justify-center">
              {/* <div className="absolute z-10 h-96 w-96 rounded-full bg-white opacity-10" />
            <img
              src="/images/about.png"
              alt="About Us"
              className="relative z-20 w-full max-w-md object-contain"
            /> */}
            </div>

            {/* Content */}
            <div>
              <h2 className="mb-6 text-4xl font-bold text-[#9D86FF] md:text-[40px]">
                ABOUT US
              </h2>
              <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl">
                Pitchworks is a creative agency that partners with businesses to
                make their brand visible by the right audience. We offer
                services in website development, content writing, design,
                marketing, and social media management, all tailored to your
                goals.
              </p>
            </div>
          </div>
          {/* Stats Cards */}
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { number: "07", symbol: "+", label: "Years of Experience" },
              { number: "150", symbol: "+", label: "Projects Completed" },
              { number: "100", symbol: "%", label: "Client Satisfaction" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#FFFFFF1F] bg-[#FFFFFF14] p-8 text-center shadow-lg backdrop-blur-lg"
              >
                <p className="mb-2 text-5xl font-bold text-white">
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
      <section id="services" className="px-6 py-24 md:px-8">
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
            {[
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
            ].map((service, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#FFFFFF1F] bg-[#FFFFFF14] p-6 shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105"
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
      <section id="portfolio" className="bg-pitch-deep px-6 py-24 md:px-8">
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
            {["All", "Web Design", "App Design", "Branding", "Marketing"].map(
              (filter, idx) => (
                <button
                  key={idx}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    idx === 0
                      ? "text-pitch-deep bg-white"
                      : "bg-[linear-gradient(153.09deg,rgba(255,255,255,0.12)_16.83%,rgba(255,255,255,0.08)_85.44%)] text-white/80 backdrop-blur-lg hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ),
            )}
          </div>

          {/* Project Grid - Placeholder for now */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Projects will be added here */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="px-6 py-24 md:px-8">
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
            {[
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
            ].map((testimonial, idx) => (
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
        className="bg-pitch-deep rounded-t-[120px] px-6 py-24 md:px-8"
      >
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
