'use client';
import React, { useState, useEffect } from 'react';

// --- SYSTEM HEADER COMPONENT (Internal) ---
const SystemHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="relative text-center mb-16 group z-20">
    {/* File Path Decoration */}
    <div className="flex items-center justify-center gap-3 mb-4 opacity-70">
       <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-blue-600"></div>
       <span className="text-blue-500 text-[10px] font-mono tracking-[0.2em] uppercase">
         /root/system_boot/hack_6.0
       </span>
       <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-blue-600"></div>
    </div>

    {/* Main Title */}
    <div className="relative inline-block">
      <span className="absolute -left-6 md:-left-12 top-0 text-4xl md:text-8xl font-thin text-blue-900 animate-pulse">[</span>
      <span className="absolute -right-6 md:-right-12 top-0 text-4xl md:text-8xl font-thin text-blue-900 animate-pulse">]</span>
      
      {/* Glitch Title */}
      <h1 
        className="text-6xl md:text-9xl font-black tracking-tighter text-white glitch-blue"
        data-text={title}
        style={{ fontFamily: "'Science Gothic', sans-serif" }}
      >
        HACK <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-600">6.0</span>
      </h1>
    </div>

    {/* Loading Bar */}
    <div className="mt-3 flex flex-col items-center gap-1">
       <div className="w-64 h-2 bg-[#020617] border border-blue-800 skew-x-[-20deg] p-[1px]">
          <div className="h-full w-full bg-blue-900/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-2/3 bg-cyan-500 animate-[shimmer_2s_infinite]"></div>
          </div>
       </div>
       <div className="flex justify-between w-64 text-[9px] font-mono text-blue-500 mt-1">
          <span>SYSTEM_READY</span>
          <span>V.6.0.1</span>
       </div>
    </div>
    
    {subtitle && (
      <p className="mt-6 text-blue-200/60 max-w-xl mx-auto font-mono text-xs md:text-sm tracking-wide leading-relaxed uppercase">
        &gt; {subtitle} <span className="animate-pulse">_</span>
      </p>
    )}
  </div>
);

function Homee() {
  // Set target date
  const targetDate = new Date('2026-02-21T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative pt-3 h-screen w-full overflow-hidden bg-black text-white font-mono">
      
      <style jsx>{`
        /* Blue Glitch Effect */
        .glitch-blue {
          position: relative;
        }
        .glitch-blue::before, .glitch-blue::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
        }
        .glitch-blue::before {
          left: 2px;
          text-shadow: -1px 0 #1e3a8a; /* Dark Blue */
          clip-path: inset(44% 0 61% 0); 
          animation: glitch 2.5s infinite linear alternate-reverse;
        }
        .glitch-blue::after {
          left: -2px;
          text-shadow: -1px 0 #22d3ee; /* Cyan */
          clip-path: inset(10% 0 80% 0); 
          animation: glitch 3s infinite linear alternate-reverse;
        }
        @keyframes glitch {
          0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(92% 0 1% 0); transform: translate(1px, -1px); }
          40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 2px); }
          60% { clip-path: inset(25% 0 58% 0); transform: translate(2px, 1px); }
          80% { clip-path: inset(54% 0 7% 0); transform: translate(-1px, -2px); }
          100% { clip-path: inset(58% 0 43% 0); transform: translate(1px, 2px); }
        }

        /* Deep Net Grid */
        .grid-floor {
          background-image: 
            linear-gradient(rgba(30, 58, 138, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 138, 0.2) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: perspective(1000px) rotateX(60deg) translateY(-100px) scale(2);
          opacity: 0.4;
          mask-image: linear-gradient(to bottom, transparent, black);
        }

        /* Angled Data Vault */
        .clip-vault {
          clip-path: polygon(
            0 0, 
            100% 0, 
            100% calc(100% - 20px), 
            calc(100% - 20px) 100%, 
            0 100%
          );
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none ">
        {/* Deep Blue Void */}
        <div className="absolute inset-0 bg-radial-gradient(circle at center, #0a0a1a 0%, #000000 100%)"></div>
        
        {/* Moving Grid */}
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] grid-floor"></div>
        
        {/* Scanning Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(0,0,0,0.06),rgba(0,0,0,0.02),rgba(0,0,0,0.06))] z-[1] bg-[length:100%_4px,3px_3px]"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 w-full">
        
        {/* --- HEADER SECTION --- */}
        <SystemHeader 
          title="HACK 6.0" 
          subtitle="INITIALIZING SEQUENCER // TARGET: 2026" 
        />

        {/* --- COUNTDOWN DATABANKS --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl px-4">
          {[
            { label: 'DAYS', value: timeLeft.days, code: 'D-SYN' },
            { label: 'HOURS', value: timeLeft.hours, code: 'H-CLK' },
            { label: 'MINUTES', value: timeLeft.minutes, code: 'M-CYC' },
            { label: 'SECONDS', value: timeLeft.seconds, code: 'S-TIC' }
          ].map((item, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* The Data Vault Container */}
              <div className="relative bg-[#050510]/90 border border-blue-900/50 clip-vault p-6 md:p-8 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:-translate-y-1">
                
                {/* Background Circuit Pattern (Blue Stroke) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%233b82f6' fill-opacity='0.4'/%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' stroke='%233b82f6' stroke-width='1' stroke-opacity='0.2'/%3E%3C/svg%3E")` }}></div>

                {/* Top Status Bar */}
                <div className="w-full flex justify-between items-center mb-4 border-b border-blue-900/30 pb-2">
                   <span className="text-[9px] font-mono text-blue-600">{item.code}::0{index+1}</span>
                   <div className="flex gap-1">
                      <div className="w-1 h-1 bg-blue-800 rounded-full"></div>
                      <div className="w-1 h-1 bg-cyan-600 rounded-full animate-pulse"></div>
                   </div>
                </div>

                {/* Value Display */}
                <div className="relative z-10">
                   <div 
                     className="text-5xl md:text-7xl font-bold text-white mb-1 tabular-nums tracking-tight drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                   >
                     {String(item.value).padStart(2, '0')}
                   </div>
                </div>

                {/* Label */}
                <div className="text-cyan-500 text-xs md:text-sm font-bold tracking-[0.3em] bg-blue-950/30 px-3 py-1 rounded border border-blue-800/30 group-hover:bg-cyan-950/30 group-hover:text-cyan-300 transition-colors">
                  {item.label}
                </div>

                {/* Scanline Overlay (On Hover) */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-[scan_1.5s_linear_infinite] z-20 pointer-events-none shadow-[0_0_10px_#22d3ee]"></div>
                
                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-600 group-hover:border-cyan-400 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

     

      </div>
    </div>
  );
}

export default Homee;