import React from "react";

const ContactUsHero: React.FC = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-[#1D1D1D] py-20 md:py-60">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Contact Header */}
          <div className="max-w-4xl">
            <div className="inline-block text-[#A1F480] px-6 py-2 rounded-full text-2xl font-bold tracking-wider mb-8">
              CONTACT US
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 text-white">
              <span className="relative inline-block">
                LET'S CONNECT
                {/* Green underline decoration - positioned more precisely */}
                <div className="absolute -bottom-3 left-0 w-full h-2">
                  <svg viewBox="0 0 600 12" className="w-full h-full">
                    <path
                      d="M0 6 Q150 0 300 6 T600 6"
                      stroke="#A1F480"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </span>
            </h1>

            <div className="max-w-2xl mt-12">
              <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light">
                Let's discuss how our experts can solve your IT challenges and
                drive your business forward.
              </p>
            </div>
          </div>
        </div>

        {/* Background decoration - subtle grid pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 overflow-hidden">
          <div className="grid grid-cols-8 gap-4 h-full pt-20">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#A1F480] rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsHero;
