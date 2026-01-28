"use client";
import Link from "next/link";
import { useState } from "react";
const nithLogo = "/assets/nith-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Problem Statements", href: "/problem-statements" },
    { name: 'Prizes', href: '/prizes' },
    // { name: "Registration", href: "/registration" },
    { name: "Accommodation", href: "/accommodation" },
    { name: "Contact", href: "/contact" },
    { name: "Team", href: "/team" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#33110E] shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img src={nithLogo} alt="NIT Hamirpur" className="h-10 w-auto" />
            </Link>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F2D5C4]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="bg-[#44201C] border-t border-[#5A2A25]">
            <nav className="container mx-auto px-4 py-2">
              <ul>
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-[#5A2A25] last:border-0"
                  >
                    <Link
                      href={item.href}
                      className="block py-3 text-[#F2D5C4] hover:text-[#E8A87C] transition-colors"
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <header className="hidden lg:block sticky top-0 z-40 bg-[#33110E] shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/">
                <img
                  src={nithLogo}
                  alt="NIT Hamirpur"
                  className="h-14 w-auto"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex justify-end">
              <ul className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[#F2D5C4] hover:text-[#E8A87C] font-medium transition-colors relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E8A87C] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
