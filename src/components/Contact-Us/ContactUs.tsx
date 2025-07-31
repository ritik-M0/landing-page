"use client";

import React from "react";
import { TestimonialsCarousel } from "../Testimonials";
import Footer from "../Footer";
import Consultation from "../Consultation";
import Header from "../Header";
import ContactUsHero from "./ContactUsHero";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1D1D1D] text-[#F2F2F2]">
      <Header />
      <ContactUsHero />

      {/* Main Content Section */}
      {/* Contact Information Cards Section */}
      <ContactCards />
      {/* Contact Form Section */}
      <ContactForm />
      {/* Testimonials Section - Light Background */}
      <div className="bg-gray-50 text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8 w-full">
        <div className="w-full">
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-block bg-[#A1F480] text-[#1D1D1D] px-4 py-1 rounded-full text-sm font-medium mb-6">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="relative">
                WHAT OUR CLIENTS SAY
                {/* Green underline decoration */}
                <div className="absolute -bottom-2 left-0 w-full max-w-[500px] h-1">
                  <svg viewBox="0 0 500 8" className="w-full h-full">
                    <path
                      d="M0 4 Q125 0 250 4 T500 4"
                      stroke="#A1F480"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </div>
              </span>
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <TestimonialsCarousel />
        </div>
      </div>

      {/* Consultation Section */}
      <Consultation />

      {/* Footer Section - Dark Background */}
      <Footer />
    </div>
  );
};

export default ContactUs;
