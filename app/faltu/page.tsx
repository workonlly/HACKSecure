"use client";

import React, { useState } from "react";

// --- 1. CYBER HEADER (System Log Style) ---
const CyberHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="relative text-center mb-20 group">
    {/* File Path Decoration */}
    <div className="flex items-center justify-center gap-3 mb-2 opacity-70">
       <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-blue-600"></div>
       <span className="text-blue-500 text-[10px] font-mono tracking-[0.2em] uppercase">
         /root/uplink/{title.toLowerCase().replace(' ', '_')}
       </span>
       <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-blue-600"></div>
    </div>

    {/* Main Title */}
    <div className="relative inline-block">
      <span className="absolute -left-6 md:-left-10 top-0 text-3xl md:text-5xl font-thin text-blue-700 animate-pulse">[</span>
      <span className="absolute -right-6 md:-right-10 top-0 text-3xl md:text-5xl font-thin text-blue-700 animate-pulse">]</span>
      <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase z-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
          {title}
        </span>
      </h2>
    </div>

    {/* Loading Bar */}
    <div className="mt-6 flex flex-col items-center gap-1">
       <div className="w-48 h-2 bg-[#020617] border border-blue-800 skew-x-[-20deg] p-[1px]">
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    setTimeout(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-black min-h-screen overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]"></div>
      </div>

      <style jsx>{`
        .clip-terminal {
          clip-path: polygon(
            0 0, 100% 0, 100% 100%, 
            10% 100%, 0 90%
          );
        }
        .clip-input {
           clip-path: polygon(
             0 0, 100% 0, 
             100% 70%, 95% 100%, 
             0 100%
           );
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HEADER --- */}
        <CyberHeader 
          title="GET IN TOUCH" 
          subtitle="Initialize communication protocols. Channel open for transmission." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT: TRANSMISSION TERMINAL (Form) --- */}
          <div className="lg:col-span-7">
            <div className="relative group">
              
              {/* Outer Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              {/* The Terminal Shell */}
              <div className="relative bg-[#020617] border border-blue-900/50 p-1 clip-terminal">
                
                {/* Header Bar of Terminal */}
                <div className="h-8 bg-blue-950/30 flex items-center justify-between px-4 border-b border-blue-900/50">
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                   </div>
                   <div className="text-[10px] font-mono text-blue-400">TERM_ID: 884-X</div>
                </div>

                <div className="p-8 md:p-10 relative">
                   {/* Background Scanline */}
                   <div className="absolute inset-0 pointer-events-none opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_4px)]"></div>

                   <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                     <span className="text-cyan-500 animate-pulse">///</span> 
                     COMMS_INTERFACE
                   </h3>

                   <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Input */}
                        <div className="relative group/input">
                           <label className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mb-1 block">Agent_Name</label>
                           <input
                             type="text"
                             name="name"
                             value={formData.name}
                             onChange={handleChange}
                             onFocus={() => handleFocus("name")}
                             onBlur={handleBlur}
                             className="w-full bg-blue-950/10 border-b-2 border-blue-900 text-white px-4 py-3 font-mono focus:outline-none focus:border-cyan-500 focus:bg-blue-950/30 transition-all placeholder-blue-900/50 clip-input"
                             placeholder="ENTER_ID..."
                             required
                           />
                           {focusedField === "name" && <div className="absolute right-0 top-8 text-cyan-500 text-xs animate-ping">_</div>}
                        </div>

                        {/* Email Input */}
                        <div className="relative group/input">
                           <label className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mb-1 block">Frequency_ID (Email)</label>
                           <input
                             type="email"
                             name="email"
                             value={formData.email}
                             onChange={handleChange}
                             onFocus={() => handleFocus("email")}
                             onBlur={handleBlur}
                             className="w-full bg-blue-950/10 border-b-2 border-blue-900 text-white px-4 py-3 font-mono focus:outline-none focus:border-cyan-500 focus:bg-blue-950/30 transition-all placeholder-blue-900/50 clip-input"
                             placeholder="USER@NET.COM"
                             required
                           />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="relative">
                         <label className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mb-1 block">Mission_Objective</label>
                         <select
                           name="subject"
                           value={formData.subject}
                           onChange={handleChange}
                           onFocus={() => handleFocus("subject")}
                           onBlur={handleBlur}
                           className="w-full bg-blue-950/10 border-b-2 border-blue-900 text-white px-4 py-3 font-mono focus:outline-none focus:border-cyan-500 focus:bg-blue-950/30 transition-all cursor-pointer appearance-none clip-input"
                           style={{ color: formData.subject === "" ? "#1e3a8a" : "white" }}
                           required
                         >
                           <option value="" disabled>SELECT_PROTOCOL</option>
                           <option value="general" className="bg-[#020617]">GENERAL_INQUIRY</option>
                           <option value="sponsorship" className="bg-[#020617]">SPONSORSHIP_REQ</option>
                           <option value="registration" className="bg-[#020617]">REGISTRATION_ISSUE</option>
                           <option value="technical" className="bg-[#020617]">TECH_SUPPORT</option>
                         </select>
                         <div className="absolute right-4 top-9 pointer-events-none text-blue-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                         </div>
                      </div>

                      {/* Message */}
                      <div className="relative">
                         <label className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mb-1 block">Encrypted_Payload</label>
                         <textarea
                           name="message"
                           rows={4}
                           value={formData.message}
                           onChange={handleChange}
                           onFocus={() => handleFocus("message")}
                           onBlur={handleBlur}
                           className="w-full bg-blue-950/10 border-b-2 border-blue-900 text-white px-4 py-3 font-mono focus:outline-none focus:border-cyan-500 focus:bg-blue-950/30 transition-all placeholder-blue-900/50 clip-input resize-none"
                           placeholder="INPUT_DATA_STREAM..."
                           required
                         ></textarea>
                      </div>

                      {/* Submit Button (The "Execute" Block) */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative overflow-hidden bg-blue-900/20 border border-cyan-500/50 text-cyan-400 hover:text-black hover:bg-cyan-500 py-4 font-bold tracking-widest uppercase transition-all duration-300 group/btn clip-terminal"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                              TRANSMITTING...
                            </>
                          ) : (
                            <>
                              INITIATE_UPLINK <span className="text-xs">»</span>
                            </>
                          )}
                        </span>
                      </button>

                      {/* Messages */}
                      {submitSuccess && (
                        <div className="mt-4 p-3 bg-green-500/10 border-l-2 border-green-500 text-green-400 text-xs font-mono">
                          // TRANSMISSION_COMPLETE: ACKNOWLEDGEMENT_RECEIVED
                        </div>
                      )}
                      {submitError && (
                        <div className="mt-4 p-3 bg-red-500/10 border-l-2 border-red-500 text-red-400 text-xs font-mono">
                          // ERROR_404: CONNECTION_LOST
                        </div>
                      )}
                   </form>
                </div>
              </div>
            </div>
          </div>


          {/* --- RIGHT: HOLOGRAPHIC INFO MODULES --- */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Module */}
            <div className="relative group cursor-pointer">
               <div className="absolute inset-0 border border-blue-900/50 clip-input bg-[#020617] group-hover:border-cyan-500/50 transition-colors"></div>
               <div className="relative p-8 flex items-center gap-6 z-10">
                  <div className="w-14 h-14 bg-blue-900/20 border border-blue-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500 transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                     <div className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1">Secure_Mail</div>
                     <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">EMAIL US</h4>
                     <a href="mailto:contact@example.com" className="text-sm font-mono text-slate-400 hover:text-white transition-colors">contact@hack5.0.com</a>
                  </div>
               </div>
               {/* Decorative corner */}
               <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-600 group-hover:border-cyan-400 transition-colors"></div>
            </div>

            {/* Location Module */}
            <div className="relative group cursor-pointer">
               <div className="absolute inset-0 border border-blue-900/50 clip-input bg-[#020617] group-hover:border-cyan-500/50 transition-colors"></div>
               <div className="relative p-8 flex items-center gap-6 z-10">
                  <div className="w-14 h-14 bg-blue-900/20 border border-blue-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500 transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                     <div className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1">Coordinates</div>
                     <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">LOCATION</h4>
                     <a href="#" className="text-sm font-mono text-slate-400 hover:text-white transition-colors">View Map Overlay</a>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-600 group-hover:border-cyan-400 transition-colors"></div>
            </div>

            {/* Call Module (Large) */}
            <div className="relative group">
               <div className="absolute inset-0 border border-blue-900/50 bg-[#020617] group-hover:border-cyan-500/50 transition-colors"></div>
               
               {/* Hazard Stripes at bottom */}
               <div className="absolute bottom-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#1e3a8a_5px,#1e3a8a_10px)]"></div>

               <div className="relative p-8 z-10 text-center">
                  <div className="inline-block p-3 rounded-full bg-blue-900/20 text-cyan-400 mb-4 border border-blue-800">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-1 uppercase tracking-widest">CALL US</h4>
                  <p className="text-[10px] font-mono text-blue-500 mb-6">OPS_HOURS: 0900 - 1700 (MON-FRI)</p>
                  
                  <div className="space-y-2">
                     {['+1 (234) 567-890', '+1 (234) 567-891'].map((phone, i) => (
                        <a key={i} href={`tel:${phone}`} className="block w-full py-2 bg-blue-950/20 border border-blue-900/50 text-slate-300 font-mono text-sm hover:bg-cyan-900/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                           {phone}
                        </a>
                     ))}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}