"use client";

import { useState } from "react";

// --- 1. THEMED CONFETTI ---
const CyberConfetti = () => {
  const confettiPieces = Array.from({ length: 20 }).map((_, i) => {
    const size = Math.random() * 6 + 4;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 1 + 0.5;
    const animationDelay = Math.random() * 0.2;
    const colors = ["#22d3ee", "#3b82f6", "#ffffff", "#1e3a8a"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <div
        key={i}
        className="absolute animate-fall"
        style={{
          width: Math.random() > 0.5 ? size : size / 2,
          height: size,
          backgroundColor: color,
          left: `${left}%`,
          top: "-5%",
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          zIndex: 10,
          clipPath: Math.random() > 0.5 ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confettiPieces}
    </div>
  );
};

// --- 2. HEADER (Kept Same) ---
const CyberHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="relative text-center mb-16 group">
    <div className="flex items-center justify-center gap-3 mb-2 opacity-70">
       <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-600"></div>
       <span className="text-blue-500 text-[10px] font-mono tracking-[0.2em] uppercase">
         /sys/rewards/{title.toLowerCase().replace(' ', '_')}
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


export default function Prizes() {
  const [showGrandPrizeConfetti, setShowGrandPrizeConfetti] = useState(false);

  return (
    <section id="prizes" className="py-20 relative bg-black min-h-screen overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]"></div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall { animation: fall linear forwards; }
        
        /* Funky Clip Path for Cards */
        .clip-cartridge {
          clip-path: polygon(
            0 0, 
            100% 0, 
            100% 85%, 
            85% 100%, 
            0 100%
          );
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* SECTION TITLE */}
        <CyberHeader 
          title="PRIZE_POOL" 
          subtitle="Celebrating excellence with substantial rewards for groundbreaking achievements." 
        />

        {/* --- 1. GRAND PRIZE: "THE ZERO-POINT CORE" --- */}
        <div className="flex justify-center mb-24">
          <div
            className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center group cursor-pointer"
            onMouseEnter={() => setShowGrandPrizeConfetti(true)}
            onMouseLeave={() => setShowGrandPrizeConfetti(false)}
          >
            {/* Spinning Rings */}
            <div className="absolute inset-0 rounded-full border border-blue-900/40 animate-[spin-slow_15s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border-t-2 border-b-2 border-cyan-500/20 animate-[spin_8s_linear_infinite]"></div>
            <div className="absolute inset-10 rounded-full border-l-2 border-r-2 border-blue-500/40 animate-[spin_6s_linear_infinite_reverse]"></div>

            {/* The Floating Core Div */}
            <div className="relative z-10 w-48 h-48 bg-black/80 backdrop-blur-md rounded-full border border-cyan-500/30 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.15)] group-hover:scale-110 transition-transform duration-500 overflow-hidden">
               
               {/* Inner Glow Pulse */}
               <div className="absolute inset-0 bg-radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%) animate-pulse"></div>
               
               <div className="relative z-20 text-center">
                  <div className="text-cyan-400 mb-2">
                    <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div className="text-[10px] font-mono text-blue-400 tracking-[0.2em] mb-1">GRAND PRIZE</div>
                  <div className="text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">₹40,000</div>
               </div>

               {/* Rotating scanning line inside the ball */}
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-[20%] w-full animate-[scan_2s_linear_infinite]"></div>
            </div>

            {showGrandPrizeConfetti && <CyberConfetti />}
          </div>
        </div>


        {/* --- 2. TRACK PRIZES: "DATA CARTRIDGES" --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "AI/ML Track",
              amount: "₹30,000",
              desc: "Neural Network Excellence",
              icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              dist: [{ p: "1st", a: "₹15,000" }, { p: "2nd", a: "₹10,000" }, { p: "3rd", a: "₹5,000" }]
            },
            {
              title: "Blockchain / DeFi",
              amount: "₹30,000",
              desc: "Decentralized Protocols",
              icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
              dist: [{ p: "1st", a: "₹15,000" }, { p: "2nd", a: "₹10,000" }, { p: "3rd", a: "₹5,000" }]
            },
            {
              title: "Open Innovation",
              amount: "₹30,000",
              desc: "Creative Problem Solving",
              icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
              dist: [{ p: "1st", a: "₹15,000" }, { p: "2nd", a: "₹10,000" }, { p: "3rd", a: "₹5,000" }]
            },
          ].map((prize, idx) => (
            <div key={idx} className="relative group min-h-[320px]">
              {/* Funky Cartridge Shape */}
              <div className="absolute inset-0 bg-[#0a0f1c] clip-cartridge border-l border-t border-r border-blue-900/50 group-hover:border-cyan-400/50 transition-all duration-300 ">
                
                {/* Decorative Top-Right Notch */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-blue-950/30 clip-path-polygon-[0_0,100%_0,100%_100%]"></div>
                
                {/* Content Layer */}
                <div className="absolute inset-0 p-8 flex flex-col items-center transition-all duration-300 group-hover:-translate-y-2">
                   
                   {/* Icon Hexagon */}
                   <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
                      <div className="absolute inset-0 bg-blue-900/20 clip-path-polygon-[50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%]"></div>
                      <svg className="w-8 h-8 text-cyan-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={prize.icon} /></svg>
                   </div>
                   
                   <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2 text-center">{prize.title}</h3>
                   <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">{prize.amount}</div>
                   <p className="text-xs font-mono text-slate-500 text-center max-w-[80%]">{prize.desc}</p>
                </div>

                {/* Slide-Up Distribution Panel (The "Secret Compartment") */}
                <div className="absolute bottom-0 left-0 w-full bg-[#020617] border-t border-cyan-500/30 p-6 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-20 overflow-hidden">
                   <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] text-cyan-500 font-mono animate-pulse">:: DISTRIBUTION ::</span>
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                   </div>
                   <div className="space-y-2 ">
                      {prize.dist.map((d, i) => (
                         <div key={i} className="flex justify-between text-sm font-mono border-b border-blue-900/30 pb-1">
                            <span className="text-slate-400">{d.p}</span>
                            <span className="text-white">{d.a}</span>
                         </div>
                      ))}
                   </div>
                </div>

             
              </div>
            </div>
          ))}
        </div>


        {/* --- 3. SPECIAL TRACKS: "NEON BARS" --- */}
        <CyberHeader title="SPECIAL_TRACKS" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {[
            { title: "ALL GIRLS TEAM", amount: "₹5,000", desc: "Outstanding performance by an all-female unit." },
            { title: "BEGINNERS HACK", amount: "₹5,000", desc: "Best project by a 1st-year squad." }
          ].map((item, idx) => (
             <div key={idx} className="relative group overflow-hidden">
                <div className="relative h-28 bg-[#030712] border border-blue-900/50 flex flex-row items-stretch p-1 hover:border-cyan-500/50 transition-colors">
                   
                   {/* Left Hazard Strip */}
                   <div className="w-2 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#1e3a8a_2px,#1e3a8a_4px)] group-hover:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#22d3ee_2px,#22d3ee_4px)] transition-all"></div>
                   
                   <div className="flex-1 flex flex-col justify-center px-6 relative z-10">
                      <h4 className="text-lg font-black text-white tracking-widest uppercase mb-1">{item.title}</h4>
                      <p className="text-xs font-mono text-blue-400/60">{item.desc}</p>
                   </div>
                   
                   {/* Right Amount Box */}
                   <div className="w-32 bg-blue-950/20 border-l border-blue-900/50 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-cyan-500/10 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                      <span className="text-2xl font-bold text-cyan-400 relative z-10">{item.amount}</span>
                   </div>
                </div>
             </div>
          ))}
        </div>


        {/* --- 4. SPONSOR TRACKS: "HOLO-SCREENS" --- */}
        <CyberHeader title="SPONSOR_TRACKS" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
              { title: "ETHEREUM", amount: "₹8,500+", desc: "Best use of ETH Stack" },
              { title: "GITHUB", amount: "SWAG_KIT", desc: "Best use of GitHub" }
           ].map((sponsor, idx) => (
              <div key={idx} className="relative p-8 group">
                 {/* The "Holo" Border */}
                 <div className="absolute inset-0 border-2 border-blue-900/30 clip-path-polygon-[0_0,100%_0,100%_80%,90%_100%,0_100%] group-hover:border-cyan-500/50 transition-colors bg-black/40 backdrop-blur-sm"></div>
                 
                 {/* Corner Brackets */}
                 <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500 opacity-50 group-hover:opacity-100"></div>
                 <div className="absolute bottom-0 right-16 w-4 h-4 border-b-2 border-r-2 border-cyan-500 opacity-50 group-hover:opacity-100"></div>

                 <div className="relative z-10 text-center">
                    <div className="text-blue-500 group-hover:text-cyan-400 transition-colors mb-4 transform group-hover:scale-110 duration-300 inline-block">
                       <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2 uppercase italic">{sponsor.title}</h3>
                    <div className="inline-block px-3 py-1 bg-blue-900/30 rounded text-cyan-300 font-mono text-lg mb-2">{sponsor.amount}</div>
                    <p className="text-sm text-slate-400">{sponsor.desc}</p>
                 </div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
}