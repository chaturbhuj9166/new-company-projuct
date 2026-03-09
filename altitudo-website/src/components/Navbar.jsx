import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../logos/logo.png";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {

    const controlNavbar = () => {

      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);

    };

    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);

  }, [lastScrollY]);

  return (

    <header
      className={`fixed top-0 left-0 w-full bg-[#0F172A] text-white z-50 shadow transition-transform duration-300
      ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">

          <img
            src={logo}
            alt="ALTITUDO"
            className="h-10 w-auto"
          />

          <span className="font-semibold text-lg tracking-wide">
            ALTITUDO
          </span>

        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-sm">

          <a href="#home" className="hover:text-[#F97316] transition">
            Home
          </a>

          <a href="#services" className="hover:text-[#F97316] transition">
            Services
          </a>

          <a href="#about" className="hover:text-[#F97316] transition">
            About
          </a>

          <a href="#contact" className="hover:text-[#F97316] transition">
            Contact
          </a>

        </nav>

        {/* Mobile Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >

          <div className="relative w-7 h-7">

            <Menu
              size={28}
              className={`absolute transition-all duration-300 ${
                open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`}
            />

            <X
              size={28}
              className={`absolute transition-all duration-300 ${
                open ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            />

          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#1E293B] overflow-hidden transition-all duration-300
        ${open ? "max-h-60 py-6" : "max-h-0"}
        `}
      >

        <div className="px-6 flex flex-col gap-2 text-sm">

          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

        </div>

      </div>

    </header>
  );
}

export default Navbar;