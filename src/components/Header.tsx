import React from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="bg-[#1D1D1D] text-white py-4 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src="fission-logo.svg" alt="Fission Logo" className="w-8 h-8" />
          <span className="text-xl md:text-2xl font-bold">FISSION</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-white hover:text-[#A1F480] transition-colors duration-200 font-medium"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-white hover:text-[#A1F480] transition-colors duration-200 font-medium"
          >
            Services
          </a>
          <a
            href="#industries"
            className="text-white hover:text-[#A1F480] transition-colors duration-200 font-medium"
          >
            Industries
          </a>
          <a
            href="#case-studies"
            className="text-white hover:text-[#A1F480] transition-colors duration-200 font-medium"
          >
            Case Studies
          </a>
        </nav>

        {/* Contact Us Button */}
        <Button className="bg-[#A1F480] text-[#1D1D1D] hover:bg-[#A1F480]/90 rounded-full px-6 py-2 font-semibold transition-all duration-300">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
