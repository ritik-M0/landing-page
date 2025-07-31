const Footer = () => (
  <footer className="bg-[#1D1D1D] text-[#F2F2F2] py-16 px-6 md:px-8 relative overflow-hidden">
    <div className="max-w-6xl mx-auto relative z-10">
      {/* Navigation Links */}
      <div className="text-center mb-8">
        <nav className="flex flex-wrap justify-center gap-1 text-sm md:text-base">
          <a href="#about" className="text-[#F2F2F2]/80 hover:text-[#A1F480] transition-colors px-3 py-1">
            About Us
          </a>
          <span className="text-[#F2F2F2]/40">|</span>
          <a href="#services" className="text-[#F2F2F2]/80 hover:text-[#A1F480] transition-colors px-3 py-1">
            Services
          </a>
          <span className="text-[#F2F2F2]/40">|</span>
          <a href="#industries" className="text-[#F2F2F2]/80 hover:text-[#A1F480] transition-colors px-3 py-1">
            Industries
          </a>
          <span className="text-[#F2F2F2]/40">|</span>
          <a href="#case-studies" className="text-[#F2F2F2]/80 hover:text-[#A1F480] transition-colors px-3 py-1">
            Case Studies
          </a>
        </nav>
      </div>

      {/* Tagline */}
      <div className="text-center mb-12">
        <p className="text-[#A1F480] text-lg font-medium">Your Partner in Reliable IT Innovation</p>
      </div>

      {/* Large FISSION Background Text */}
      <div className="relative mb-16">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#2A2A2A] select-none">FISSION</h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-[#F2F2F2]/10">
        {/* Copyright */}
        <div>
          <p className="text-[#F2F2F2]/60 text-sm">Copyright © 2025 Fission. All rights reserved.</p>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-4">
          <span className="text-[#F2F2F2]/60 text-sm">@fission.it</span>
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="#"
              className="w-8 h-8 bg-[#A1F480] rounded-full flex items-center justify-center hover:bg-[#A1F480]/80 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="#1D1D1D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="w-8 h-8 bg-[#A1F480] rounded-full flex items-center justify-center hover:bg-[#A1F480]/80 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61173 13.2884 4.19445 12.773 4.95371C12.2575 5.71297 11.9877 6.61435 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39624C5.36074 6.60667 4.01032 5.43666 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
                  stroke="#1D1D1D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-8 h-8 bg-[#A1F480] rounded-full flex items-center justify-center hover:bg-[#A1F480]/80 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#1D1D1D" strokeWidth="2" />
                <path
                  d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                  stroke="#1D1D1D"
                  strokeWidth="2"
                />
                <path
                  d="M17.5 6.5H17.51"
                  stroke="#1D1D1D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="w-8 h-8 bg-[#A1F480] rounded-full flex items-center justify-center hover:bg-[#A1F480]/80 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="#1D1D1D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="2"
                  y="9"
                  width="4"
                  height="12"
                  stroke="#1D1D1D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="#1D1D1D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer