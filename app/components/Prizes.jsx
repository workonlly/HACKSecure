"use client";
import { useState } from 'react'

function Prizes() {
  const [hoveredPrize, setHoveredPrize] = useState(null)

  const tracks = [
    {
      id: 'aiml',
      title: 'AI/ML Track',
      icon: '🧠',
      total: '₹30,000',
      description: 'Outstanding performance and creative solutions in AI/ML',
      prizes: [
        { position: '🥇 1st', amount: '₹15,000' },
        { position: '🥈 2nd', amount: '₹10,000' },
        { position: '🥉 3rd', amount: '₹5,000' }
      ]
    },
    {
      id: 'blockchain',
      title: 'Blockchain & DeFi Track',
      icon: '⛓️',
      total: '₹30,000',
      description: 'Excellence in execution of Blockchain & DeFi',
      prizes: [
        { position: '🥇 1st', amount: '₹15,000' },
        { position: '🥈 2nd', amount: '₹10,000' },
        { position: '🥉 3rd', amount: '₹5,000' }
      ]
    },
    {
      id: 'innovation',
      title: 'Open Innovation',
      icon: '💡',
      total: '₹30,000',
      description: 'Innovative solutions and creative problem-solving',
      prizes: [
        { position: '🥇 1st', amount: '₹15,000' },
        { position: '🥈 2nd', amount: '₹10,000' },
        { position: '🥉 3rd', amount: '₹5,000' }
      ]
    }
  ]

  const specialPrizes = [
    {
      title: 'Best All Girls Team',
      icon: '💎',
      amount: '₹5,000',
      description: 'The team should be composed entirely of girls, ensuring full female representation.'
    },
    {
      title: 'Best Beginners Hack',
      icon: '🎓',
      amount: '₹5,000',
      description: 'The team should consist entirely of first-year students, ensuring equal experience among members.'
    }
  ]

  const sponsorTracks = [
    {
      title: 'Ethereum',
      icon: '💰',
      amount: '₹8,500+',
      description: 'Innovative solutions and projects built on Ethereum'
    },
    {
      title: 'Best use of GitHub',
      icon: '⚙️',
      amount: 'Exciting Prizes',
      description: 'Chance to win Excited Prizes by GitHub'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#5A2A25]">
          Prize <span className="text-[#E8A87C]">Pool</span>
        </h1>
        <div className="w-20 h-1 bg-[#E8A87C] mx-auto mb-6"></div>
        <p className="text-xl max-w-2xl mx-auto text-gray-700 mb-8">
          Win from a Total Prize Pool of <span className="font-bold text-[#E8A87C]">₹1,50,000+</span>
        </p>
      </div>

      {/* Grand Prize */}
      <div className="max-w-md mx-auto mb-12">
        <div className="bg-gradient-to-br from-[#5A2A25] to-[#4A1C18] rounded-lg p-8 text-center shadow-2xl transform transition-all hover:-translate-y-2 duration-300">
          <div className="bg-[#E8A87C] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🏆</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Grand Prize</h2>
          <div className="text-5xl font-bold text-[#E8A87C] mb-4">₹40,000</div>
          <p className="text-gray-300">For the best overall project</p>
        </div>
      </div>

      {/* Track Prizes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="relative"
            onMouseEnter={() => setHoveredPrize(track.id)}
            onMouseLeave={() => setHoveredPrize(null)}
          >
            <div className="bg-gradient-to-br from-[#F2D5C4] to-[#E3AFA0] rounded-lg p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg h-full">
              {/* Default View */}
              <div className={`transition-opacity duration-300 ${hoveredPrize === track.id ? 'opacity-0 absolute inset-0' : 'opacity-100'}`}>
                <div className="bg-[#5A2A25] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{track.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#5A2A25]">{track.title}</h3>
                <div className="text-4xl font-bold text-[#E8A87C] mb-4">{track.total}</div>
                <p className="text-gray-700">{track.description}</p>
              </div>

              {/* Hover View */}
              {hoveredPrize === track.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A1C18] to-[#3E1714] rounded-lg flex flex-col justify-center items-center p-8 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-[#E8A87C]">{track.title}</h3>
                  <div className="space-y-4 w-full">
                    {track.prizes.map((prize, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-[#E8A87C]/20 pb-2">
                        <span className="text-lg font-bold text-white">{prize.position}</span>
                        <span className="text-lg font-bold text-white">{prize.amount}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-gray-400">Total: {track.total}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Special Prizes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {specialPrizes.map((prize, index) => (
          <div key={index} className="bg-gradient-to-br from-[#F2D5C4] to-[#E3AFA0] rounded-lg p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg">
            <div className="bg-[#5A2A25] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">{prize.icon}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#5A2A25]">{prize.title}</h3>
            <div className="text-4xl font-bold text-[#E8A87C] mb-4">{prize.amount}</div>
            <p className="text-gray-700">{prize.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="text-center mb-12">
        <h2 className="text-xl text-gray-700 mb-8">Includes Prizes Worth 7k-10k</h2>
        <h2 className="text-4xl md:text-5xl mb-4 font-bold text-[#5A2A25]">
          Sponsor <span className="text-[#E8A87C]">Tracks</span>
        </h2>
      </div>

      {/* Sponsor Tracks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {sponsorTracks.map((track, index) => (
          <div key={index} className="bg-gradient-to-br from-[#F2D5C4] to-[#E3AFA0] rounded-lg p-8 text-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg">
            <div className="bg-[#5A2A25] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">{track.icon}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#5A2A25]">{track.title}</h3>
            <div className="text-4xl font-bold text-[#E8A87C] mb-4">{track.amount}</div>
            <p className="text-gray-700">{track.description}</p>
          </div>
        ))}
      </div>

      {/* Sidebar - Important Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Important Dates Card */}
        <div className="relative group">
          <div className="relative bg-gradient-to-br from-[#3E1714] via-[#4A1C18] to-[#5A2A25] text-white p-8 rounded-2xl shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#E8A87C] to-[#F2D5C4] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#E8A87C] to-[#F2D5C4] rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#E8A87C]">
                <span className="text-3xl">📅</span>
                <h3 className="text-3xl font-bold">Important Dates</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 px-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="font-semibold text-lg">Hackathon Launch:</span>
                  <span className="text-[#E8A87C] font-bold">January 15, 2026</span>
                </div>
                <div className="flex justify-between items-center py-4 px-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="font-semibold text-lg">Registration Deadline:</span>
                  <span className="text-[#E8A87C] font-bold">February 15, 2026</span>
                </div>
                <div className="flex justify-between items-center py-4 px-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="font-semibold text-lg">Grand Finale:</span>
                  <span className="text-[#E8A87C] font-bold">March 14-15, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prize Pool Details Card */}
        <div className="relative group">
          <div className="relative bg-gradient-to-br from-[#F5D7C8] via-[#F2D5C4] to-[#E3AFA0] p-8 rounded-2xl shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#E8A87C] to-[#5A2A25] rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#E8A87C] to-[#5A2A25] rounded-full blur-3xl opacity-10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#E8A87C]">
                <span className="text-3xl">💰</span>
                <h3 className="text-3xl font-bold text-[#5A2A25]">Prize Pool Details</h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-white/70 transition-colors">
                  <span className="text-3xl">💰</span>
                  <div>
                    <h4 className="font-bold text-lg text-[#5A2A25] mb-1">Total Prize Pool:</h4>
                    <p className="text-gray-700">₹1,50,000+ in cash prizes and rewards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-white/70 transition-colors">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h4 className="font-bold text-lg text-[#5A2A25] mb-1">Multiple Tracks:</h4>
                    <p className="text-gray-700">Prizes for AI/ML, Blockchain, and Open Innovation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-white/70 transition-colors">
                  <span className="text-3xl">🎁</span>
                  <div>
                    <h4 className="font-bold text-lg text-[#5A2A25] mb-1">Special Categories:</h4>
                    <p className="text-gray-700">Additional prizes for Best All Girls Team and Best Beginners Hack</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-white/70 transition-colors">
                  <span className="text-3xl">🏅</span>
                  <div>
                    <h4 className="font-bold text-lg text-[#5A2A25] mb-1">Sponsor Prizes:</h4>
                    <p className="text-gray-700">Win exclusive prizes from Ethereum and GitHub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes
