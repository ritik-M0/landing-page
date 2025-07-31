import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Consultation = () => (
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
            Let's discuss how our experts can solve your IT challenges and drive
            your business forward. We offer a free, no-obligation consultation
            to assess your needs and chart a path to success.
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
);

export default Consultation;
