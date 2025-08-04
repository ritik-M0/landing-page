"use client";

import { Button } from "@/components/ui/button";
import { Menu, ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { TestimonialsCarousel } from "./Testimonials";
import Footer from "./Footer";
import Consultation from "./Consultation";
import Industries from "./Industries";
import SuccessStories from "./SuccessStories";
import { useNavigate } from "react-router-dom";

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "DISCOVER & STRATEGIZE",
    description:
      "We start by understanding your business goals, challenges, and requirements through comprehensive research and stakeholder interviews.",
  },
  {
    id: 2,
    number: "02",
    title: "DESIGN & PROTOTYPE",
    description:
      "Translate ideas into wireframes, prototypes, or system designs with iterative feedback loops.",
    defaultOpen: true,
  },
  {
    id: 3,
    number: "03",
    title: "DEVELOP & IMPLEMENT",
    description:
      "Our expert development team brings designs to life using cutting-edge technologies and best practices.",
  },
  {
    id: 4,
    number: "04",
    title: "TEST & REFINE",
    description:
      "Rigorous testing ensures quality, performance, and security before deployment to production environments.",
  },
  {
    id: 5,
    number: "05",
    title: "LAUNCH & SUPPORT",
    description:
      "We handle deployment and provide ongoing support to ensure your solution continues to perform optimally.",
  },
];

