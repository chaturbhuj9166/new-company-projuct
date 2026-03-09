export default function Footer() {
  return (
  <footer className="bg-[#020617] text-gray-400 pt-16 pb-8">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">

        {/* Logo Section */}
        <div>
          <h2 className="text-xl font-semibold text-blue-600">ALTITUDO INDIA</h2>

          <p className="text-gray-500 mt-3">
            Enterprise & Brand Native Community
          </p>

          <div className="flex gap-4 mt-4 text-gray-600">
            <span className="cursor-pointer hover:text-[#F97316]">X</span>
            <span className="cursor-pointer hover:text-[#F97316]">LinkedIn</span>
            <span className="cursor-pointer hover:text-[#F97316]">Mail</span>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-3">PRODUCT</h3>

          <ul className="space-y-2 text-gray-600">
            <li className="cursor-pointer hover:text-black">Features</li>
            <li className="cursor-pointer hover:text-black">Pricing</li>
            <li className="cursor-pointer hover:text-black">Use Cases</li>
            <li className="cursor-pointer hover:text-black">Developers</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">RESOURCES</h3>

          <ul className="space-y-2 text-gray-600">
            <li className="cursor-pointer hover:text-black">Blog</li>
            <li className="cursor-pointer hover:text-black">FAQ</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">COMPANY</h3>

          <ul className="space-y-2 text-gray-600">
            <li className="cursor-pointer hover:text-black">Contact</li>
            <li className="cursor-pointer hover:text-black">Support</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 text-gray-500">

        <p>Made with 💛 © 2026 Altitudo India Private Limited</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="cursor-pointer">Privacy Policy</span>
          <span className="cursor-pointer">Terms of Service</span>
        </div>

      </div>

    </footer>
  );
}