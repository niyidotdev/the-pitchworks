import { useState } from "react";
import Brand from "./brand";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Reviews", to: "reviews" },
  ];

  return (
    <nav className="fixed top-4 right-0 left-0 z-50 mx-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur-lg transition-all duration-300 md:static md:mx-0 md:rounded-none md:border-none md:bg-transparent md:px-0 md:pt-8 md:shadow-none md:ring-0 md:backdrop-blur-none">
      <div className="flex items-center justify-between gap-4 md:mx-auto md:max-w-7xl">
        {/* Logo */}
        <div className="shrink-0">
          <Brand />
        </div>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-2 md:flex md:rounded-full md:border md:border-white/10 md:bg-[linear-gradient(153.09deg,rgba(255,255,255,0.12)_16.83%,rgba(255,255,255,0.08)_85.44%)] md:py-2 md:shadow-lg md:ring-1 md:ring-black/5 md:backdrop-blur-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setActive(link.name)}
                className={`cursor-pointer rounded-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  active === link.name
                    ? "bg-white text-black shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-pitch-deep transform cursor-pointer rounded-full bg-white px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-100"
          >
            Hire Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="animate-fade-in-down bg-pitch-deep/95 absolute top-full right-4 left-4 mt-3 rounded-2xl border border-white/10 p-4 shadow-2xl backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block cursor-pointer rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-pitch-deep mt-2 block cursor-pointer rounded-xl bg-white px-6 py-3 text-center font-bold"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
