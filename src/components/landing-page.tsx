"use client"

import { Button } from "@/components/ui/button"
import { Menu, ArrowRight, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

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
    description: "Translate ideas into wireframes, prototypes, or system designs with iterative feedback loops.",
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
]

const testimonials = [
  {
    id: 1,
    quote: "FISSION'S TEAM FELT LIKE AN EXTENSION OF OUR OWN.",
    description:
      "They delivered our project ahead of schedule and above expectations — truly the gold standard of partnership.",
    author: "Amanda Smith",
    title: "IT Director",
    company: "Instacart",
  },
  {
    id: 2,
    quote: "WE WERE IMPRESSED BY HOW QUICKLY FISSION UNDERSTOOD OUR INDUSTRY.",
    description: "Their expertise and agile process helped us increase productivity by 50%.",
    author: "Keith Messick",
    title: "CTO",
    company: "Redis",
  },
  {
    id: 3,
    quote: "FISSION TRANSFORMED OUR DIGITAL INFRASTRUCTURE COMPLETELY.",
    description: "The scalability improvements they implemented have been game-changing for our growth trajectory.",
    author: "Sarah Johnson",
    title: "VP of Engineering",
    company: "TechFlow",
  },
]

function ProcessAccordion() {
  const [openStep, setOpenStep] = useState(2) // Default to step 2 being open

  const toggleStep = (stepId: number) => {
    setOpenStep(openStep === stepId ? 0 : stepId)
  }

  return (
    <div className="space-y-0">
      {processSteps.map((step) => (
        <div key={step.id} className="border-b border-[#F2F2F2]/20">
          <button
            onClick={() => toggleStep(step.id)}
            className="w-full flex items-center justify-between py-6 text-left hover:bg-[#F2F2F2]/5 transition-colors duration-200"
          >
            <div className="flex items-center gap-6">
              <span className="text-[#A1F480] text-lg font-medium min-w-[3rem]">{step.number}.</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#F2F2F2]">{step.title}</h3>
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
              <p className="text-[#F2F2F2]/80 text-lg leading-relaxed">{step.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div key={`${testimonial.id}-${currentIndex}`} className="bg-gray-100 rounded-3xl p-8 relative">
            {/* Navigation arrows on first and last cards */}
            {index === 0 && (
              <button
                onClick={prevTestimonial}
                className="absolute top-6 left-6 w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
            )}
            {index === 2 && (
              <button
                onClick={nextTestimonial}
                className="absolute top-6 right-6 w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            )}

            <div className="mb-6">
              <h4 className="text-xl font-bold text-[#1D1D1D] mb-4 leading-tight">{testimonial.quote}</h4>
              <p className="text-gray-600 leading-relaxed">{testimonial.description}</p>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-500">
                - {testimonial.author}, {testimonial.title} at{" "}
                <span className="font-semibold">{testimonial.company}</span>
              </p>
            </div>

            {/* Quote marks */}
            <div className="absolute bottom-6 right-6">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 24V12C0 5.4 5.4 0 12 0V4C7.6 4 4 7.6 4 12V14H12V24H0ZM20 24V12C20 5.4 25.4 0 32 0V4C27.6 4 24 7.6 24 12V14H32V24H20Z"
                  fill="#1D1D1D"
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-[#1D1D1D] text-[#F2F2F2] w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen w-full">
        {/* Header */}
        <header className="flex items-center justify-between p-6 md:p-8 relative z-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/fission-logo.svg" alt="Fission Logo" className="w-12 h-12" />
          </div>
          {/* Menu */}
          <div className="flex items-center gap-3">
            <span className="text-[#F2F2F2] font-medium">Menu</span>
            <Menu className="w-6 h-6 text-[#A1F480]" />
          </div>
        </header>

        {/* Dots backgrounds below header, spanning main content */}
        <div className="absolute left-0 right-0 top-[72px] md:top-[104px] h-[calc(100vh-72px)] md:h-[calc(100vh-104px)] pointer-events-none z-0 flex justify-between">
          <img src="/home-dots.png" alt="dots" className="hidden md:block h-full w-auto" style={{objectFit:'cover'}} />
          <div className="flex-1" />
          <img src="/home-dots.png" alt="dots" className="hidden md:block h-full w-auto" style={{objectFit:'cover', transform:'scaleX(-1)'}} />
        </div>

        {/* Main Content */}
        <main className="w-full flex flex-col items-center justify-center relative z-10 px-0 md:px-0 mt-0 md:mt-0">
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-24 md:pt-32">
            <div className="flex-1 min-w-0">
              <p className="text-[#A1F480] text-base font-medium tracking-wider uppercase mb-6 text-left md:text-left" style={{letterSpacing:'0.04em'}}>
                A POWERFUL VALUE PROPOSITION
              </p>
              <h1 className="text-[2.5rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold leading-[1.05] mb-8 text-left md:text-left" style={{fontFamily:'inherit'}}>
                <span className="block">EMPOWERING YOUR BUSINESS</span>
                <span className="block">THROUGH RELIABLE</span>
                <span className="block relative">IT INNOVATION
                  <div className="absolute -bottom-4 left-0 w-[90%] md:w-[80%] h-3">
                    <svg viewBox="0 0 400 12" className="w-full h-full">
                      <path d="M0 8 Q100 0 200 8 T400 8" stroke="#A1F480" strokeWidth="3" fill="none" />
                      <path d="M0 11 Q100 3 200 11 T400 11" stroke="#A1F480" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-start md:items-end gap-8 md:gap-0 md:mb-8 min-w-[320px] max-w-[420px] w-full">
              <p className="text-[#F2F2F2]/80 text-lg leading-relaxed text-left md:text-right mb-6 md:mb-8">
                From IT consulting to cutting-edge development, we leverage technology to fuel your growth and efficiency.
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
          <p className="text-[#A1F480] text-center text-base md:text-lg font-bold tracking-wide uppercase" style={{letterSpacing:'0.04em'}}>
            <span className="text-[#F2F2F2]/60 font-normal">DELIVERING EXCELLENCE IN </span>
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">TRUSTED BY LEADING COMPANIES</h2>
            <p className="text-gray-500 text-xl">in Technology, Healthcare, Finance, and more...</p>
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
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">WHAT WE DO</h2>
    </div>

    {/* Services Content */}
    <div className="mb-12">
      <div className="max-w-2xl">
        <h3 className="text-xl font-bold mb-4">End-to-End IT Solutions:</h3>
        <p className="text-gray-700 leading-relaxed">
          From advisory consulting to creative design and emerging tech, Fission provides a one-stop partnership
          for all your digital needs.
        </p>
      </div>

      {/* Service Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Core IT Services Card */}
        <div className="bg-[#A1F480] rounded-3xl p-8 relative h-80 flex flex-col justify-between">
          <div>
            <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              CORE IT<br />SERVICES
            </h3>
          </div>
          <div className="self-end">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="16" y="16" width="16" height="16" rx="2" fill="#A1F480"/>
                <rect x="12" y="20" width="4" height="2" fill="#A1F480"/>
                <rect x="32" y="20" width="4" height="2" fill="#A1F480"/>
                <rect x="12" y="26" width="4" height="2" fill="#A1F480"/>
                <rect x="32" y="26" width="4" height="2" fill="#A1F480"/>
                <rect x="20" y="12" width="2" height="4" fill="#A1F480"/>
                <rect x="26" y="12" width="2" height="4" fill="#A1F480"/>
                <rect x="20" y="32" width="2" height="4" fill="#A1F480"/>
                <rect x="26" y="32" width="2" height="4" fill="#A1F480"/>
              </svg>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
              SPECIALIZED IT<br />SERVICES
            </h3>
          </div>
          <div className="self-end">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              DESIGN &<br />EXPERIENCE<br />SERVICES
            </h3>
          </div>
          <div className="self-end">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className="bg-white text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Industries Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div className="flex-1">
                  <div className="inline-block bg-[#A1F480] text-[#1D1D1D] px-4 py-1 rounded-full text-sm font-medium mb-6">
                    INDUSTRY EXPERTISE
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    INDUSTRIES
                    <br />
                    WE SERVE
                  </h2>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <p className="text-gray-700 text-lg max-w-md text-right">
                    We've driven innovation and solved complex challenges across a range of industries.
                  </p>

                  {/* Navigation Arrows */}
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-[#1D1D1D] rounded-full flex items-center justify-center hover:bg-[#1D1D1D]/80 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15 18L9 12L15 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-[#1D1D1D] rounded-full flex items-center justify-center hover:bg-[#1D1D1D]/80 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Industry Showcase Cards */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Information Technology & SaaS */}
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl mb-6">
                    <img
                      src="infotech-service.svg"
                      alt="Information Technology & SaaS"
                      className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute top-6 right-6">
                      <span className="text-white text-6xl font-bold opacity-50">01</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-center">
                    INFORMATION TECHNOLOGY
                    <br />& SAAS
                  </h3>
                </div>

                {/* Healthcare & Life Sciences */}
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl mb-6">
                    <img
                      src="healthcare-service.svg"
                      alt="Healthcare & Life Sciences"
                      className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute top-6 right-6">
                      <span className="text-white text-6xl font-bold opacity-50">02</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-center">
                    HEALTHCARE & LIFE
                    <br />
                    SCIENCES
                  </h3>
                </div>

                {/* Financial Services & Fintech */}
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl mb-6">
                    <img
                      src="financial-service.svg"
                      alt="Financial Services & Fintech"
                      className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute top-6 right-6">
                      <span className="text-white text-6xl font-bold opacity-50">03</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-center">
                    FINANCIAL SERVICES
                    <br />& FINTECH
                  </h3>
                </div>
              </div>

              {/* Bottom Description */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  Our diverse industry expertise means we ramp up fast on your challenges and deliver solutions that fit
                  your world.
                </p>
              </div>
            </div>
          </div>
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
                      <path d="M0 4 Q75 0 150 4 T300 4" stroke="#A1F480" strokeWidth="3" fill="none" />
                    </svg>
                  </div>
                </span>
              </h2>
            </div>

            <div className="lg:max-w-md">
              <p className="text-[#F2F2F2]/80 text-lg leading-relaxed">
                At Fission, our process is both innovative and transparent. We believe in working closely with our
                clients at every step to ensure solutions are perfectly aligned with business goals.
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
<div className="bg-white text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        SUCCESS STORIES &
        <br />
        <span className="relative">
          CASE STUDIES
          {/* Green underline decoration */}
          <div className="absolute -bottom-2 left-0 w-full max-w-[400px] h-1">
            <svg viewBox="0 0 400 8" className="w-full h-full">
              <path d="M0 4 Q100 0 200 4 T400 4" stroke="#A1F480" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </span>
      </h2>
    </div>

    {/* Featured Case Study */}
    <div className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Image and Metrics */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="healthcare-service.svg"
              alt="Healthcare professionals working on computers"
              className="w-full h-80 object-cover grayscale"
            />
          </div>

          {/* Metrics Speech Bubble */}
          <div className="absolute -bottom-8 -left-8 bg-[#A1F480] rounded-3xl p-6 max-w-sm shadow-lg z-10">
            <p className="text-[#1D1D1D] font-bold text-lg leading-tight">
              ACHIEVED 99.99% UPTIME,<br />
              2X FASTER LOAD TIMES, 40%<br />
              COST SAVINGS.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="lg:pl-4 pt-8 lg:pt-0">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            BUILDING A SCALABLE<br />
            HEALTHCARE PLATFORM
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            How Fission's cloud expertise helped <span className="font-bold text-[#1D1D1D]">HealthCo</span> handle 5x user
            growth without a glitch, while improving UX.
          </p>
        </div>
      </div>
    </div>
 

          {/* Case Study Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fintech Mobile App */}
            <div className="group cursor-pointer flex flex-col items-start border-r border-[#E5E5E5] pr-6 last:border-none last:pr-0">
              <h4 className="text-2xl font-extrabold leading-tight mb-2 text-left uppercase">
                FINTECH MOBILE APP<br />DEVELOPMENT
              </h4>
              <div className="w-10 h-1 bg-black mb-3"></div>
              <p className="text-gray-700 text-base leading-relaxed mb-4 text-left">
                Enabled a secure, user-friendly banking app, resulting in 1M+ downloads.
              </p>
              <div className="relative overflow-hidden rounded-2xl w-full mt-auto">
                <img
                  src="dev-area.svg"
                  alt="Mobile banking app development"
                  className="w-full h-32 object-cover grayscale"
                />
              </div>
            </div>

            {/* E-commerce Website */}
            <div className="group cursor-pointer flex flex-col items-start border-r border-[#E5E5E5] pr-6 last:border-none last:pr-0">
              <h4 className="text-2xl font-extrabold leading-tight mb-2 text-left uppercase">
                E-COMMERCE WEBSITE<br />OVERHAUL
              </h4>
              <div className="w-10 h-1 bg-black mb-3"></div>
              <p className="text-gray-700 text-base leading-relaxed mb-4 text-left">
                Delivered robust platform enhancing user experience and sales.
              </p>
              <div className="relative overflow-hidden rounded-2xl w-full mt-auto">
                <img
                  src="dev-area.svg"
                  alt="E-commerce website development"
                  className="w-full h-32 object-cover grayscale"
                />
              </div>
            </div>

            {/* AI Analytics Platform */}
            <div className="group cursor-pointer flex flex-col items-start pr-0">
              <h4 className="text-2xl font-extrabold leading-tight mb-2 text-left uppercase">
                AI-DRIVEN ANALYTICS<br />PLATFORM FOR RETAIL
              </h4>
              <div className="w-10 h-1 bg-black mb-3"></div>
              <p className="text-gray-700 text-base leading-relaxed mb-4 text-left">
                Improved customer targeting and sales forecasting.
              </p>
              <div className="relative overflow-hidden rounded-2xl w-full mt-auto">
                <img
                  src="dev-area.svg"
                  alt="AI analytics dashboard for retail"
                  className="w-full h-32 object-cover grayscale"
                />
              </div>
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
                    <path d="M0 4 Q125 0 250 4 T500 4" stroke="#A1F480" strokeWidth="3" fill="none" />
                  </svg>
                </div>
              </span>
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <TestimonialsCarousel />
        </div>
      </div>

      {/* Call to Action Section - Dark Background */}
      <div className="bg-white py-16 md:py-24 px-6 md:px-8 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1D1D1D] rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden">
            {/* Background dot pattern */}
            <div className="absolute top-0 left-0 w-1/3 h-full opacity-10">
              <div className="grid grid-cols-8 gap-3 h-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#A1F480] rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <div className="grid grid-cols-8 gap-3 h-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#A1F480] rounded-full"></div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-block bg-[#A1F480] text-[#1D1D1D] px-4 py-1 rounded-full text-sm font-medium mb-8">
                LET'S TALK
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2F2F2] leading-tight mb-6">
                READY TO <span className="text-[#A1F480]">TRANSFORM</span>
                <br />
                YOUR IT STRATEGY?
              </h2>

              {/* Description */}
              <p className="text-[#F2F2F2]/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Let's discuss how our experts can solve your IT challenges and drive your business forward. We offer a
                free, no-obligation consultation to assess your needs and chart a path to success.
              </p>

              {/* CTA Button */}
              <Button className="bg-[#A1F480] text-[#1D1D1D] hover:bg-[#A1F480]/90 rounded-full px-8 py-6 text-base font-semibold group transition-all duration-300">
                Get Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Dark Background */}
      <footer className="bg-[#1D1D1D] text-[#F2F2F2] py-16 px-6 md:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Navigation Links */}
          <div className="text-center mb-8">
            <nav className="flex flex-wrap justify-center gap-1 text-sm md:text-base">
              <a href="#about" className="text-[#F2F2F2]/80 hover:text-[#A1F480] transition-colors px-3 py-1">
                About Us
              </a>
              <span className="text-[#F2F2F2]/40">|</span>
              <a href="#services" className="text-[#F2F2F2]/80 hover:text-[#A1F480] transition-colors px-3 py-1">
                Services
              </a>
              <span className="text-[#F2F2F2]/40">|</span>
              <a href="#industries" className="text-[#F2F2F2]/80 hover:text-[#A1F480] transition-colors px-3 py-1">
                Industries
              </a>
              <span className="text-[#F2F2F2]/40">|</span>
              <a href="#case-studies" className="text-[#F2F2F2]/80 hover:text-[#A1F480] transition-colors px-3 py-1">
                Case Studies
              </a>
            </nav>
          </div>

          {/* Tagline */}
          <div className="text-center mb-12">
            <p className="text-[#A1F480] text-lg font-medium">Your Partner in Reliable IT Innovation</p>
          </div>

          {/* Large FISSION Background Text */}
          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#2A2A2A] select-none">FISSION</h2>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-[#F2F2F2]/10">
            {/* Copyright */}
            <div>
              <p className="text-[#F2F2F2]/60 text-sm">Copyright © 2025 Fission. All rights reserved.</p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-[#F2F2F2]/60 text-sm">@fission.it</span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-8 h-8 bg-[#A1F480] rounded-full flex items-center justify-center hover:bg-[#A1F480]/80 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="#1D1D1D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="w-8 h-8 bg-[#A1F480] rounded-full flex items-center justify-center hover:bg-[#A1F480]/80 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61173 13.2884 4.19445 12.773 4.95371C12.2575 5.71297 11.9877 6.61435 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39624C5.36074 6.60667 4.01032 5.43666 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
                      stroke="#1D1D1D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="w-8 h-8 bg-[#A1F480] rounded-full flex items-center justify-center hover:bg-[#A1F480]/80 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#1D1D1D" strokeWidth="2" />
                    <path
                      d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                      stroke="#1D1D1D"
                      strokeWidth="2"
                    />
                    <path
                      d="M17.5 6.5H17.51"
                      stroke="#1D1D1D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-8 h-8 bg-[#A1F480] rounded-full flex items-center justify-center hover:bg-[#A1F480]/80 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      stroke="#1D1D1D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="2"
                      y="9"
                      width="4"
                      height="12"
                      stroke="#1D1D1D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="4"
                      cy="4"
                      r="2"
                      stroke="#1D1D1D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
