"use client";
import { useState } from "react";
import { Filter } from "lucide-react";
import { useGlitch } from "react-powerglitch";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom font class for styling
const hackedFontClass = "font-mono font-bold tracking-widest";

/**
 * @typedef {Object} TeamMember
 * @property {string} name
 * @property {string} batch
 * @property {string} imgSrc
 */

// ... (Keep your teamMembers array exactly as it is) ...
const teamMembers = [
  // First Years
  {
    name: "Tanishq Verma",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945246/IMG_20240414_053937_668_nbxfaq.jpg",
  },
  {
    name: "Krishna Narzary",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1728579687/krishna_zp05q6.jpg",
  },
  {
    name: "Tanishq Chauhan",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945307/IMG_20231001_124926_evwtzl.jpg",
  },
  {
    name: "Shryansh",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738136152/csec_shry_kwh5tn.jpg",
  },
  {
    name: "Harshal",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738079965/Harshal_1_ljrjiy.jpg",
  },
  {
    name: "Kirti Sharma",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080065/IMG-20241110-WA0018_1_anaulw.jpg",
  },
  {
    name: "Arshita",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945377/IMG_20240920_223145_tc4rbp.jpg",
  },
  {
    name: "Prince Jaiswal",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945441/IMG_20230720_192947_flr5wg.jpg",
  },
  {
    name: "Aditya Kumar",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080338/IMG_0237_beywm0.jpg",
  },
  {
    name: "Tanmay Sharma",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnif0edly/image/upload/v1728535568/IMG-20240307-WA0033_mfojpp.jpg",
  },
  {
    name: "Ankush Thakur",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080439/IMG_20240720_122823_ikkncj.jpg",
  },
  {
    name: "Arnav Gupta",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080697/e6a54564-6a33-48e1-ac19-e847758fd349_hqfhh8.jpg",
  },
  {
    name: "Avinash Sharma",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1739191084/AVIN_exe_uu0yqx_k2wamg.webp",
  },
  {
    name: "Himanshu Gupta",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1739194635/WhatsApp_Image_2025-02-10_at_18.19.54_eddb4d72_dah6jq.jpg",
  },
  {
    name: "Akash Kanwar",
    batch: "2026",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1739960542/akash_bqdy3d.jpg",
  },
  {
    name: "Isha",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080640/IMG_5198_xz4pzl.jpg",
  },
  {
    name: "Chhavi Thakur",
    batch: "2023",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726944805/IMG-20240308-WA0077_nq107z.jpg",
  },
  {
    name: "Lakshay Lalia",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080749/IMG_20241101_171749_392_auyw2u.jpg",
  },
  {
    name: "Saksham Chhabra",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1741525859/IMG-20240323-WA0015_dcsbh7_exdrze.jpg",
  },
  {
    name: "Navdeep Singh",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726944985/IMG_4625-1_xkfqoy.jpg",
  },
  {
    name: "Prince Khandelwal",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945058/IMG-20240920-WA0013_l6p9tg.jpg",
  },
  {
    name: "Piyush Mishra",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738138149/IMG-20250112-WA0084_akkh6m.jpg",
  },
  {
    name: "Ayush Sharma",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945095/IMG-20240513-WA0233_jgmvog.jpg",
  },
  {
    name: "Avirat Mahajan",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945139/IMG-20240410-WA0016_eow17z.jpg",
  },
  {
    name: "Vansh Pal",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080858/WIN_20240415_20_11_54_Pro_zw1squ.jpg",
  },
  {
    name: "Sujal Choudhary",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738091293/sujal_sosrec_ghouip.jpg",
  },
  {
    name: "Anshuman Kapoor",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1728535411/anshuman_ugy7ne.jpg",
  },
  {
    name: "Abhay Chaudhary",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738081032/IMG-20240920-WA0002_kxrj0r.jpg",
  },
  {
    name: "Himanshu Mahajan",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945205/formal_oi5vpb.jpg",
  },
  {
    name: "Harsh Goel",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1731838897/WhatsApp_Image_2024-11-17_at_15.51.00_2b583045_kqcd5x.jpg",
  },
  {
    name: "pratyush pragyey",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1721114549/rptdgsgi7qzijyojnja0.jpg",
  },
  {
    name: "Rudesh Kumar",
    batch: "2027",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738082144/photo_k91tqe.jpg",
  },
  {
    name: "Lavish",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/duezus2xn/image/upload/v1738075460/lavish_mupjh3.jpg",
  },
  {
    name: "Prashant Thakur",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/duezus2xn/image/upload/v1738075650/prashant_2_vsdpsb.jpg",
  },
  {
    name: "Aryan Sharma",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738087174/IMG_20241120_152145246_HDR_pavhc9.jpg",
  },
  {
    name: "Sanket Singh Sameer",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738087686/1000156654-01_ridyfs.jpg",
  },
  {
    name: "Raman Bansal",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088074/profile_badm2f.jpg",
  },
  {
    name: "Utkarsh Shukla",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088144/IMG-20241220-WA0110_qptedf.jpg",
  },
  {
    name: "Anshu Kumari",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134087/IMG_20250128_201927_kwt4vg.jpg",
  },
  {
    name: "Anilove",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088682/IMG20241110215944_qx4ejt.jpg",
  },
  {
    name: "Bhola Prasad Sah",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088411/1738076772514_ql73vg.jpg",
  },
  {
    name: "Tanmay Singh",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134170/IMG-20240818-WA0002_dolerx.jpg",
  },
  {
    name: "Tanisha",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088626/IMG_20241207_155127_mls1zh.jpg",
  },
  {
    name: "Aakriti",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738089007/IMG_20250128_235644_197_yttpst.jpg",
  },
  {
    name: "Chetna Singh",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134304/c823d071-af30-45a7-9182-a85015e0cb33_fn17g3.jpg",
  },
  {
    name: "Divyam",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134704/WhatsApp_Image_2024-11-10_at_10.47.39_PM_lpvlpg.jpg",
  },
  {
    name: "Sujal",
    batch: "2028",
    imgSrc:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738089730/IMG_20241030_184111_nlzhqz.jpg",
  },
];

