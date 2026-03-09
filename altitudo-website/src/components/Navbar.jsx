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
        // scroll down
        setShow(false);
      } else {
        // scroll up
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
          <img src={logo} alt="ALTITUDO" className="h-10 w-auto" />
          <span className="font-semibold text-lg tracking-wide">
            ALTITUDO
          </span>
        </div> 

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm">

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

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >

          {open ? <X size={28} /> : <Menu size={28} />}

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (

        <div className="md:hidden bg-[#1E293B] px-6 pb-6 space-y-4">

          <a href="#home" className="block">Home</a>
          <a href="#services" className="block">Services</a>
          <a href="#about" className="block">About</a>
          <a href="#contact" className="block">Contact</a>

        </div>

      )}

    </header>
  );
}

export default Navbar;