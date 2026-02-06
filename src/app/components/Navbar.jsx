"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // detect current page

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-linear-to-b from-[#011019] to-[#00425a] fixed z-10 w-full shadow-md">
      <div className="mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center h-20 xl:px-20 2xl:px-28">
        {/* Logo */}
        <div className="text-white text-xl md:text-2xl font-poppins font-bold uppercase">Dream<span className="text-[#28c1fa]">Bot</span></div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 xl:gap-12 2xl:gap-14 text-lg font-medium uppercase">
          {links.map((link) => (
            <a key={link.name} href={link.path} className={`relative text-white transition-all duration-300 ${ pathname === link.path ? "text-[#28c1fa] after:w-full" : "hover:text-[#28c1fa] after:w-0" } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-1 after:bg-[#28c1fa] after:transition-all after:duration-300`}>{link.name}</a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a href="" className="text-white py-2 px-4 rounded-full border border-[#28c1fa] text-lg font-medium hidden md:flex transition-all hover:bg-[#28c1fa] hover:text-black">Sign Up</a>
          <button className="text-white focus:outline-none md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#011019] bg-opacity-95">
          <ul className="flex flex-col gap-4 py-6 px-6 text-white">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.path} className={`block text-center py-2 relative transition-all duration-300 ${ pathname === link.path ? "text-[#28c1fa] after:w-full" : "hover:text-[#28c1fa] after:w-0" } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-1 after:bg-[#28c1fa] after:transition-all after:duration-300`} onClick={() => setIsOpen(false)}>{link.name}</a>
              </li>
            ))}
            <li>
              <a href="" className="block text-center py-2 mt-2 border border-[#28c1fa] rounded-full text-white font-medium transition-all hover:bg-[#28c1fa] hover:text-black" onClick={() => setIsOpen(false)}>Sign Up</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
