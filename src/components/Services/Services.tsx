"use client"
import type React from "react"
import { ArrowRight, Plus, Minus } from "lucide-react" // Import Plus and Minus icons

import { useState } from "react" // Import useState for accordion functionality
import Header from "../Header"
import { Button } from "../ui/button"
import { TestimonialsCarousel } from "../Testimonials"
import Consultation from "../Consultation"
import Footer from "../Footer"

const coreServices = [
  {
    title: "SOFTWARE DEVELOPMENT",
    description: "Build custom software and applications tailored to your requirements.",
    highlighted: true,
  },
  {
    title: "IT CONSULTING & STRATEGY",
    description: "Align technology with business goals through expert advice and roadmaps.",
  },
  {
    title: "IT STAFF AUGMENTATION",
    description: "Quickly scale your team with our vetted IT professionals and specialists.",
  },
  {
    title: "DEVOPS & AUTOMATION",
    description: "Streamline development pipelines and operations with CI/CD, automation, and best practices.",
  },
  {
    title: "CYBERSECURITY SERVICES",
    description: "Protect systems and data with robust security assessments, implementations, and monitoring.",
  },
  {
    title: "CLOUD SERVICES",
    description: "Enable scalability and flexibility with cloud migration, management, and optimization.",
  },
  {
    title: "IT SUPPORT & HELP DESK",
    description: "Ensure business continuity with 24/7 support, troubleshooting, and maintenance.",
  },
  {
    title: "DATA SERVICES",
    description: "Leverage data analytics, warehousing, and management to unlock insights and drive decisions.",
  },
  {
    title: "NETWORKING & INFRASTRUCTURE",
    description: "Design and manage reliable IT infrastructure and networks for peak performance.",
  },
]

const specializedServices = [
  {
    title: "AI & MACHINE LEARNING",
    description: "Implement AI/ML solutions for automation, insights, and intelligent systems.",
    id: "ai-ml",
  },
  {
    title: "IOT SETUP & MANAGEMENT",
    description: "Design, deploy, and manage IoT ecosystems for smart operations and data collection.",
    id: "iot",
  },
  {
    title: "RPA (ROBOTIC PROCESS AUTOMATION)",
    description: "Automate repetitive tasks with RPA to boost efficiency and reduce operational costs.",
    id: "rpa",
  },
  {
    title: "BLOCKCHAIN & SMART CONTRACTS",
    description: "Develop secure, transparent, and decentralized solutions for various business applications.",
    id: "blockchain",
  },
]

const designServices = [
  {
    title: "UI/UX DESIGN",
    description: "Craft intuitive user interfaces and experiences that delight customers.",
    id: "ui-ux",
  },
  {
    title: "PRODUCT DESIGN",
    description: "From concept to launch, we design innovative products that meet market needs.",
    id: "product-design",
  },
  {
    title: "BRANDING & VISUAL DESIGN",
    description: "Create compelling brand identities and visual assets that resonate with your audience.",
    id: "branding",
  },
  {
    title: "DESIGN SYSTEMS & PROTOTYPING",
    description: "Build scalable design systems and interactive prototypes for consistent and efficient development.",
    id: "design-systems",
  },
]

