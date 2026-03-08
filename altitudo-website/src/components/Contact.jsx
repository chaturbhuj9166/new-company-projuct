function Contact(){

return(

<section id="contact" className="bg-[#0F172A] text-white py-24">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

<div>

<h2 className="text-4xl font-bold mb-6">
Let's Build Something Great
</h2>

<p className="text-gray-400 mb-6">

Ready to build your startup? Let's talk.

</p>

<p>📍 Coimbatore Tamil Nadu</p>
<p>✉ contact@altitudo.in</p>


</div>

<div className="space-y-4">

<input
placeholder="Your Name"
className="w-full p-3 rounded bg-[#1E293B] border border-gray-700"
/>

<input
placeholder="Your Email"
className="w-full p-3 rounded bg-[#1E293B] border border-gray-700"
/>

<textarea
placeholder="Tell us about your project"
className="w-full p-3 rounded bg-[#1E293B] border border-gray-700"
/>

<button className="bg-[#F97316] hover:bg-orange-600 px-6 py-3 rounded w-full">
Send Message
</button>

</div>

</div>

</section>

)

}

export default Contact