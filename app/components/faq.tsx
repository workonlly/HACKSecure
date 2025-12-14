"use client";

import { useState } from "react";

const faqs = [
  {
    id: "FILE_001",
    question: "What exactly is Hack 5.0?",
    answer: "It is not just a hackathon—it is an epic fusion of creativity, caffeine, and code! Think of it as a 48-hour sprint where brilliant minds come together to solve real problems, build cool stuff, and maybe win some brag-worthy prizes.",
  },
  {
    id: "FILE_002",
    question: "Who can participate?",
    answer: "Whether you're a coding ninja, a design wizard, or just someone with crazy ideas—everyone is welcome! Students, beginners, pros... if you have got the passion, you have got a spot here.",
  },
  {
    id: "FILE_003",
    question: "How do I register?",
    answer: "Just click that big, shiny 'Register Now' button on our website, fill in your details, and boom—you are in! Do not wait too long though; spots fill up fast!",
  },
  {
    id: "FILE_004",
    question: "What if I do not have a team?",
    answer: "No worries! We have got a team formation session before the hackathon kicks off. So, you will find your crew and maybe your next best friends.",
  },
  {
    id: "FILE_005",
    question: "Can I participate solo?",
    answer: "No, teams must have a minimum of 2 members (maximum 4). We will help you find teammates if needed!",
  },
  {
    id: "FILE_006",
    question: "Is there a registration fee?",
    answer: "No, Hack 5.0 is completely free! Just register and you are in. There are no registration fees or hidden charges.",
  },
];

// --- CYBER HEADER (Reused for Consistency) ---
const CyberHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="relative text-center mb-20 group">
    <div className="flex items-center justify-center gap-3 mb-2 opacity-70">
       <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-600"></div>
       <span className="text-blue-500 text-[10px] font-mono tracking-[0.2em] uppercase">
         /root/database/{title.toLowerCase().replace(' ', '_')}
       </span>
       <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blue-600"></div>
    </div>

    <div className="relative inline-block">
      <span className="absolute -left-4 md:-left-8 top-0 text-3xl md:text-5xl font-thin text-blue-700 animate-pulse">[</span>
      <span className="absolute -right-4 md:-right-8 top-0 text-3xl md:text-5xl font-thin text-blue-700 animate-pulse">]</span>
      <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase z-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
          {title}
        </span>
      </h2>
    </div>

    <div className="mt-4 flex flex-col items-center gap-1">
       <div className="w-32 h-2 bg-[#020617] border border-blue-800 skew-x-[-20deg] p-[1px]">
          <div className="h-full w-full bg-blue-600/20 relative">
              <div className="absolute top-0 left-0 h-full w-2/3 bg-cyan-500 animate-[shimmer_2s_infinite]"></div>
          </div>
       </div>
    </div>
    
    {subtitle && (
      <p className="mt-6 text-blue-200/60 max-w-2xl mx-auto font-light leading-relaxed font-mono text-sm">
        {subtitle}
      </p>
    )}
  </div>
);

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-black min-h-screen overflow-hidden">
      
      {/* Background Grid & Vignette */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]"></div>
      </div>

      <style jsx>{`
        .clip-folder {
          clip-path: polygon(
            0 0, 
            100% 0, 
            100% 100%, 
            15% 100%, 
            0 80%
          );
        }
        .clip-corner-top {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* SECTION HEADER */}
        <CyberHeader 
          title="FAQ_DATABASE" 
          subtitle="Decrypting common user queries. Access level: PUBLIC."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="group relative pl-4">
                
                {/* --- LEFT SIDE CONNECTING LINE --- */}
                <div className={`absolute left-0 top-0 bottom-0 w-[1px] transition-colors duration-300 ${isOpen ? 'bg-cyan-500' : 'bg-blue-900'}`}>
                    {/* Glowing Node */}
                    <div className={`absolute top-6 -left-[3px] w-2 h-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-blue-900'}`}></div>
                </div>

                {/* --- THE DATA MODULE --- */}
                <div 
                  className={`
                    relative bg-[#020617] border overflow-hidden transition-all duration-300 clip-corner-top
                    ${isOpen ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.1)]' : 'border-blue-900/40 hover:border-cyan-500/30'}
                  `}
                >
                  
                  {/* Background Tech Pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#1e3a8a_10px,#1e3a8a_11px)]"></div>
                  
                  {/* Hover Scanline */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] z-20 pointer-events-none shadow-[0_0_10px_#22d3ee]"></div>

                  {/* QUESTION HEADER (Clickable) */}
                  <button
                    className="w-full p-6 text-left flex justify-between items-center text-white relative z-10"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center gap-4">
                      {/* ID Badge */}
                      <div className={`
                         hidden md:flex items-center justify-center px-2 py-1 text-[9px] font-mono border 
                         ${isOpen ? 'border-cyan-500 text-cyan-400 bg-cyan-950/30' : 'border-blue-800 text-blue-600 bg-blue-950/20'}
                      `}>
                        {faq.id}
                      </div>

                      <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-cyan-400'}`}>
                        {faq.question}
                      </h3>
                    </div>
                    
                    {/* Animated Icon */}
                    <div className={`relative w-8 h-8 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                       <div className="absolute inset-0 border border-blue-800/50 rounded-full"></div>
                       <svg className={`w-4 h-4 transition-colors ${isOpen ? 'text-cyan-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                       </svg>
                    </div>
                  </button>

                  {/* ANSWER CONTENT (Collapsible) */}
                  <div
                    className={`
                      relative z-10 border-t transition-all duration-300 ease-in-out bg-black/40
                      ${isOpen ? 'max-h-96 opacity-100 border-cyan-500/30' : 'max-h-0 opacity-0 border-transparent'}
                    `}
                  >
                    <div className="p-6 pt-4 relative">
                      {/* Inner Decoration */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent"></div>
                      
                      <div className="text-[10px] text-blue-500 font-mono mb-2 flex items-center gap-2">
                         <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                         :: DECRYPTED_DATA ::
                      </div>
                      
                      <p className="text-blue-100/80 font-mono text-sm leading-relaxed pl-4 border-l border-blue-900/50">
                        {faq.answer}
                      </p>

                      {/* Bottom Right Decoration */}
                      <div className="absolute bottom-2 right-2 flex gap-1">
                         <div className="w-1 h-1 bg-blue-800"></div>
                         <div className="w-1 h-1 bg-blue-700"></div>
                         <div className="w-1 h-1 bg-blue-600"></div>
                      </div>
                    </div>
                  </div>

                  {/* Corner Visuals */}
                  <div className={`absolute top-0 right-0 p-1 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                     <div className="w-16 h-4 border-b border-l border-cyan-500/30 bg-cyan-950/10 clip-path-polygon-[0_0,100%_0,100%_100%,10px_100%]"></div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}