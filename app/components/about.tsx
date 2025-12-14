'use client';
import { useState, useEffect } from 'react';
import React from 'react';

const SciFiContainer = ({ children }: { children: React.ReactNode }) => {
  const [cpu, setCpu] = useState(98);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * (99 - 90 + 1) + 90));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] bg-black border-l-2 border-r-2 border-blue-900/50 flex overflow-hidden shadow-[0_0_50px_rgba(30,58,138,0.2)] font-mono group">
      
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none animate-[pan_20s_linear_infinite]"
           style={{
             backgroundImage: 'linear-gradient(rgba(29, 78, 216, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(29, 78, 216, 0.5) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none"></div>

      <div className="hidden md:flex w-14 flex-col items-center border-r border-blue-900/50 py-6 gap-6 bg-blue-950/10 backdrop-blur-sm z-10 relative">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-600 to-transparent opacity-50"></div>

        <div className="text-[10px] text-blue-400 font-bold tracking-widest rotate-180 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" style={{ writingMode: 'vertical-rl' }}>
           SYS_OPTIMAL
        </div>
        
        <div className="w-[1px] h-20 bg-blue-800 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-400 animate-[scan_2s_linear_infinite]"></div>
        </div>

        <div className="flex flex-col gap-2">
           {[...Array(8)].map((_, i) => (
             <div 
               key={i} 
               className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i % 2 === 0 ? 'bg-blue-500 shadow-[0_0_5px_blue]' : 'bg-blue-900'}`}
               style={{ animation: `pulse 1.5s infinite ${i * 0.2}s` }} // Staggered pulse
             ></div>
           ))}
        </div>
      </div>

      <div className="flex-1 relative flex flex-col z-10">
        
        <div className="h-16 border-b border-blue-900/60 flex items-center justify-between px-8 bg-gradient-to-r from-blue-950/20 to-transparent relative">
           
           <div className="absolute top-0 left-0 h-[1px] bg-blue-400 shadow-[0_0_10px_#60a5fa] animate-[width_3s_ease-in-out_infinite] w-full"></div>

           <h2 className="text-2xl font-black text-white tracking-tighter italic">
             <span className="text-blue-600 animate-pulse">///</span> TERMINAL_<span className="text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.6)]">BLUE</span>
           </h2>
           
           <div className="hidden sm:flex text-[10px] font-mono text-blue-300 gap-6 items-center">
             <div className="flex flex-col items-end">
                <span className="text-blue-500">CPU_LOAD</span>
                <span className="text-white font-bold">{cpu}%</span>
             </div>
             <div className="w-[1px] h-6 bg-blue-800"></div>
             <div className="flex flex-col items-end">
                <span className="text-blue-500">MEM_ALLOC</span>
                <span className="text-white font-bold">4TB</span>
             </div>
             <div className="px-2 py-1 bg-blue-500/10 border border-blue-500/50 text-blue-400 animate-pulse rounded">
                CONNECTED
             </div>
           </div>
        </div>

        <div className="relative flex-1 p-8 overflow-hidden">
           
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none opacity-10">
              <div className="absolute inset-0 border border-blue-500 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-10 border border-blue-500 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
           </div>

           <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-blue-500 opacity-60 animate-pulse"></div>
           <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-blue-500 opacity-60 animate-pulse"></div>

           <div className="relative z-20 text-blue-100 h-full">
              {children}
           </div>
        </div>

        <div className="h-8 bg-blue-950/30 border-t border-blue-900/60 flex items-center px-4 gap-4 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 animate-[pan_5s_linear_infinite]" 
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #2563eb 5px, #2563eb 10px)' }}>
           </div>

           <div className="h-2 w-2 bg-blue-400 animate-spin z-10"></div>
           <div className="text-[9px] text-blue-400 z-10">SYS_ID: <span className="text-white">884-XC</span></div>
           
           <div className="h-1 flex-1 bg-blue-900/30 relative overflow-hidden rounded-full z-10">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[shimmer_2s_infinite]"></div>
           </div>
        </div>
      </div>

      <div className="w-8 h-full flex flex-col justify-center gap-[3px] py-10 bg-[#020617] border-l border-blue-900/30 z-10">
         {[...Array(20)].map((_, i) => (
           <div 
             key={i} 
             className="w-full h-1 bg-blue-900/40 rounded-l-sm transition-all duration-300"
             style={{ 
               animation: `pulse 2s infinite ${i * 0.1}s`,
               backgroundColor: i > 15 ? 'rgba(37, 99, 235, 0.2)' : 'rgba(29, 78, 216, 0.6)' 
             }}
           ></div>
         ))}
      </div>

    </div>
  );
};

const StatCard = ({ stat }: { stat: { icon: React.ReactNode; title: string; text: string } }) => (
  <div className="relative group w-full aspect-video bg-[#020617] border border-blue-900/60 overflow-hidden cursor-pointer transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
    
    <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" 
         style={{ 
           backgroundImage: 'linear-gradient(45deg, #1e3a8a 25%, transparent 25%, transparent 75%, #1e3a8a 75%, #1e3a8a), linear-gradient(45deg, #1e3a8a 25%, transparent 25%, transparent 75%, #1e3a8a 75%, #1e3a8a)', 
           backgroundSize: '20px 20px', 
           backgroundPosition: '0 0, 10px 10px' 
         }}>
    </div>

    <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-800 group-hover:text-blue-400 transition-colors duration-300 z-10">
       
       <div className="w-12 h-12 border border-current flex items-center justify-center mb-3 relative group-hover:scale-110 transition-transform duration-300">

          <div className="w-0.5 h-0.5 bg-current absolute top-0 left-0"></div>
          <div className="w-0.5 h-0.5 bg-current absolute top-0 right-0"></div>
          <div className="w-0.5 h-0.5 bg-current absolute bottom-0 left-0"></div>
          <div className="w-0.5 h-0.5 bg-current absolute bottom-0 right-0"></div>
          
          {stat.icon}
       </div>

       <span className="text-xl font-mono tracking-wider font-bold mb-1">{stat.title}</span>
       <span className="text-[10px] font-mono tracking-widest opacity-80">{stat.text}</span>
    </div>

    <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400 shadow-[0_0_10px_#60a5fa] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_1.5s_linear_infinite] pointer-events-none z-20"></div>

    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-700 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-blue-500/30 z-10"></div>
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-700 z-10 group-hover:border-blue-400"></div>
    
    <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-blue-950/80 text-[8px] text-blue-500 font-mono border border-blue-800 backdrop-blur-sm group-hover:text-white group-hover:bg-blue-600 transition-colors">
      LIVE
    </div>

    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 pointer-events-none"></div>
  </div>
);

export default function AboutHackPage() {
     const stats = [
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "500+",
      text: "Participants"
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "₹ 1,50,000",
      text: "Prize Pool"
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "48",
      text: "Hours"
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#00B4D8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "3",
      text: "Tracks"
    }
  ];
  return (
    <div className="min-h-screen w-full bg-black text-white p-6 md:p-12 flex flex-col items-center relative overflow-hidden font-mono">
      
      

      <div className="w-full max-w-5xl flex flex-col gap-8 z-10">
        
        <div className="w-full">
          <SciFiContainer >
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="relative text-center mb-10 group">
  
  {/* --- 1. TOP DECORATION: File Path --- */}
  <div className="flex items-center justify-center gap-3 mb-2 opacity-70">
     <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-600"></div>
     <span className="text-blue-500 text-[10px] font-mono tracking-[0.2em] uppercase">
       /sys/info/about_module
     </span>
     <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blue-600"></div>
  </div>

  {/* --- 2. MAIN TITLE COMPLEX --- */}
  <div className="relative inline-block">
    
    {/* Animated Brackets [ ] */}
    <span className="absolute -left-4 md:-left-8 top-0 text-3xl md:text-4xl font-thin text-blue-700 animate-pulse">[</span>
    <span className="absolute -right-4 md:-right-8 top-0 text-3xl md:text-4xl font-thin text-blue-700 animate-pulse">]</span>

    {/* The Title */}
    <h1 className="relative text-3xl md:text-4xl font-black text-white tracking-tighter uppercase z-10">
      ABOUT_<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-blue-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
        HACK_5.0
      </span>
      
      {/* Glitch Shadow layer */}
      <span className="absolute top-0 left-0 -ml-[2px] text-[#22d3ee]/20 -z-10 mix-blend-screen animate-pulse select-none">
        ABOUT_HACK_5.0
      </span>
    </h1>
  </div>

  {/* --- 3. CYBER DIVIDER (Loading Bar) --- */}
  <div className="mt-4 flex flex-col items-center gap-1">
     
     {/* The Bar Container */}
     <div className="w-32 h-2 bg-[#020617] border border-blue-800 skew-x-[-20deg] relative overflow-hidden p-[1px]">
        {/* The Fill (Loading Effect) */}
        <div className="h-full w-full bg-blue-600/20 relative">
            <div className="absolute top-0 left-0 h-full w-2/3 bg-[#22d3ee] animate-[shimmer_2s_infinite]"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 flex gap-[2px]">
           {[...Array(10)].map((_, i) => (
             <div key={i} className="w-[1px] h-full bg-black/50"></div>
           ))}
        </div>
     </div>

  </div>
</div>
                
                <p className="text-slate-200 leading-relaxed text-sm md:text-base text-justify font-light">
                  HACK 5.0 is the fifth edition of the national-level onsite hackathon organized
                  by the <span className="text-[#22d3ee] font-bold">Computer Science Engineers' Community (CSEC)</span> of the Department of
                  Computer Science and Engineering, NIT Hamirpur. This premier event brings together
                  the brightest minds in technology to solve real-world problems through innovation
                  and collaboration.
                  <br /><br />
                  Over <span className="text-yellow-400 font-bold">48 hours</span>, participants will form teams, ideate, build, and present their
                  solutions to a panel of industry experts. With mentorship, workshops, and networking
                  opportunities, HACK 5.0 is more than just a competition—it's a platform for growth,
                  learning, and technological advancement.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-xs text-slate-400">STATUS: LIVE</span>
                </div>
                
              </div>
            </div>
          </SciFiContainer>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
           {stats.map((stat, index) => (
             <StatCard key={index} stat={stat} />
           ))}
        </div>

      </div>
    </div>
  );
}