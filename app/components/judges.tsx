"use client";

import React from "react";

interface Person {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin?: string;
}

const mentors: Person[] = [
  {
    name: "Sourav Sahoo",
    role: "GSOC contributor and mentor 2018-19",
    company: "Computer Scientist @ Adobe",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227132/IMG_6677_jlwl9b.jpg",
    linkedin: "https://www.weekday.works/people/sourav-sahoo-souravsahoo",
  },
  {
    name: "Avinal",
    role: "GSOC mentor @ Fossology || GSOD Contributor 2020@VLC",
    company: "SDE II @ RED HAT",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227115/WhatsApp_Image_2025-03-17_at_21.04.26_b63612c7_wb2qxh.jpg",
    linkedin: "https://githubcampus.expert/avinal/",
  },
  {
    name: "Udit Gulati",
    role: "GSoC 2019",
    company: "Software Engineer",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227112/WhatsApp_Image_2025-03-17_at_21.04.27_d3700681_y7zvf9.jpg",
    linkedin: "https://www.linkedin.com/in/uditgulati0/",
  },
  {
    name: "Amit Chambial",
    role: "",
    company: "SDE III @ Netomi",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227112/WhatsApp_Image_2025-03-17_at_21.04.28_a4067d69_txzega.jpg",
    linkedin: "http://linkedin.com/in/amit-chambial",
  },
  {
    name: "Nimit Bhardwaj",
    role: "",
    company: "Lead Tech @ D.E Shaw Group",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227115/WhatsApp_Image_2025-03-17_at_21.04.29_ff888811_s3x4iw.jpg",
    linkedin: "https://www.linkedin.com/in/nimit-bhardwaj-b137a3116",
  },
  {
    name: "Vishal Choudhary",
    role: "",
    company: "Computer Scientist @ Adobe",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227120/WhatsApp_Image_2025-03-17_at_21.04.30_df660d77_uxjhg5.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Amit Yadav",
    role: "",
    company: "Senior Blockchain Engineer @ Elys Network",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742227116/WhatsApp_Image_2025-03-17_at_21.04.30_f3bbc256_nvtt4d.jpg",
    linkedin: "http://linkedin.com/in/amityadav9",
  },
  {
    name: "Vishal Bhardwaj",
    role: "",
    company: "SDE III @ Dialpad",
    image:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1742301680/WhatsApp_Image_2025-03-18_at_14.40.09_176e54b2_wx2hgu.jpg",
    linkedin: "http://linkedin.com/in/vishal-bhardwaj-b72702114",
  },
];

function OrbitalPersonCard({ person }: { person: Person }) {
  return (
    <div className="relative group w-full h-full">
      {/* The Orbital Card Container */}
      <div className="relative h-full flex flex-col items-center rounded-[2rem] bg-black border border-blue-900/30 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:-translate-y-2">
        
        {/* --- 1. Moving Scan Line Effect --- */}
        <div className="absolute top-0 bottom-0 left-[-10px] w-[20px] bg-blue-500/10 blur-xl -skew-x-12 group-hover:left-[120%] transition-all duration-[1.5s] ease-in-out pointer-events-none z-0"></div>

        {/* --- 2. Top UI Dots --- */}
        <div className="absolute top-6 left-6 flex items-center gap-2 opacity-50 z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          <div className="w-1 h-1 rounded-full bg-blue-500/50"></div>
          <div className="h-[1px] w-8 bg-blue-500/30"></div>
        </div>

        {/* --- 3. Image Section (Floating Orb) --- */}
        <div className="mt-10 mb-4 relative z-10">
           {/* Outer Rotating Ring (On Hover) */}
           <div className="absolute inset-[-4px] border border-dashed border-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[spin_10s_linear_infinite]"></div>
           
           {/* Image Container */}
           <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-b from-blue-900/20 to-black border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] overflow-hidden">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
           </div>
        </div>

        {/* --- 4. Content Section --- */}
        <div className="px-6 pb-8 text-center relative z-10 flex-1 flex flex-col items-center w-full">
          <h3 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-blue-400 transition-colors">
            {person.name}
          </h3>
          
          <div className="text-xs font-mono text-blue-500 mb-2 uppercase tracking-wider">
             {person.company}
          </div>
          
          {person.role && (
             <p className="text-xs text-slate-400 mb-4 line-clamp-2 max-w-[90%]">
               {person.role}
             </p>
          )}

          {/* Spacer to push button down if needed */}
          <div className="flex-1"></div>

          {/* LinkedIn Button (Orbital Pill) */}
          {person.linkedin && (
             <a 
               href={person.linkedin}
               target="_blank"
               rel="noopener noreferrer"
               className="mt-2 px-6 py-1.5 rounded-full border border-blue-800 bg-blue-950/20 text-blue-400 text-xs font-mono hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 flex items-center gap-2"
             >
               <span>CONNECT</span>
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </a>
          )}
        </div>

        {/* --- 5. Bottom Curve Decoration --- */}
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-blue-500 fill-none" strokeWidth="1.5">
             <path d="M 0 100 Q 50 100 100 50" />
          </svg>
        </div>

      </div>
    </div>
  );
}

export default function Judges() {
  return (
    <div className="min-h-screen text-white py-20 bg-black relative overflow-hidden" id="judges">
      
      {/* --- Ambient Background Glow --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
         <div className="relative text-center mb-24 group">
  
  {/* --- 1. TOP DECORATION: File Path --- */}
  <div className="flex items-center justify-center gap-3 mb-2 opacity-70">
     <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-blue-600"></div>
     <span className="text-blue-500 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase">
       /sys/access/personnel_log
     </span>
     <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-blue-600"></div>
  </div>

  {/* --- 2. MAIN TITLE COMPLEX --- */}
  <div className="relative inline-block">
    
    {/* Animated Brackets [ ] */}
    <span className="absolute -left-6 md:-left-12 top-0 text-4xl md:text-6xl font-thin text-blue-700 animate-pulse">[</span>
    <span className="absolute -right-6 md:-right-12 top-0 text-4xl md:text-6xl font-thin text-blue-700 animate-pulse">]</span>

    {/* The Title */}
    <h2 className="relative text-4xl md:text-6xl font-black text-white tracking-tighter uppercase z-10">
      MENTORS_<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        &_JUDGES
      </span>
      
      {/* Glitch Shadow (Visual Noise) */}
      <span className="absolute top-0 left-0 -ml-[2px] text-blue-500/30 -z-10 mix-blend-screen animate-pulse select-none">
        MENTORS_&_JUDGES
      </span>
    </h2>
  </div>

  {/* --- 3. CYBER DIVIDER (Loading Bar) --- */}
  <div className="mt-8 flex flex-col items-center gap-1">
     
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
        <span className="animate-pulse">AUTH_VERIFIED</span>
        <span>LEVEL_05</span>
     </div>

  </div>
  
  {/* Optional: Description Text below the cyber divider */}
  <p className="mt-6 text-blue-200/60 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
     Distinguished panel of experts authorized to evaluate system protocols.
  </p>
</div>  
        </div>

        {/* --- Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((person, index) => (
            <OrbitalPersonCard key={index} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}