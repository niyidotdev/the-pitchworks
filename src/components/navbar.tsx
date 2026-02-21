import { useState } from "react";
import Brand from "./brand";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <nav className="fixed top-6 right-0 left-0 z-50 mx-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur-lg transition-all duration-300 md:static md:mx-0 md:rounded-none md:border-none md:bg-transparent md:px-0 md:pt-8 md:shadow-none md:ring-0 md:backdrop-blur-none">
      <div className="flex items-center justify-between md:mx-auto md:max-w-7xl">
        {/* Logo */}
        <div>
          <Brand />
        </div>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-2 md:flex md:rounded-full md:border md:border-white/10 md:bg-[linear-gradient(153.09deg,rgba(255,255,255,0.12)_16.83%,rgba(255,255,255,0.08)_85.44%)] md:py-2 md:shadow-lg md:ring-1 md:ring-black/5 md:backdrop-blur-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`rounded-full px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  active === link.name
                    ? "bg-white text-black shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-pitch-deep transform rounded-full bg-white px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-100"
          >
            Hire Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white focus:outline-none md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="bg-pitch-deep/90 animate-fade-in-down absolute right-4 left-4 mt-2 rounded-2xl border border-white/10 p-4 shadow-2xl backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-2 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-pitch-deep mt-2 block rounded-xl bg-white px-6 py-3 text-center font-bold"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
