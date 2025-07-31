import { Mail, Phone } from "lucide-react";
import type React from "react";

const ContactCards: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Us Card */}
          <div className="bg-[#A1F480] rounded-3xl p-8 relative flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div>
              <div className="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black text-3xl font-black mb-6 tracking-tight">
                EMAIL US
              </h3>
              <p className="text-black/70 text-lg font-medium">
                info@fission.it
              </p>
            </div>
            <div className="self-end mt-12">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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

          {/* Visit Our Office Card */}
          <div className="bg-[#1D1D1D] rounded-3xl p-8 relative flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div>
              <div className="mb-8">
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                      stroke="#A1F480"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      stroke="#A1F480"
                      strokeWidth="2.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white text-3xl font-black mb-6 tracking-tight leading-tight">
                VISIT OUR
                <br />
                OFFICE
              </h3>
              <div className="text-white/80 text-base space-y-1 leading-relaxed">
                <p className="font-bold text-white mb-2">India</p>
                <p>Nasuja building,</p>
                <p>H. No. 1 - 89 / G / 36,</p>
                <p>Plot No. 36 Shilpi Valley,</p>
                <p>Madhapur,</p>
                <p>Hyderabad - 500081.</p>
              </div>
            </div>
            <div className="self-end mt-8">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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

          {/* Call Us Card */}
          <div className="bg-gray-100 rounded-3xl p-8 relative flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div>
              <div className="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black text-3xl font-black mb-6 tracking-tight">
                CALL US
              </h3>
              <p className="text-black/70 text-lg font-medium">
                +1 (786) 607 9177
              </p>
            </div>
            <div className="self-end mt-12">
              <div className="w-12 h-12 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
    </div>
  );
};

export default ContactCards;
