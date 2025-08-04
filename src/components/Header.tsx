import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-[#1D1D1D] text-white py-4 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src="fission-logo.svg" alt="Fission Logo" className="w-8 h-8" />
          <span className="text-xl md:text-2xl font-bold">FISSION</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => navigate('/about')}
            className="bg-transparent border-none outline-none text-white hover:text-[#A1F480] transition-colors duration-200 font-medium cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => navigate('/services')}
            className="bg-transparent border-none outline-none text-white hover:text-[#A1F480] transition-colors duration-200 font-medium cursor-pointer"
          >
            Services
          </button>
  
          <button
            onClick={() => navigate('/case-study')}
            className="bg-transparent border-none outline-none text-white hover:text-[#A1F480] transition-colors duration-200 font-medium cursor-pointer"
          >
            Case Studies
          </button>
        </nav>

        {/* Contact Us Button */}
        <Button
          className="bg-[#A1F480] text-[#1D1D1D] hover:bg-[#A1F480]/90 rounded-full px-6 py-2 font-semibold transition-all duration-300"
          onClick={() => navigate('/contact-us')}
        >
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
