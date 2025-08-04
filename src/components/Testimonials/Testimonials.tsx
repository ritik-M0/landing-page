"use client"
import React from "react"
import Header from "../Header"
import Consultation from "../Consultation"
import Footer from "../Footer"

const testimonialsData = [
  {
    quote: "FISSION'S TEAM FELT LIKE AN EXTENSION OF OUR OWN.",
    description:
      "They delivered our project ahead of schedule and above expectations — truly the gold standard of partnership.",
    author: "Amanda Smith",
    title: "IT Director at Instacart",
    imageSrc: "testimonial1.svg",
  },
  {
    quote: "WE WERE IMPRESSED BY HOW QUICKLY FISSION UNDERSTOOD OUR INDUSTRY.",
    description: "Their expertise and agile process helped us increase productivity by 50%.",
    author: "Keith Messick",
    title: "CTO of Redis",
    imageSrc: "testimonial2.svg",
  },
  {
    quote: "FISSION'S TEAM FELT LIKE AN EXTENSION OF OUR OWN.",
    description:
      "They delivered our project ahead of schedule and above expectations — truly the gold standard of partnership.",
    author: "Amanda Smith",
    title: "IT Director at Instacart",
    imageSrc: "testimonial1.svg",
  },
  {
    quote: "WE WERE IMPRESSED BY HOW QUICKLY FISSION UNDERSTOOD OUR INDUSTRY.",
    description: "Their expertise and agile process helped us increase productivity by 50%.",
    author: "Keith Messick",
    title: "CTO of Redis",
    imageSrc: "testimonial2.svg",
  },
]

const Testimonials: React.FC = () => {
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
                TESTIMONIALS
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.85] text-white">
                WHAT OUR CLIENTS SAY
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials List Section - White Background */}
      <div className="bg-white text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <React.Fragment key={index}>
              <div className="flex items-start gap-8 py-8">
                {/* Quotation Marks */}
                <div className="flex-shrink-0">
                  <span className="text-5xl font-black text-gray-300 leading-none">{"//"}</span>
                </div>

                {/* Testimonial Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-black mb-3 leading-tight">{testimonial.quote}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">{testimonial.description}</p>
                  <p className="text-gray-500 italic text-sm">{testimonial.author}</p>
                  <p className="text-gray-500 italic text-sm">{testimonial.title}</p>
                </div>

                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.imageSrc || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover grayscale"
                  />
                </div>
              </div>
              {index < testimonialsData.length - 1 && (
                <hr className="border-t border-gray-200 my-4" /> // Horizontal line separator
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
               <Consultation />
               <Footer />
    </div>
  )
}

export default Testimonials
