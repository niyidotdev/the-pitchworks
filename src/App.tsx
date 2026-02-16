import Navbar from "./components/navbar";
import Sparkle from "./assets/icons/sparkle.svg?react";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <section>
      <div className="main-background relative flex min-h-screen flex-col justify-center p-4 md:px-6">
        <Navbar />

        {/* Hero section */}
        {/* <section className="mx-auto flex w-[96%] flex-col items-center justify-between gap-8 py-28 md:flex-row"> */}
        <section className="mx-auto my-28 grid w-[96%] grid-cols-1 gap-6 md:grid-cols-2">
          <div className="max-w-4xl">
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
      {/* <div className="bg-linear-to-b from-[#9D86FF] to-[#7D52FD] py-2"> */}
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
      {/* </div> */}

      {/* About */}
      {/* <section className="main-background mx-auto py-24">
        <div className="relative flex size-100 items-center justify-center">
          <div className="absolute z-10 size-75 rounded-full bg-white" />
          <img
            src="/images/about.png"
            alt="Person"
            className="relative -top-20 z-20 w-full object-contain"
          />
        </div>
      </section> */}
    </section>
  );
}

export default App;
