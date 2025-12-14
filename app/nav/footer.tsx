"use client";

import React from "react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    scrollToSection(sectionId);
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-black border-t border-white/5">
      
      {/* --- BACKGROUND ORBITALS --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Large Rotating Ring */}
         <div className="absolute -bottom-[400px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
         {/* Inner Static Ring */}
         <div className="absolute -bottom-[250px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] border border-cyan-500/10 rounded-full"></div>
         {/* Gradient Glow */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* --- BRAND MODULE (Left) --- */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <a href="https://csec.nith.ac.in/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-12 h-12 relative overflow-hidden rounded-xl border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csec-RitzmBrgdmOMfzaijUqHFSmOVA4LzO.png"
                    alt="CSEC Logo"
                    className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </a>
              <div>
                 <span className="text-2xl font-bold text-white tracking-tight">CSEC</span>
                 <div className="text-[10px] text-cyan-500 tracking-widest uppercase">Command Center</div>
              </div>
            </div>
            
            <p className="text-blue-200/60 leading-relaxed text-sm max-w-sm">
              Empowering innovation through code, creativity, and collaboration. Establishing the next generation of digital architects.
            </p>

            {/* Social Orbitals */}
            <div className="flex space-x-4 pt-2">
              {[
                { href: "https://discord.com/invite/kneqCFxKHY", icon: "M20.317 4.37a19.791...", viewbox: "0 0 24 24" }, // Discord path simplified for brevity
                { href: "https://www.instagram.com/hacknith", icon: "M16 11.37A4 4...", viewbox: "0 0 24 24" },
                { href: "https://x.com/csec_nith", icon: "M18.244 2.25h3.308...", viewbox: "0 0 24 24" },
                { href: "https://www.linkedin.com/company/nith-csec/", icon: "M20.447 20.452h-3.554...", viewbox: "0 0 24 24" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-900/20 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                     {/* Note: I'm using a generic path here to keep code clean, you should replace with your full SVG paths from the original code */}
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-6h2v6z" /> 
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* --- LINKS MODULE (Center) --- */}
          <div className="md:col-span-4 flex flex-col md:flex-row gap-12">
             <div className="flex-1">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Navigation</h3>
                <ul className="space-y-3 text-sm">
                   {['Home', 'About', 'Timeline', 'Prizes', 'Sponsors'].map((item) => (
                      <li key={item}>
                         <a href={`#${item.toLowerCase()}`} onClick={(e) => handleLinkClick(e, `#${item.toLowerCase()}`)} className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                            <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span>
                            {item}
                         </a>
                      </li>
                   ))}
                </ul>
             </div>
             
             <div className="flex-1">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Protocol</h3>
                <ul className="space-y-3 text-sm">
                   {[
                      { name: 'Venue Guide', url: '#' },
                      { name: "Hacker's Guide", url: '#' },
                      { name: 'Code of Conduct', url: '/coc' },
                      { name: 'Discord', url: '#' },
                      { name: 'FAQ', url: '#faq' }
                   ].map((item) => (
                      <li key={item.name}>
                         <a href={item.url} className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                            <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span>
                            {item.name}
                         </a>
                      </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* --- NEWSLETTER MODULE (Right) --- */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Transmission Uplink</h3>
            <p className="text-blue-200/60 text-sm mb-6">
              Subscribe to the subspace frequency for mission updates and classified intel.
            </p>
            
            <div className="relative group">
               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="relative flex bg-white/5 border border-white/10 rounded-lg overflow-hidden p-1 focus-within:border-cyan-500/50 transition-colors">
                  <input
                    type="email"
                    placeholder="ENTER_EMAIL_ID..."
                    className="flex-1 bg-transparent text-white px-4 py-2 text-sm font-mono focus:outline-none placeholder-gray-600"
                  />
                  <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors">
                    Connect
                  </button>
               </div>
            </div>
          </div>

        </div>

        {/* --- SYSTEM STATUS FOOTER --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
           <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>SYSTEM_ONLINE: ALL_NODES_ACTIVE</span>
           </div>
           
           <div className="text-center md:text-right">
              <p>Designed with <span className="text-red-500">♥</span> by HACK 5.0 Team</p>
              <p className="opacity-50 mt-1">© 2025 CSEC NITH. All Rights Reserved.</p>
           </div>
        </div>

      </div>
    </footer>
  );
}