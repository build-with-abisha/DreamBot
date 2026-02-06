import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#011019] w-full text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 flex flex-col md:flex-row justify-between gap-12">
        
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold font-poppins">Dream<span className="text-[#28c1fa]">Bot</span></h2>
          <p className="mt-2 text-gray-300">Empowering the future with AI</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="/home" className="hover:text-[#28c1fa] transition-colors">Home</a></li>
            <li><a href="/features" className="hover:text-[#28c1fa] transition-colors">Features</a></li>
            <li><a href="/pricing" className="hover:text-[#28c1fa] transition-colors">Pricing</a></li>
            <li><a href="/contact" className="hover:text-[#28c1fa] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-[#28c1fa] transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-[#28c1fa] transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-[#28c1fa] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#28c1fa] transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-6 py-6 text-center text-gray-400 text-sm">@2026 DreamBot. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
