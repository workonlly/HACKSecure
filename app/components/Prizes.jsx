"use client";
import { useState } from "react";

function Prizes() {
  const [hoveredPrize, setHoveredPrize] = useState(null);

  const tracks = [
    {
      id: "problem1",
      title: "Problem Statement 1",
      icon: "🎯",
      total: "₹30,000",
      description: "Winner and Runner-up prizes",
      prizes: [
        { position: "🥇 Winner", amount: "₹20,000" },
        { position: "🥈 Runner-up", amount: "₹10,000" },
      ],
    },
    {
      id: "problem2",
      title: "Problem Statement 2",
      icon: "🎯",
      total: "₹30,000",
      description: "Winner and Runner-up prizes",
      prizes: [
        { position: "🥇 Winner", amount: "₹20,000" },
        { position: "🥈 Runner-up", amount: "₹10,000" },
      ],
    },
    {
      id: "problem3",
      title: "Problem Statement 3",
      icon: "🎯",
      total: "₹30,000",
      description: "Winner and Runner-up prizes",
      prizes: [
        { position: "🥇 Winner", amount: "₹20,000" },
        { position: "🥈 Runner-up", amount: "₹10,000" },
      ],
    },
    {
      id: "problem4",
      title: "Problem Statement 4",
      icon: "🎯",
      total: "₹30,000",
      description: "Winner and Runner-up prizes",
      prizes: [
        { position: "🥇 Winner", amount: "₹20,000" },
        { position: "🥈 Runner-up", amount: "₹10,000" },
      ],
    },
    {
      id: "problem5",
      title: "Problem Statement 5",
      icon: "🎯",
      total: "₹30,000",
      description: "Winner and Runner-up prizes",
      prizes: [
        { position: "🥇 Winner", amount: "₹20,000" },
        { position: "🥈 Runner-up", amount: "₹10,000" },
      ],
    },
  ];

  const specialPrizes = [
    {
      title: "Best All Girls Team",
      icon: "💎",
      amount: "₹10,000",
      description:
        "The team should be composed entirely of girls, ensuring full female representation.",
    },
    {
      title: "Best Freshers Team",
      icon: "🎓",
      amount: "₹10,000",
      description:
        "The team should consist entirely of first-year students, ensuring equal experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDF6F0] py-20 sm:py-12 md:py-16 px-3 sm:px-4 selection:bg-[#E8A87C] selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[#5A2A25] px-2">
            Prize <span className="text-[#E8A87C]">Pool</span>
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-[#E8A87C] mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 px-4">
            Win from a Total Prize Pool of{" "}
            <span className="font-bold text-[#E8A87C]">₹2,00,000+</span>
          </p>
        </div>

        {/* Grand Prize - High Impact Card */}
        <div className="mb-8 sm:mb-10 md:mb-12 px-2">
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A87C] via-[#5A2A25] to-[#E8A87C] rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500 group-hover:animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-[#5A2A25] to-[#3E1714] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E8A87C]/20 shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
              <div className="text-center text-white">
                <div className="bg-[#E8A87C] p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg animate-float">
                  <span className="text-3xl sm:text-4xl md:text-5xl">🏆</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 tracking-tight">
                  Grand Prize
                </h2>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 text-[#E8A87C] drop-shadow-lg">
                  ₹50,000
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  For the best overall project
                </p>
                <p className="text-xs sm:text-sm text-[#E8A87C] mt-3 sm:mt-4 font-medium italic px-2">
                  *Grand Prize replaces the Winner prize for that specific track
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Structure & Breakdown Block */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#5A2A25] to-[#3E1714] rounded-2xl sm:rounded-3xl border border-[#E8A87C]/30 mb-12 sm:mb-16 md:mb-20 shadow-2xl overflow-hidden mx-2">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="text-xl sm:text-2xl">ℹ️</span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E8A87C]">
              Structure & Distribution
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-gray-200 mb-6 sm:mb-8">
            {[
              "5 Tracks: Each with Winner (₹20k) & Runner-up (₹10k)",
              "Best overall solution receives the ₹50k Grand Prize",
              "Grand Prize replaces the ₹20k Winner spot for that track",
              "Combined max for one track can reach ₹60,000",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2 sm:gap-3 group">
                <span className="text-[#E8A87C] font-bold text-sm sm:text-base">
                  →
                </span>
                <p className="group-hover:text-white transition-colors text-xs sm:text-sm md:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 sm:p-5 md:p-6 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs sm:text-sm font-bold text-[#E8A87C] uppercase tracking-widest mb-1">
                Total Cash Distribution:
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">
                1 Grand Prize + 4 Winners + 5 Runners-up
              </p>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-[#E8A87C] to-[#5A2A25] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-xl border border-white/10">
              ₹1,80,000
            </div>
          </div>
        </div>

        {/* Track Prizes with Smooth Flip Animation */}
        <div className="mb-12 sm:mb-16 md:mb-20 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-[#5A2A25]">
            Problem Statement <span className="text-[#E8A87C]">Prizes</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="relative group cursor-pointer h-72 sm:h-80 perspective-1000"
                onMouseEnter={() => setHoveredPrize(track.id)}
                onMouseLeave={() => setHoveredPrize(null)}
              >
                <div className="relative h-full w-full transition-all duration-500 preserve-3d group-hover:shadow-2xl rounded-2xl">
                  {/* Front Side */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-[#F2D5C4] to-[#E3AFA0] rounded-2xl p-5 sm:p-6 md:p-8 border border-[#5A2A25]/10 flex flex-col items-center justify-center text-center backface-hidden transition-all duration-500 ${hoveredPrize === track.id ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
                  >
                    <div className="bg-[#5A2A25] p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                      <span className="text-2xl sm:text-3xl md:text-4xl">
                        {track.icon}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-[#5A2A25]">
                      {track.title}
                    </h3>
                    <div className="text-3xl sm:text-4xl font-bold text-[#5A2A25] mb-3 sm:mb-4">
                      {track.total}
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm">
                      {track.description}
                    </p>
                  </div>

                  {/* Back Side (Hover View) */}
                  <div
                    className={`absolute inset-0 bg-[#4A1C18] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-center backface-hidden transition-all duration-500 ${hoveredPrize === track.id ? "opacity-100 scale-100 rotate-y-0" : "opacity-0 scale-90 pointer-events-none"}`}
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 text-[#E8A87C] border-b border-[#E8A87C]/20 pb-2">
                      {track.title}
                    </h3>
                    <div className="space-y-3 sm:space-y-4 w-full text-white">
                      {track.prizes.map((prize, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center bg-white/5 p-2.5 sm:p-3 rounded-xl border border-white/5"
                          style={{
                            animation:
                              hoveredPrize === track.id
                                ? `slideUp 0.4s ease-out ${index * 0.1}s both`
                                : "none",
                          }}
                        >
                          <span className="font-semibold text-xs sm:text-sm">
                            {prize.position}
                          </span>
                          <span className="font-bold text-[#E8A87C] text-sm sm:text-base">
                            {prize.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex justify-between items-center text-white font-bold text-sm sm:text-base">
                      <span className="text-xs sm:text-sm opacity-70">
                        Total Track:
                      </span>
                      <span className="text-[#E8A87C]">{track.total}</span>
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 mt-3 sm:mt-4 italic text-center">
                      *Replaced by Grand Prize if overall winner
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Category Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-[#5A2A25]">
            Special <span className="text-[#E8A87C]">Categories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {specialPrizes.map((prize, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#F2D5C4] to-[#E3AFA0] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-lg border border-[#5A2A25]/5 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-[#5A2A25] p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform shadow-md">
                  {prize.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-[#5A2A25] mb-1">
                    {prize.title}
                  </h3>
                  <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#E8A87C] mb-2">
                    {prize.amount}
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    {prize.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Sidebar - Locked Flex-Col Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-2">
          {/* Important Dates */}
          <div className="bg-[#4A1C18] text-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-[#E8A87C] rounded-full blur-3xl opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#E8A87C]/30">
                <span className="text-2xl sm:text-3xl">📅</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tighter">
                  Timeline
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { label: "Hackathon Launch", date: "Jan 31, 2026" },
                  { label: "Registration Deadline", date: "Feb 22, 2026" },
                  { label: "Grand Finale", date: "March 10-11, 2026" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 py-3 sm:py-4 px-3 sm:px-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <span className="font-semibold text-gray-300 text-sm sm:text-base">
                      {item.label}:
                    </span>
                    <span className="text-[#E8A87C] font-bold text-sm sm:text-base">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pool Summary - Forced Flex-Col */}
          <div className="bg-gradient-to-br from-[#F5D7C8] to-[#E3AFA0] p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-[#5A2A25]/10">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#5A2A25]/20">
              <span className="text-2xl sm:text-3xl">💰</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A2A25] uppercase tracking-tighter">
                Pool Summary
              </h3>
            </div>
            {/* Locked flex-col for all screen sizes */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {[
                {
                  icon: "💰",
                  title: "Total Pool",
                  desc: "₹2,00,000+ total rewards",
                },
                {
                  icon: "🎯",
                  title: "5 Track Prizes",
                  desc: "For each problem statement",
                },
                {
                  icon: "🎁",
                  title: "Special Categories",
                  desc: "Girls & Freshers bonuses",
                },
                {
                  icon: "🏅",
                  title: "Sponsor Rewards",
                  desc: "Exclusive swags & tools",
                },
              ].map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 transition-all hover:translate-x-2"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#5A2A25] rounded-xl text-xl sm:text-2xl shadow-sm text-white flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#5A2A25] text-xs sm:text-sm leading-none mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 text-[10px] sm:text-xs">
                      {info.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Prizes;
