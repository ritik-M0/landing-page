"use client"
import type React from "react"
import Header from "../Header"
import Consultation from "../Consultation"
import Footer from "../Footer"

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1D1D1D] text-[#F2F2F2]">
      <Header />

      {/* Hero Section - Matching the image exactly */}
      <div className="relative overflow-hidden bg-[#1D1D1D] py-20 md:py-32 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Left side - Main heading (takes up 2/3 of the space) */}
            <div className="lg:col-span-2">
              <div className="inline-block bg-[#A1F480] text-[#1D1D1D] px-6 py-2 rounded-full text-sm font-bold tracking-wider mb-8">
                ABOUT FISSION
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] text-white">
                BUILT ON <span className="text-[#A1F480]">15 YEARS</span> OF GRIT
                <br />
                <span className="relative inline-block">
                  & INNOVATION
                  {/* Green underline decoration */}
                  <div className="absolute -bottom-4 left-0 w-full max-w-[500px] h-2">
                    <svg viewBox="0 0 500 12" className="w-full h-full">
                      <path
                        d="M0 6 Q125 0 250 6 T500 6"
                        stroke="#A1F480"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </span>
              </h1>
            </div>

            {/* Right side - Description text (takes up 1/3 of the space) */}
            <div className="lg:col-span-1 lg:pt-20">
              <div className="space-y-6 text-gray-500 text-base leading-relaxed">
                <p>
                  Founded in Hyderabad in 2010, Fission is a self-funded tech conglomerate reflecting our belief:
                  lasting impact is built, not bought.
                </p>
                <p>
                  We've grown from a two-person startup into a global name with a team of 80+ and clients across more
                  than 100 companies worldwide.
                </p>
                <p>Our mission? To create one million jobs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section - White Background */}
      <div className="bg-white text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">FOUNDERS</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">VISION MEETS EXPERTISE</p>
          </div>

          {/* Founder Profile 1 */}
          <div className="flex justify-center items-center mb-24">
            <div className="relative flex items-center">
              {/* Name Badge */}
              <div className="bg-[#A1F480] text-[#1D1D1D] px-8 py-4 rounded-3xl font-black text-xl mr-8 whitespace-nowrap">
                SANDEEP NUKARAPU
              </div>

              {/* Profile Image */}
              <div className="relative">
                <img
                  src="/founder1.svg"
                  alt="Sandeep Nukarapu - Founder & CEO"
                  className="w-72 h-80 object-cover rounded-3xl grayscale"
                />
              </div>

              {/* Founder Details */}
              <div className="ml-12 max-w-xs">
                <h3 className="text-lg font-semibold text-gray-600 mb-2 relative">
                  Founder & CEO
                  {/* Underline */}
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-300"></div>
                </h3>
                <p className="text-gray-600 italic leading-relaxed mt-4">
                  Spirited leader driving Fission's mission to create jobs and deliver impact.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Profile 2 */}
          <div className="flex justify-center items-center">
            <div className="relative flex items-center">
              {/* Founder Details - positioned to the left */}
              <div className="mr-12 max-w-xs text-right">
                <h3 className="text-lg font-semibold text-gray-600 mb-2 relative">
                  Co-Founder & CTO
                  {/* Underline */}
                  <div className="absolute -bottom-1 right-0 w-full h-0.5 bg-gray-300"></div>
                </h3>
                <p className="text-gray-600 italic leading-relaxed mt-4">
                  Oversees tech innovation, ensuring solutions are robust, scalable, and future-ready.
                </p>
              </div>

              {/* Profile Image */}
              <div className="relative">
                <img
                  src="/founder2.svg"
                  alt="Bhargav Kandimalla - Co-Founder & CTO"
                  className="w-72 h-80 object-cover rounded-3xl grayscale"
                />
              </div>

              {/* Name Badge - positioned to the right */}
              <div className="bg-[#A1F480] text-[#1D1D1D] px-8 py-4 rounded-3xl font-black text-xl ml-8 whitespace-nowrap">
                BHARGAV KANDIMALLA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Journey & Growth Timeline Section - Dark Background */}
      <div className="bg-[#1D1D1D] text-[#F2F2F2] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
            <span className="relative inline-block">
              OUR JOURNEY
              {/* Green underline decoration */}
              <div className="absolute -bottom-4 left-0 w-full max-w-[400px] h-2">
                <svg viewBox="0 0 400 12" className="w-full h-full">
                  <path
                    d="M0 6 Q100 0 200 6 T400 6"
                    stroke="#A1F480"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </span>
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mt-8">& GROWTH TIMELINE</p>
        </div>

        {/* Timeline Content */}
        <div className="relative max-w-3xl mx-auto pt-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>
          {/* Green segment for the first part */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#A1F480] h-[25%] top-0"></div>

          {/* Timeline Items */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-24">
            {/* Item 1: 2010 (Right) */}
            <div className="col-start-2 text-left relative pl-8">
              <div className="absolute left-[-1.5rem] top-0 w-6 h-6 bg-[#A1F480] rounded-full transform -translate-x-1/2"></div>
              <h3 className="text-4xl font-black text-white mb-2">2010</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Began delivering IT services from Hyderabad with U.S. clients.
              </p>
            </div>

            {/* Item 2: 2018-2021 (Left) */}
            <div className="col-start-1 text-right relative pr-8">
              <div className="absolute right-[-1.5rem] top-0 w-6 h-6 bg-gray-500 rounded-full transform translate-x-1/2"></div>
              <h3 className="text-4xl font-black text-white mb-2">2018-2021</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Launched Neodrafts and PixelRevs.</p>
            </div>

            {/* Item 3: 2020-2023 (Right) */}
            <div className="col-start-2 text-left relative pl-8">
              <div className="absolute left-[-1.5rem] top-0 w-6 h-6 bg-gray-500 rounded-full transform -translate-x-1/2"></div>
              <h3 className="text-4xl font-black text-white mb-2">2020-2023</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Deployed 9 SaaS platforms.</p>
            </div>

            {/* Item 4: 2025 (Left) */}
            <div className="col-start-1 text-right relative pr-8">
              <div className="absolute right-[-1.5rem] top-0 w-6 h-6 bg-gray-500 rounded-full transform translate-x-1/2"></div>
              <h3 className="text-4xl font-black text-white mb-2">2025</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Global tech hub. 80+ experts, offices in Hyderabad & Las Vegas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission: Beyond Profits Section - White Background */}
      <div className="bg-white text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Text Content */}
            <div>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tight">
                OUR MISSION:
                <br />
                BEYOND PROFITS
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Fission isn't here to chase unicorn valuations—it's here to empower one million people with meaningful
                work. We've built every venture and product with that intention, preserving independence and
                prioritizing mission over margins.
              </p>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="healthcare-service.svg"
                alt="Group of people collaborating"
                className="w-full max-w-md h-auto object-cover rounded-3xl grayscale"
              />
            </div>
          </div>
           <Consultation />
        </div>
      </div>
          {/* Footer Section - Dark Background */}
      <Footer />
    </div>
  )
}

export default AboutUs