function ProcessAccordion() {
  const [openStep, setOpenStep] = useState(2); // Default to step 2 being open

  const toggleStep = (stepId: number) => {
    setOpenStep(openStep === stepId ? 0 : stepId);
  };

  return (
    <div className="space-y-0">
      {processSteps.map((step) => (
        <div key={step.id} className="border-b border-[#F2F2F2]/20">
          <button
            onClick={() => toggleStep(step.id)}
            className="w-full flex items-center justify-between py-6 text-left hover:bg-[#F2F2F2]/5 transition-colors duration-200"
          >
            <div className="flex items-center gap-6">
              <span className="text-[#A1F480] text-lg font-medium min-w-[3rem]">
                {step.number}.
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#F2F2F2]">
                {step.title}
              </h3>
            </div>

            <div className="flex-shrink-0 ml-4">
              <div className="w-10 h-10 bg-[#F2F2F2] rounded-full flex items-center justify-center">
                {openStep === step.id ? (
                  <Minus className="w-5 h-5 text-[#1D1D1D]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#1D1D1D]" />
                )}
              </div>
            </div>
          </button>

          {openStep === step.id && (
            <div className="pb-6 pl-20 pr-16 animate-in slide-in-from-top-2 duration-200">
              <p className="text-[#F2F2F2]/80 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Component() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#1D1D1D] text-[#F2F2F2] w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen w-full">
        {/* Header */}
        <header className="flex items-center justify-between p-6 md:p-8 relative z-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/fission-logo.svg"
              alt="Fission Logo"
              className="w-12 h-12"
            />
          </div>
          {/* Menu */}
          <div className="flex items-center gap-3">
            <Button
              className="bg-[#A1F480] text-black hover:bg-[#A1F480]/90 rounded-xl px-3 py-2 text-base font-semibold"
              onClick={() => navigate("/contact-us")}
              type="button"
            >
              Contact Us
            </Button>
            <span className="text-[#F2F2F2] font-medium">Menu</span>
            <Menu className="w-6 h-6 text-[#A1F480] cursor-pointer" onClick={() => setMenuOpen(true)} />
          </div>
      {/* Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1D1D1D] flex flex-col">
          <div className="flex justify-between items-start p-8">
            <img src="/fission-logo.svg" alt="Fission Logo" className="w-12 h-12" />
            <button
              className="flex items-center gap-2 text-[#F2F2F2] text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Close <span className="text-[#A1F480] text-2xl ml-2">&times;</span>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-4">
            <button
              onClick={() => { navigate('/'); setMenuOpen(false); }}
              className="text-4xl md:text-5xl font-extrabold text-white underline decoration-[#A1F480] decoration-4 underline-offset-4 bg-transparent border-none outline-none cursor-pointer"
            >
              HOME
            </button>
            <button
              onClick={() => { navigate('/about'); setMenuOpen(false); }}
              className="text-4xl md:text-5xl font-extrabold text-white bg-transparent border-none outline-none cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => { navigate('/services'); setMenuOpen(false); }}
              className="text-4xl md:text-5xl font-extrabold text-white bg-transparent border-none outline-none cursor-pointer"
            >
              SERVICES
            </button>
            <button
              onClick={() => { navigate('/case-study'); setMenuOpen(false); }}
              className="text-4xl md:text-5xl font-extrabold text-white bg-transparent border-none outline-none cursor-pointer"
            >
              CASE STUDIES
            </button>
            <button
              onClick={() => { navigate('/testimonials'); setMenuOpen(false); }}
              className="text-4xl md:text-5xl font-extrabold text-white bg-transparent border-none outline-none cursor-pointer"
            >
              TESTIMONIALS
            </button>
            <button
              onClick={() => { navigate('/team'); setMenuOpen(false); }}
              className="text-4xl md:text-5xl font-extrabold text-white bg-transparent border-none outline-none cursor-pointer"
            >
              OUR TEAM
            </button>
            <button
              onClick={() => { navigate('/contact-us'); setMenuOpen(false); }}
              className="text-4xl md:text-5xl font-extrabold text-white bg-transparent border-none outline-none cursor-pointer"
            >
              CONTACT
            </button>
          </nav>
        </div>
      )}
        </header>

        {/* Dots backgrounds below header, spanning main content */}
        <div className="absolute left-0 right-0 top-[72px] md:top-[104px] h-[calc(100vh-72px)] md:h-[calc(100vh-104px)] pointer-events-none z-0 flex justify-between">
          <img
            src="/home-dots.png"
            alt="dots"
            className="hidden md:block h-full w-auto"
            style={{ objectFit: "cover" }}
          />
          <div className="flex-1" />
          <img
            src="/home-dots.png"
            alt="dots"
            className="hidden md:block h-full w-auto"
            style={{ objectFit: "cover", transform: "scaleX(-1)" }}
          />
        </div>

        {/* Main Content */}
        <main className="w-full flex flex-col items-center justify-center relative z-10 px-0 md:px-0 mt-0 md:mt-0">
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-24 md:pt-32">
            <div className="flex-1 min-w-0">
              <p
                className="text-[#A1F480] text-base font-medium tracking-wider uppercase mb-6 text-left md:text-left"
                style={{ letterSpacing: "0.04em" }}
              >
                A POWERFUL VALUE PROPOSITION
              </p>
              <h1
                className="text-[2.5rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold leading-[1.05] mb-8 text-left md:text-left"
                style={{ fontFamily: "inherit" }}
              >
                <span className="block">EMPOWERING YOUR BUSINESS</span>
                <span className="block">THROUGH RELIABLE</span>
                <span className="block relative">
                  IT INNOVATION
                  <div className="absolute -bottom-4 left-0 w-[90%] md:w-[80%] h-3">
                    <svg viewBox="0 0 400 12" className="w-full h-full">
                      <path
                        d="M0 8 Q100 0 200 8 T400 8"
                        stroke="#A1F480"
                        strokeWidth="3"
                        fill="none"
                      />
                      <path
                        d="M0 11 Q100 3 200 11 T400 11"
                        stroke="#A1F480"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </div>
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-start md:items-end gap-8 md:gap-0 md:mb-8 min-w-[320px] max-w-[420px] w-full">
              <p className="text-[#F2F2F2]/80 text-lg leading-relaxed text-left md:text-right mb-6 md:mb-8">
                From IT consulting to cutting-edge development, we leverage
                technology to fuel your growth and efficiency.
              </p>
              <Button className="bg-[#F2F2F2] text-[#1D1D1D] hover:bg-[#F2F2F2]/90 rounded-full px-8 py-6 text-base font-semibold w-fit group transition-all duration-300 shadow-lg">
                Request a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </main>

        {/* Bottom Text */}
        <div className="w-full flex justify-center items-center mt-16 mb-8 md:mt-24">
          <p
            className="text-[#A1F480] text-center text-base md:text-lg font-bold tracking-wide uppercase"
            style={{ letterSpacing: "0.04em" }}
          >
            <span className="text-[#F2F2F2]/60 font-normal">
              DELIVERING EXCELLENCE IN{" "}
            </span>
            <span className="text-[#F2F2F2] font-extrabold">IT SERVICES</span>
            <span className="text-[#F2F2F2]/60 font-normal"> FOR </span>
            <span className="text-[#A1F480] font-extrabold">15+ YEARS</span>
          </p>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 right-0 w-1/3 h-1/3 opacity-5">
          <div className="w-full h-full bg-gradient-to-l from-[#A1F480] to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Trusted By Section - White Background */}
      <div className="bg-white text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8 w-full">
        <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              TRUSTED BY LEADING COMPANIES
            </h2>
            <p className="text-gray-500 text-xl">
              in Technology, Healthcare, Finance, and more...
            </p>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            <div className="text-gray-300 font-bold text-xl">LOREM IPSUM</div>
            <div className="text-[#FF9F40] font-bold text-xl">LOREM IPSUM</div>
            <div className="text-gray-300 font-bold text-xl">LOREM IPSUM</div>
            <div className="text-gray-300 font-bold text-xl">LOREM IPSUM</div>
          </div>
        </div>
      </div>

      {/* What We Do Section - White Background */}
      <div className="bg-white text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Services Header */}
          <div className="mb-12 md:mb-16">
            <div className="inline-block bg-[#A1F480] text-[#1D1D1D] px-4 py-1 rounded-full text-sm font-medium mb-6">
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              WHAT WE DO
            </h2>
          </div>

          {/* Services Content */}
          <div className="mb-12">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold mb-4">
                End-to-End IT Solutions:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From advisory consulting to creative design and emerging tech,
                Fission provides a one-stop partnership for all your digital
                needs.
              </p>
            </div>

            {/* Service Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Core IT Services Card */}
              <div className="bg-[#A1F480] rounded-3xl p-8 relative h-80 flex flex-col justify-between">
                <div>
                  <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center mb-8">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 18L22 12L16 6"
                        stroke="#A1F480"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 6L2 12L8 18"
                        stroke="#A1F480"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-black text-2xl md:text-3xl font-bold leading-tight">
                    CORE IT
                    <br />
                    SERVICES
                  </h3>
                </div>
                <div className="self-end">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#1D1D1D] rounded-3xl p-8 relative h-80 flex flex-col justify-between">
                <div>
                  <div className="mb-8">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="16"
                        y="16"
                        width="16"
                        height="16"
                        rx="2"
                        fill="#A1F480"
                      />
                      <rect x="12" y="20" width="4" height="2" fill="#A1F480" />
                      <rect x="32" y="20" width="4" height="2" fill="#A1F480" />
                      <rect x="12" y="26" width="4" height="2" fill="#A1F480" />
                      <rect x="32" y="26" width="4" height="2" fill="#A1F480" />
                      <rect x="20" y="12" width="2" height="4" fill="#A1F480" />
                      <rect x="26" y="12" width="2" height="4" fill="#A1F480" />
                      <rect x="20" y="32" width="2" height="4" fill="#A1F480" />
                      <rect x="26" y="32" width="2" height="4" fill="#A1F480" />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                    SPECIALIZED IT
                    <br />
                    SERVICES
                  </h3>
                </div>
                <div className="self-end">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Design & Experience Services Card */}
              <div className="bg-gray-100 rounded-3xl p-8 relative h-80 flex flex-col justify-between">
                <div>
                  <div className="mb-8">
                    <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center">
                      <span className="text-black font-bold text-sm">UX</span>
                    </div>
                  </div>
                  <h3 className="text-black text-2xl md:text-3xl font-bold leading-tight">
                    DESIGN &<br />
                    EXPERIENCE
                    <br />
                    SERVICES
                  </h3>
                </div>
                <div className="self-end">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries We Serve Section */}
          <Industries />
        </div>
      </div>

      {/* Our Approach & Process Section - Dark Background */}
      <div className="bg-[#1D1D1D] text-[#F2F2F2] py-16 md:py-24 px-6 md:px-8 relative overflow-hidden">
        {/* Background dot pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-[#A1F480] rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="w-full relative z-10">
          {/* Process Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
            <div className="flex-1">
              <div className="inline-block bg-[#A1F480] text-[#1D1D1D] px-4 py-1 rounded-full text-sm font-medium mb-6">
                PROCESS
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                OUR APPROACH
                <br />
                <span className="relative">
                  & PROCESS
                  {/* Green underline decoration */}
                  <div className="absolute -bottom-2 left-0 w-full max-w-[300px] h-1">
                    <svg viewBox="0 0 300 8" className="w-full h-full">
                      <path
                        d="M0 4 Q75 0 150 4 T300 4"
                        stroke="#A1F480"
                        strokeWidth="3"
                        fill="none"
                      />
                    </svg>
                  </div>
                </span>
              </h2>
            </div>

            <div className="lg:max-w-md">
              <p className="text-[#F2F2F2]/80 text-lg leading-relaxed">
                At Fission, our process is both innovative and transparent. We
                believe in working closely with our clients at every step to
                ensure solutions are perfectly aligned with business goals.
              </p>
            </div>
          </div>

          {/* Process Accordion */}
          <ProcessAccordion />

          {/* CTA Button */}
          <div className="mt-12 flex justify-end">
            <Button className="bg-transparent border-2 border-[#F2F2F2] text-[#F2F2F2] hover:bg-[#F2F2F2] hover:text-[#1D1D1D] rounded-full px-8 py-6 text-base font-semibold group transition-all duration-300">
              Start a Project Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      {/* Success Stories & Case Studies Section - White Background */}
      <SuccessStories />

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
      <Consultation />
      {/* Footer Section - Dark Background */}
      <Footer />
    </div>
  );
}
