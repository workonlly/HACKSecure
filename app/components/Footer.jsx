import Link from "next/link";
const nithLogo = "/assets/nith.png";

const Footer = () => {
  return (
    <footer className="bg-[#33110E] border-t border-[#5A2A25] pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
          {/* Column 1 - Institute Info with Logo and Social */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex gap-2 space-y-2 items-center">
              <img
                src={nithLogo}
                alt="NIT Hamirpur"
                className="h-8 md:h-10 w-auto object-contain rounded-lg shadow-lg"
              />
              <span className="text-lg md:text-xl font-bold text-white">
                NIT Hamirpur
              </span>
            </div>
            <p className="text-[#E3AFA0] text-sm md:text-base leading-relaxed">
              Empowering innovation through code, creativity, and collaboration.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <Link
                href="https://www.instagram.com/nit_hamirpur_official/"
                target="_blank"
                rel="noreferrer"
                className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                href="https://twitter.com/NITHamirpur"
                target="_blank"
                rel="noreferrer"
                className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/school/nit-hamirpur/"
                target="_blank"
                rel="noreferrer"
                className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/NITHamirpur/"
                target="_blank"
                rel="noreferrer"
                className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#E3AFA0] text-xs md:text-sm hover:text-[#E8A87C] transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 md:w-4 md:h-4 mr-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/problem-statements"
                  className="text-[#E3AFA0] text-xs md:text-sm hover:text-[#E8A87C] transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 md:w-4 md:h-4 mr-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Problem Statements
                </Link>
              </li>
              <li>
                <Link
                  href="/prizes"
                  className="text-[#E3AFA0] text-xs md:text-sm hover:text-[#E8A87C] transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 md:w-4 md:h-4 mr-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Prizes
                </Link> 
              </li>
              <li>
              </li>
              <li>
                <Link
                  href="/accommodation"
                  className="text-[#E3AFA0] text-xs md:text-sm hover:text-[#E8A87C] transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 md:w-4 md:h-4 mr-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Accommodation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">
              Resources
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#contact"
                  className="text-[#E3AFA0] text-xs md:text-sm hover:text-[#E8A87C] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="https://www.nith.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E3AFA0] text-xs md:text-sm hover:text-[#E8A87C] transition-colors"
                >
                  About NIT Hamirpur
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Stay Updated */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">
              Stay Updated
            </h3>
            <p className="text-[#E3AFA0] mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                className="bg-[#5A2A25]/50 text-white rounded-lg px-3 md:px-4 py-2 md:py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#E8A87C] border border-[#E8A87C]/50 placeholder:text-[#E3AFA0] text-xs md:text-sm"
                placeholder="Enter your email"
              />
              <button className="bg-[#E8A87C] hover:bg-[#E8A87C]/90 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors font-semibold text-xs md:text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#E8A87C]/10 pt-6 md:pt-8 text-center text-[#E3AFA0] text-xs md:text-sm">
          <p>Designed with ❤️ by the NIT Hamirpur Hackathon Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