const getRole = (batch) => {
  switch (batch) {
    case "2028":
      return "Member";
    case "2027":
      return "Executive";
    case "2026":
      return "Lead";
    default:
      return "";
  }
};

export default function Team() {
  const [selectedYear, setSelectedYear] = useState(null);

  const filteredMembers = selectedYear
    ? teamMembers.filter((member) => Number(member.batch) === selectedYear)
    : teamMembers;

  const glitch = useGlitch({
    timing: { duration: 3950 },
    shake: false,
  });

  return (
    <div id="team" className="min-h-screen bg-white text-[#5A2A25] selection:bg-[#5A2A25]/30">
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-32 relative">
        
        {/* Background Gradients */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#5A2A25]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5A2A25]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="text-center mb-16 relative z-10">
          <h2 className={`text-4xl md:text-6xl mb-4 text-[#5A2A25] ${hackedFontClass} tracking-wide`}>
            Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A2A25] to-[#8B4A42] drop-shadow-md">CSEC</span>
          </h2>
          <p className="text-[#5A2A25]/70 max-w-2xl mx-auto text-lg font-light">
            Meet the talented individuals who make up our diverse team.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#5A2A25]" />
              <span className="text-[#5A2A25]/80 font-medium">Filter by Year:</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 sm:gap-4 w-full sm:w-auto justify-center">
              {[null, 2026, 2027, 2028].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-5 py-2.5 text-sm sm:text-base rounded-xl transition-all duration-300 border border-transparent whitespace-nowrap
                    ${
                      selectedYear === year
                        ? "bg-gradient-to-r from-[#5A2A25] to-[#8B4A42] text-white shadow-[0_0_15px_rgba(90,42,37,0.4)] border-[#5A2A25]/60"
                        : "bg-white/40 text-[#5A2A25]/70 hover:bg-[#5A2A25]/5 hover:text-[#5A2A25] hover:border-[#5A2A25]/30 border border-[#5A2A25]/20"
                    }`}
                >
                  {year === null ? "All Years" : `${year}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-slate-100 rounded-2xl overflow-hidden border border-[#5A2A25]/20 hover:border-[#5A2A25]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(90,42,37,0.15)] hover:-translate-y-2"
            >
              <div className="aspect-4/5 relative overflow-hidden">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale-20 group-hover:grayscale-0"
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5A2A25]/90 via-[#5A2A25]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                    {member.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-[#5A2A25]/30 border border-[#5A2A25]/50 text-white rounded-lg text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                      {member.batch}
                    </span>
                    <span className="inline-block px-3 py-1 bg-[#8B4A42]/30 border border-[#8B4A42]/50 text-white rounded-lg text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                      {getRole(member.batch)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}