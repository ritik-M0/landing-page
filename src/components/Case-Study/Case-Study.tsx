"use client"
import type React from "react"
import Header from "../Header"
import Consultation from "../Consultation"
import Footer from "../Footer"

const CaseStudy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1D1D1D] text-[#F2F2F2]">
      <Header />

      {/* Hero Section - Matching the image exactly */}
      <div className="relative overflow-hidden bg-[#1D1D1D] py-20 md:py-32 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side - Main heading (takes up 2/3 of the space) */}
            <div className="lg:col-span-2">
              <div className="inline-block bg-[#A1F480] text-[#1D1D1D] px-6 py-2 rounded-full text-sm font-bold tracking-wider mb-8">
                CASE STUDIES
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] text-white">
                CASE STUDY <span className="text-[#A1F480]">HEADING</span> COMES HERE
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - White Background */}
      <div className="bg-white text-[#1D1D1D] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-6 tracking-tight">INTRODUCTION</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The digital marketing landscape is ever-evolving, driven by rapid advancements in technology and changing
              consumer behaviors. In 2024, marketers must stay ahead of emerging trends to maintain their competitive
              edge. From AI-driven strategies to hyper-personalization, this blog explores the key developments shaping
              the future of digital marketing and offers actionable insights for businesses to thrive in this dynamic
              environment.
            </p>
          </div>

          {/* AI-Powered Revolution */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6 tracking-tight">1. AI-POWERED REVOLUTION</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Artificial intelligence (AI) continues to transform the digital marketing landscape in unprecedented ways.
              In 2024, AI is expected to dominate how businesses strategize and execute campaigns. AI-driven tools can
              predict customer behavior, optimize ad placements, and even create personalized content. Predictive
              analytics allows brands to anticipate market trends and consumer preferences, ensuring timely and
              effective campaigns. Additionally, AI-powered chatbots and virtual assistants offer seamless customer
              support, significantly enhancing user experiences. Companies that adopt AI are not only saving time and
              resources but are also seeing up to a 30% boost in customer engagement. As competition intensifies,
              integrating AI into your marketing workflow will no longer be optional—will be a necessity.
            </p>
          </div>

          {/* Maximized Efficiency Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-8 tracking-tight">
              MAXIMIZED EFFICIENCY THROUGH RETARGETING AND HIGH-PERFORMING KEYWORDS.
            </h2>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="case-study-hero.svg"
                alt="Team collaborating with data visualization overlay"
                className="w-full h-auto object-cover grayscale"
              />
            </div>
          </div>

          {/* 2. THE RISE OF HYPER-PERSONALIZATION */}
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-6 tracking-tight">2. THE RISE OF HYPER-PERSONALIZATION</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              In an era where consumers are bombarded with content, personalization has become a key differentiator.
              Hyper-personalization goes beyond just addressing users by name—it involves creating tailor-made
              experiences based on real-time data. For instance, e-commerce platforms are using browsing history and
              past purchases to recommend products that align with individual preferences. Similarly, personalized email
              campaigns and dynamic landing pages are showing significant improvements in conversion rates. Statistics
              reveal that 80% of consumers are more likely to buy from brands that offer personalized experiences. To
              stay competitive, businesses must invest in technologies and strategies that enable this level of
              customization.
            </p>
          </div>

          {/* 3. THE GROWTH OF VOICE AND VISUAL SEARCH */}
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-6 tracking-tight">3. THE GROWTH OF VOICE AND VISUAL SEARCH</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              As technology evolves, voice and visual search capabilities are reshaping how users find and interact with
              content online. Devices like Amazon Echo and Google Home have made voice search a staple in households,
              encouraging marketers to optimize their content for conversational queries. Meanwhile, platforms like
              Pinterest and Google Lens are leveraging visual search to let users find products with just a picture.
              This shift requires businesses to rethink their SEO strategies, focusing on natural language processing
              and image metadata optimization. By 2025, it's projected that voice and visual searches will account for
              over 30% of global e-commerce sales, making it imperative for brands to adapt now to remain visible in the
              digital marketplace.
            </p>
          </div>

          {/* 4. INTERACTIVE AND IMMERSIVE CONTENT */}
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-6 tracking-tight">4. INTERACTIVE AND IMMERSIVE CONTENT</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Static content is no longer enough to keep audiences engaged in the fast-paced digital world. In 2024,
              interactive and immersive formats are set to dominate, offering users engaging ways to connect with
              brands. Augmented reality (AR) and virtual reality (VR) experiences, like IKEA's AR app for visualizing
              furniture, are becoming increasingly popular. Similarly, interactive content such as quizzes, polls, and
              live videos are driving higher engagement rates than traditional posts. These formats allow consumers to
              actively participate, fostering deeper connections with brands. Businesses that experiment with such
              content not only captivate their audiences but also differentiate themselves.
            </p>
          </div>

          {/* 5. SUSTAINABILITY AND ETHICAL MARKETING */}
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-6 tracking-tight">5. SUSTAINABILITY AND ETHICAL MARKETING</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Modern consumers are aligning their purchasing decisions with their values, making sustainability and
              ethics critical for brand success. In 2024, businesses that prioritize transparency, eco-friendly
              practices, and ethical sourcing will gain a competitive edge. Marketing campaigns highlighting a company's
              commitment to reducing its carbon footprint or giving back to the community resonate deeply with socially
              conscious audiences. According to recent studies, 62% of Gen Z consumers prefer to buy from brands that
              demonstrate environmental responsibility. Incorporating these values into your marketing strategy not only
              enhances brand loyalty but also contributes positively to the planet—a win-win for businesses and their
              audiences.
            </p>
          </div>
        </div>
           <Consultation />
      </div>
      <Footer />
    </div>
  )
}

export default CaseStudy
