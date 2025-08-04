"use client"
import type React from "react"
import Header from "../Header"
import Consultation from "../Consultation"
import Footer from "../Footer"


const teamMembers = [
  {
    name: "MARK ROBERT",
    title: "Digital Strategist",
    imageSrc: "team1.svg",
  },
  {
    name: "MARK ROBERT",
    title: "Digital Strategist",
    imageSrc: "team2.svg",
  },
  {
    name: "MARK ROBERT",
    title: "Digital Strategist",
    imageSrc: "team3.svg",
  },
  {
    name: "MARK ROBERT",
    title: "Digital Strategist",
    imageSrc: "team1.svg",
  },
  {
    name: "MARK ROBERT",
    title: "Digital Strategist",
    imageSrc: "team2.svg",
  },
  {
    name: "MARK ROBERT",
    title: "Digital Strategist",
    imageSrc: "team3.svg",
  },
]

const Team: React.FC = () => {
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
                OUR TEAM
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.85] text-white">MEET THE TEAM</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid Section - White Background */}
      <div className="bg-white text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative overflow-hidden rounded-3xl mb-6 w-full max-w-[250px] aspect-[5/6]">
                  <img
                    src={member.imageSrc || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <h3 className="text-3xl font-black mb-2 tracking-tight">{member.name}</h3>
                <div className="w-12 h-0.5 bg-gray-300 mb-3"></div> {/* Underline */}
                <p className="text-gray-600 text-base">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
         <Consultation />
      </div>
      <Footer />
    </div>
  )
}

export default Team
