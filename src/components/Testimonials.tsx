import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

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

export function TestimonialsCarousel() {
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