import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {

const [open,setOpen] = useState(false)

return (

<header className="fixed top-0 w-full bg-[#0F172A] text-white z-50 shadow">

<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

<h1 className="text-xl font-bold">
ALTITUDO <span className="text-[#F97316]">INDIA</span>
</h1>

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

{/* Mobile Icon */}

<div
className="md:hidden cursor-pointer"
onClick={()=>setOpen(!open)}
>

{open ? <X size={28}/> : <Menu size={28}/>}

</div>

</div>

{/* Mobile Menu */}

{open && (

<div className="md:hidden bg-[#1E293B] px-6 pb-6 space-y-4">

<a href="#home" className="block hover:text-[#F97316]">
Home
</a>

<a href="#services" className="block hover:text-[#F97316]">
Services
</a>

<a href="#about" className="block hover:text-[#F97316]">
About
</a>

<a href="#contact" className="block hover:text-[#F97316]">
Contact
</a>

</div>

)}

</header>

)

}

export default Navbar