import { motion } from "framer-motion";

function Hero() {

return (

<section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-32">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

<motion.div
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<h1 className="text-5xl font-bold leading-tight mb-6">

We Build Scalable Software  
for Indian Startups 🚀

</h1>

<p className="text-gray-400 mb-8">

From idea to launch – Custom web apps, cloud solutions
and product development.

</p>

<div className="flex gap-5">

<motion.button
whileHover={{scale:1.1}}
className="bg-[#F97316] hover:bg-orange-600 px-6 py-3 rounded-lg shadow-lg"
>

Get Free Quote

</motion.button>

<motion.button
whileHover={{scale:1.1}}
className="border border-gray-400 hover:border-[#F97316] px-6 py-3 rounded-lg"  
>

Our Services

</motion.button>

</div>

</motion.div>

<motion.img
src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
className="rounded-xl shadow-2xl"
initial={{opacity:0,x:100}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
/>

</div>

</section>

)

}

export default Hero