"use client";

import React from "react";

export default function OrbitalTimeline() {
  const timelineEvents = [
    {
      date: "February 21, 2025",
      title: "Registration Opens",
      description: "Sign up and secure your spot for HACK 5.0",
    },
    {
      date: "March 21, 2025",
      title: "Registration Closes",
      description: "Last day to register for the hackathon",
    },
    {
      date: "March 22, 2025",
      title: "Screening Round",
      description: "Screening round for the Hack-5.0",
    },
    {
      date: "April 4, 2025",
      title: "Hackathon Kickoff",
      description: "Opening ceremony and hacking begins",
    },
    {
      date: "April 4-5, 2025",
      title: "Hacking Period",
      description: "48 hours of coding, building, and innovation",
    },
    {
      date: "April 5, 2025",
      title: "Project Submission",
      description: "Submit your projects for evaluation",
    },
    {
      date: "April 6, 2025",
      title: "Judging & Results",
      description: "Project evaluation and winner announcement",
    },
  ];

  return (
    <section id="timeline" className="py-20 min-h-screen bg-black relative overflow-hidden">
      
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HEADER --- */}
       <div className="relative text-center mb-32 pt-10 group">
  
  {/* --- 1. TOP DECORATION: File Path --- */}
  <div className="flex items-center justify-center gap-3 mb-2 opacity-70">
     <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-blue-600"></div>
     <span className="text-blue-500 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase">
       /root/system_events/log_05
     </span>
     <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-blue-600"></div>
  </div>

  {/* --- 2. MAIN TITLE COMPLEX --- */}
  <div className="relative inline-block">
    
    {/* Animated Brackets [ ] */}
    <span className="absolute -left-6 md:-left-10 top-0 text-4xl md:text-6xl font-thin text-blue-700 animate-pulse">[</span>
    <span className="absolute -right-6 md:-right-10 top-0 text-4xl md:text-6xl font-thin text-blue-700 animate-pulse">]</span>

    {/* The Title */}
    <h2 className="relative text-4xl md:text-6xl font-black text-white tracking-tighter uppercase z-10">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        Event_Timeline
      </span>
      
      {/* Glitch Shadow (Visual Noise) */}
      <span className="absolute top-0 left-0 -ml-[2px] text-blue-500/30 -z-10 mix-blend-screen animate-pulse select-none">
        Event_Timeline
      </span>
    </h2>
  </div>

  {/* --- 3. CYBER DIVIDER (Loading Bar) --- */}
  <div className="mt-6 flex flex-col items-center gap-1">
     
     {/* The Bar Container */}
     <div className="w-48 md:w-64 h-3 bg-[#020617] border border-blue-800 skew-x-[-20deg] relative overflow-hidden p-[2px]">
        {/* The Fill (Loading Effect) */}
        <div className="h-full w-full bg-blue-600/20 relative">
            {/* Moving block inside */}
            <div className="absolute top-0 left-0 h-full w-1/2 bg-blue-500 animate-[shimmer_2s_infinite]"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 flex gap-[2px]">
           {[...Array(20)].map((_, i) => (
             <div key={i} className="w-[2px] h-full bg-black/50"></div>
           ))}
        </div>
     </div>
     
     {/* Bottom Status Text */}
     <div className="flex justify-between w-48 md:w-64 text-[9px] text-blue-600 font-mono tracking-widest mt-1 opacity-80">
        <span className="animate-pulse">SYNCING...</span>
        <span>100%</span>
     </div>

  </div>
</div>

        <div className="relative max-w-6xl mx-auto">
          
          {/* --- CENTRAL SPINE (The Beam) --- */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
            {/* Moving Light Particle */}
            <div className="absolute top-0 left-[-2px] w-[6px] h-32 bg-blue-400 blur-md rounded-full animate-[scan_6s_linear_infinite]"></div>
          </div>

          <div className="flex flex-col gap-24">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''} group relative`}>
                  
                  {/* --- SPACER --- */}
                  <div className="hidden md:block w-[45%]" />

                  {/* --- ORBITAL NODE (Small & Static) --- */}
                  {/* Reverted to the smaller size (w-4 h-4), no outer rings */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 flex items-center justify-center z-30 pointer-events-none">
                     <div className="w-4 h-4 bg-[#050510] border-2 border-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  </div>

                  {/* --- THE CARD CONTAINER --- */}
                  <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:mr-24' : 'md:ml-24'}`}>
                    
                    {/* The Orbital Container */}
                    <div className="relative w-full rounded-[2rem] bg-black border border-blue-900/30 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:-translate-y-1">
                      
                      {/* 1. Moving Scan Line Effect */}
                      <div className="absolute top-0 bottom-0 left-[-10px] w-[20px] bg-blue-500/10 blur-xl -skew-x-12 group-hover:left-[120%] transition-all duration-[1.5s] ease-in-out pointer-events-none"></div>

                      {/* 2. Top UI Dots */}
                      <div className="absolute top-6 left-8 flex items-center gap-2 opacity-50">
                         <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                         <div className="w-1 h-1 rounded-full bg-blue-500/50"></div>
                         <div className="h-[1px] w-12 bg-blue-500/30"></div>
                      </div>

                      {/* 3. Bottom Curve SVG Decoration */}
                      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-500">
                         <svg viewBox="0 0 100 100" className="w-full h-full stroke-blue-400 fill-none" strokeWidth="2">
                            <path d="M 0 100 Q 50 100 100 50" />
                         </svg>
                      </div>

                      {/* 4. Content */}
                      <div className="p-8 pt-12 relative z-10">
                        {/* Background Watermark */}
                        <span className="text-6xl font-thin text-white/5 absolute top-2 right-6 select-none group-hover:text-blue-500/10 transition-colors duration-500 font-mono">
                          0{index + 1}
                        </span>

                        <div className="mb-1 text-blue-400 text-xs font-mono tracking-widest uppercase">
                          {event.date}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                          {event.title}
                          <span className="text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            ›
                          </span>
                        </h3>
                        
                        <p className="text-blue-200/60 text-sm font-light leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}