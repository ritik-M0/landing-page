const SuccessStories: React.FC = () => {
  return (
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
                  <path
                    d="M0 4 Q100 0 200 4 T400 4"
                    stroke="#A1F480"
                    strokeWidth="3"
                    fill="none"
                  />
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
                  ACHIEVED 99.99% UPTIME,
                  <br />
                  2X FASTER LOAD TIMES, 40%
                  <br />
                  COST SAVINGS.
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-4 pt-8 lg:pt-0">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                BUILDING A SCALABLE
                <br />
                HEALTHCARE PLATFORM
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                How Fission's cloud expertise helped{" "}
                <span className="font-bold text-[#1D1D1D]">HealthCo</span>{" "}
                handle 5x user growth without a glitch, while improving UX.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fintech Mobile App */}
          <div className="group cursor-pointer flex flex-col items-start border-r border-[#E5E5E5] pr-6 last:border-none last:pr-0">
            <h4 className="text-2xl font-extrabold leading-tight mb-2 text-left uppercase">
              FINTECH MOBILE APP
              <br />
              DEVELOPMENT
            </h4>
            <div className="w-10 h-1 bg-black mb-3"></div>
            <p className="text-gray-700 text-base leading-relaxed mb-4 text-left">
              Enabled a secure, user-friendly banking app, resulting in 1M+
              downloads.
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
              E-COMMERCE WEBSITE
              <br />
              OVERHAUL
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
              AI-DRIVEN ANALYTICS
              <br />
              PLATFORM FOR RETAIL
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
  );
};
export default SuccessStories;