const Services: React.FC = () => {
  const [expandedSpecializedService, setExpandedSpecializedService] = useState("ai-ml") // Default for Specialized IT
  const [expandedDesignService, setExpandedDesignService] = useState("ui-ux") // Default for Design & Experience

  const toggleSpecializedService = (id: string) => {
    setExpandedSpecializedService(expandedSpecializedService === id ? "" : id)
  }

  const toggleDesignService = (id: string) => {
    setExpandedDesignService(expandedDesignService === id ? "" : id)
  }

  return (
    <div className="min-h-screen bg-[#1D1D1D] text-[#F2F2F2]">
      <Header />

      {/* Main Content Section - Hero-like layout */}
      <main className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Heading */}
          <div>
            <p
              className="text-[#A1F480] text-xl font-medium tracking-wider uppercase mb-6"
              style={{ letterSpacing: "0.04em" }}
            >
              OUR SERVICES
            </p>
            <h1
              className="text-[2.5rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold leading-[1.05] text-white relative inline-block"
              style={{ fontFamily: "inherit" }}
            >
              WHAT WE DO
              {/* Green underline decoration */}
              <div className="absolute -bottom-2 left-0 w-full max-w-[300px] h-1">
                <svg viewBox="0 0 300 8" className="w-full h-full">
                  <path
                    d="M0 4 Q75 0 150 4 T300 4"
                    stroke="#A1F480"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </h1>
          </div>

          {/* Right side - Description and CTA */}
          <div className="lg:pt-20 flex flex-col items-start">
            <p className="text-[#F2F2F2]/80 text-lg leading-relaxed mb-8 max-w-md">
              End-to-End IT Solutions: From advisory consulting to creative design and emerging tech, Fission provides a
              one-stop partnership for all your digital needs.
            </p>
            <Button className="bg-[#1D1D1D] text-[#F2F2F2] hover:bg-[#1D1D1D]/90 rounded-full px-8 py-6 text-base font-semibold w-fit group transition-all duration-300 border border-[#F2F2F2]/20">
              Request a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>

      {/* Core IT Services Grid Section - White Background */}
      <div className="bg-white text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight relative inline-block">
              CORE IT SERVICES
              {/* Blue underline decoration */}
              <div className="absolute -bottom-2 left-0 w-full max-w-[400px] h-1">
                <svg viewBox="0 0 400 8" className="w-full h-full">
                  <path
                    d="M0 4 Q100 0 200 4 T400 4"
                    stroke="#007BFF" // Using a blue color for this underline
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl ${
                  service.highlighted ? "bg-[#A1F480]" : "bg-gray-100"
                } flex flex-col justify-between`}
              >
                <div>
                  <h3
                    className={`text-2xl font-black mb-4 tracking-tight relative inline-block ${
                      service.highlighted ? "text-black" : "text-[#1D1D1D]"
                    }`}
                  >
                    {service.title}
                    {/* Underline for service title */}
                    <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gray-300"></div>
                  </h3>
                  <p className={`text-base leading-relaxed ${service.highlighted ? "text-black/80" : "text-gray-600"}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialized IT Services Section - Dark Background */}
      <div className="bg-[#1D1D1D] text-[#F2F2F2] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Heading and Accordion */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 tracking-tight">
              SPECIALIZED
              <br />
              IT SERVICES
            </h2>

            {/* Accordion-like Service List */}
            <div className="space-y-4">
              {specializedServices.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-xl transition-colors duration-300 ${
                    expandedSpecializedService === service.id ? "bg-[#A1F480]" : "bg-gray-800"
                  }`}
                >
                  <button
                    onClick={() => toggleSpecializedService(service.id)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3
                      className={`text-2xl font-black tracking-tight ${
                        expandedSpecializedService === service.id ? "text-black" : "text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        expandedSpecializedService === service.id ? "bg-black" : "bg-white"
                      }`}
                    >
                      {expandedSpecializedService === service.id ? (
                        <Minus
                          className={`w-5 h-5 ${
                            expandedSpecializedService === service.id ? "text-[#A1F480]" : "text-black"
                          }`}
                        />
                      ) : (
                        <Plus
                          className={`w-5 h-5 ${
                            expandedSpecializedService === service.id ? "text-black" : "text-[#1D1D1D]"
                          }`}
                        />
                      )}
                    </div>
                  </button>
                  {expandedSpecializedService === service.id && (
                    <p className="mt-4 text-base leading-relaxed text-black/80 animate-in slide-in-from-top-2 duration-200">
                      {service.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-3xl w-full max-w-md aspect-[5/7]">
              <img
                src="person-computer.svg"
                alt="Person working on computer with city lights background"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Design & Experience Services Section - White Background */}
      <div className="bg-white text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative overflow-hidden rounded-3xl w-full max-w-md aspect-[5/7]">
              <img
                src="person-writing.svg"
                alt="Person writing on notebook with laptop and phone on desk"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Right side - Heading and Accordion */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 tracking-tight">
              DESIGN & EXPERIENCE
              <br />
              SERVICES
            </h2>

            {/* Accordion-like Service List */}
            <div className="space-y-4">
              {designServices.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-xl transition-colors duration-300 ${
                    expandedDesignService === service.id ? "bg-[#A1F480]" : "bg-gray-100"
                  }`}
                >
                  <button
                    onClick={() => toggleDesignService(service.id)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3
                      className={`text-2xl font-black tracking-tight ${
                        expandedDesignService === service.id ? "text-black" : "text-[#1D1D1D]"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        expandedDesignService === service.id ? "bg-black" : "bg-white"
                      }`}
                    >
                      {expandedDesignService === service.id ? (
                        <Minus
                          className={`w-5 h-5 ${expandedDesignService === service.id ? "text-[#A1F480]" : "text-black"}`}
                        />
                      ) : (
                        <Plus
                          className={`w-5 h-5 ${expandedDesignService === service.id ? "text-black" : "text-[#1D1D1D]"}`}
                        />
                      )}
                    </div>
                  </button>
                  {expandedDesignService === service.id && (
                    <p className="mt-4 text-base leading-relaxed text-black/80 animate-in slide-in-from-top-2 duration-200">
                      {service.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
           </div>
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
                   <Footer />
    </div>
  )
}

export default Services
