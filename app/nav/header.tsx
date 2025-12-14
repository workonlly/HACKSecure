"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Judges", href: "#judges" },
  { name: "Prizes", href: "#prizes" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Organizers", href: "#team-section" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
  { name: "Certificates", href: "#certificate" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showHackText, setShowHackText] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setShowHackText(window.scrollY > heroHeight * 0.5);
      }

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    if (href === "/team") {
      router.push("/team");
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .border-gradient {
          background: linear-gradient(90deg, transparent, #22d3ee, transparent);
          background-size: 200% 100%;
          animation: border-flow 3s linear infinite;
        }
        .clip-nav {
           clip-path: polygon(
             15px 0, 100% 0, 
             100% calc(100% - 15px), calc(100% - 15px) 100%, 
             0 100%, 0 15px
           );
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 bg-black/90 backdrop-blur-md"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center relative">
          
          {/* --- LEFT: LOGO TERMINAL --- */}
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-3 transition-all duration-500 ${showHackText ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 hidden'}`}>
               <a href="#home" onClick={(e) => handleNavLinkClick(e, "#home")} className="group relative">
                  <div className="text-2xl font-black italic tracking-tighter text-white">
                     <span className="text-cyan-400">HACK</span> 5.0
                  </div>
               </a>
            </div>
            <div className={`flex items-center gap-3 ${showHackText ? 'hidden' : 'flex'}`}>
               <div className="flex items-center bg-blue-950/20 border border-blue-800/50 px-3 py-1 clip-nav hover:border-cyan-500/50 transition-colors">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csec-RitzmBrgdmOMfzaijUqHFSmOVA4LzO.png" alt="CSEC" className="w-8 h-8 object-contain" />
                  <div className="h-6 w-[1px] bg-blue-700/50 mx-3"></div>
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29_20250208_222328_0000-50pdDbAwyrTeA1mMlMT3c72vROO2oA.png" alt="HACK" className="w-8 h-8 object-contain" />
               </div>
            </div>
          </div>

          {/* --- CENTER: THE MAIN NAV MODULE --- */}
          <div className="hidden lg:flex items-center justify-center">
            
            <div className="relative group/nav">
              {/* Outer Glow Container */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-lg blur-sm opacity-50"></div>
              
              {/* The Nav Bar Itself */}
              <div className="relative flex items-center px-6 h-12 bg-[#020617] border border-blue-900/50 clip-nav backdrop-blur-md">
                
                {/* Moving Border Lines */}
                <div className="absolute top-0 left-0 right-0 h-[1px] border-gradient opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] border-gradient opacity-50"></div>

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500"></div>

                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <div key={link.name} className="flex items-center">
                      <a
                        href={link.href}
                        onClick={(e) => handleNavLinkClick(e, link.href)}
                        className={`
                          relative px-3 py-2 text-[11px] font-bold font-mono uppercase tracking-wider transition-all duration-200
                          hover:text-cyan-400 group/link
                          ${isActive ? "text-cyan-400" : "text-slate-400"}
                        `}
                      >
                        {/* Hover Glitch Effect */}
                        <span className="block group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform duration-100">
                           {isActive && <span className="mr-1 text-cyan-600">[</span>}
                           {link.name}
                           {isActive && <span className="ml-1 text-cyan-600">]</span>}
                        </span>
                        
                        {/* Active Underline */}
                        {isActive && (
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-cyan-500 shadow-[0_0_8px_#22d3ee]"></div>
                        )}
                      </a>

                      {/* Separator */}
                      {idx !== navLinks.length - 1 && (
                        <div className="w-[1px] h-3 bg-blue-900/50 mx-1"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* --- RIGHT: MOBILE TOGGLE --- */}
          <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-cyan-600/80 bg-black/40 px-3 py-1 rounded border border-blue-900/30">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span> 
                ONLINE
             </div>

             <button
                className="lg:hidden relative w-12 h-10 border border-blue-800 bg-blue-950/20 clip-nav flex flex-col justify-center items-center gap-1.5 group hover:bg-cyan-900/30 transition-all"
                onClick={() => setIsOpen(!isOpen)}
             >
                <span className={`w-6 h-[2px] bg-cyan-400 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-4 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-6 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-[2px] bg-cyan-400 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
             </button>
          </div>

        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setIsOpen(false)}>
           <div className="absolute inset-0 opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%),linear-gradient(90deg,rgba(0,0,0,0),rgba(255,255,255,0.1))] bg-[length:100%_4px]"></div>
        </div>

        <div className={`absolute right-0 top-0 bottom-0 w-80 bg-[#02040a] border-l-2 border-cyan-600 transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="absolute top-0 right-0 w-16 h-16 border-b-2 border-l-2 border-blue-800"></div>
           <div className="absolute bottom-0 left-0 w-16 h-16 border-t-2 border-r-2 border-blue-800"></div>

           <div className="relative flex-1 flex flex-col p-8 pt-24 overflow-y-auto">
              <div className="text-xs font-mono text-blue-500 mb-8 pb-2 border-b border-blue-900 flex justify-between">
                 <span>// NAV_PROTOCOL</span>
                 <span className="animate-pulse">_ACTIVE</span>
              </div>

              <div className="flex flex-col gap-2">
                 {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                       <a
                         key={link.name}
                         href={link.href}
                         onClick={(e) => handleNavLinkClick(e, link.href)}
                         style={{ transitionDelay: `${idx * 50}ms` }}
                         className={`
                           relative group block p-4 font-mono text-lg uppercase tracking-wider transition-all duration-300 clip-nav
                           ${isActive 
                             ? "bg-cyan-900/20 text-cyan-400 border-l-4 border-cyan-500" 
                             : "text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent hover:border-blue-500"
                           }
                           ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
                         `}
                       >
                          <div className="flex justify-between items-center">
                             <span>{link.name}</span>
                             <span className={`text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'opacity-100' : ''}`}>
                                [GO]
                             </span>
                          </div>
                       </a>
                    );
                 })}
              </div>
           </div>
        </div>
      </div>
    </>
  );
}