const Industries: React.FC = () => {
  return (
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
              We've driven innovation and solved complex challenges across a
              range of industries.
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button className="w-12 h-12 bg-[#1D1D1D] rounded-full flex items-center justify-center hover:bg-[#1D1D1D]/80 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
                <span className="text-white text-6xl font-bold opacity-50">
                  01
                </span>
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
                <span className="text-white text-6xl font-bold opacity-50">
                  02
                </span>
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
                <span className="text-white text-6xl font-bold opacity-50">
                  03
                </span>
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
            Our diverse industry expertise means we ramp up fast on your
            challenges and deliver solutions that fit your world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Industries;
