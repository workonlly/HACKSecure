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
  name: "Ujjawal Maheshwari",
  batch: "2027",
  imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1771065611/WhatsApp_Image_2026-02-14_at_16.09.13_dw5ixn.jpg",
 position: "Lead Organizer"
},
{
    name: "Abhay Chaudhary",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738081032/IMG-20240920-WA0002_kxrj0r.jpg",
    position: "Treasurer"
  },
  {
    name: "Akshit Dogra",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770052148/IMG-20241013-WA0067_j4kpmh.jpg",
  position: "Accommodation"
  },
  {
    name: "Anshuman Kapoor",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1728535411/anshuman_ugy7ne.jpg",
  position: "Media And Promotions"
  },
  {
    name: "Avirat Mahajan",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770052152/Avirat_Mahajan_efnln9.jpg",
  position: "Treasurer"
  },
  {
    name: "Ayush Sharma",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945095/IMG-20240513-WA0233_jgmvog.jpg",
  position: "Public Relations"
  },
  {
    name: "Chhavi Thakur",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770052167/motion_photo_2593710526921371319_frncd7.jpg",
  position: "Accommodation"
  },
  {
    name: "Harsh Goel",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1731838897/WhatsApp_Image_2024-11-17_at_15.51.00_2b583045_kqcd5x.jpg",
  position: "Accommodation"
  },
  {
    name: "Himanshu Mahajan",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945205/formal_oi5vpb.jpg",
  position: "Discipline"
  },
  {
    name: "Isha",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080640/IMG_5198_xz4pzl.jpg",
  position: "Public Relations"
  },
  {
    name: "Lakshay Lalia",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738080749/IMG_20241101_171749_392_auyw2u.jpg",
  position: "Student Coordinator"
  },
  {
    name: "Navdeep Singh",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dtrv7xbm5/image/upload/v1768491452/navdeep_ktens5.jpg",
  position: "Student Coordinator"
  },
  {
    name: "Piyush Mishra",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738138149/IMG-20250112-WA0084_akkh6m.jpg",
  position: "Internal Affairs"
  },
  {
    name: "pratyush pragyey",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1721114549/rptdgsgi7qzijyojnja0.jpg",
  position: "Lead"
  },
  {
    name: "Prince Khandelwal",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dnbf0uwku/image/upload/v1726945058/IMG-20240920-WA0013_l6p9tg.jpg",
  position: "Internal Affairs"
  },
  {
    name: "Rudesh Kumar",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770052324/photo_fn8k7w.jpg",
  position: "Web Lead"
  },
  {
    name: "Saksham Chhabra",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dnbf0uwku/image/upload/v1741525859/IMG-20240323-WA0015_dcsbh7_exdrze.jpg",
  position: "Web Lead"
  },
  {
    name: "Sujal Choudhary",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738091293/sujal_sosrec_ghouip.jpg",
  position: "Lead Organizer"
  },
  {
    name: "Vansh Pal",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770052161/Vansh_Photo_eiu3b1.jpg",
  position: "Technical Head"
  },

  {
    name:"Pradyumna Sharma",
    batch:"2027",
    imgSrc:"https://res.cloudinary.com/dqftjf73g/image/upload/v1770053355/WhatsApp_Image_2026-02-02_at_22.01.53_rwdoaz.jpg",
  position: "Lead"
  },
  {
    name: "Abhishika",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051535/IMG_20251223_153641_284_ivvq8b.jpg",
  },
  {
    name: "Anshu Kumari",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051544/anshu_ddqvhu.jpg",
  },
  {
    name: "Aryaman Chauhan",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051507/IMG-20260111-WA0184_bkqlzj.jpg",
  },
  {
    name: "Aryan",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051509/PFP_orcdec.jpg",
  },
  {
    name: "Ayushi",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051547/IMG_003529_0_Original_xmm6us.jpg",
  },
  {
    name: "Bhola Prasad Sah",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088411/1738076772514_ql73vg.jpg",
  },
  {
    name: "Chetna Singh",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738134304/c823d071-af30-45a7-9182-a85015e0cb33_fn17g3.jpg",
  },
  {
    name: "Jatin",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051781/IMG_6695_xvt8mc.heic",
  },
  {
    name: "Khushvinder",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051540/IMG-20250606-WA0026_wdhj8i.jpg",
  },
  {
    name: "Lavish",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dtrv7xbm5/image/upload/v1768491424/lavish_peoxgv.jpg",
  },
  {
    name: "Manoj Mohi",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051533/IMG_2246_fvkqii.heic",
  },
  {
    name: "Mohammad Asad",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770053013/1768897004233_ihvvo4.jpg",
  },
  {
    name: "Neerad Sood",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051986/20260124_141323_y7mnq7.jpg",
  },
  {
    name: "Raman Bansal",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738088074/profile_badm2f.jpg",
  },
  {
    name: "Sameer Varshney",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051518/IMG_20240919_214713_277_Original_t9f7dp.jpg",
  },
  {
    name: "Sanket Singh Sameer",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051533/1000156654-01_ridyfs_f5n46n.jpg",
  },
  {
    name: "Sourav Choudhary",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051556/IMG-20260120-WA0006_allwpg.jpg",
  },
  {
    name: "Sujal",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738089730/IMG_20241030_184111_nlzhqz.jpg",
  },
  {
    name: "Sumit Kumar",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051564/BeautyPlus_20251111031426182_save_yis9r7.jpg",
  },
  {
    name: "Utkarsh Shukla",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770052951/image_utkarsh_dh2ard.png",
  },
  {
    name: "Akarsh",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051258/akarsh_nbl1wu.png",
  },
  {
    name: "Akshit Sharma",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051264/Akshit_Sharma_lq9qzx.jpg",
  },
  {
    name: "Anubhav Singhal",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051260/Anubhav_Singhal_sbljnt.jpg",
  },
  {
    name: "Aryan Singh",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051264/AryanSingh1st_irdfhc.jpg",
  },
  {
    name: "Bhanu",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051152/Bahnu_tipt4t.heic",
  },
  {
    name: "Chaitanya Kumar",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051244/IMG_20250913_113705505_HDR_PORTRAIT_yqqawj.jpg",
  },
  {
    name: "Daksh Chaudhary",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051190/Daksh_im6fwx.jpg",
  },
  {
    name: "Harsh Garg",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051263/IMG-20260115-WA0016_2_sveicd.jpg",
  },
  {
    name: "Harshit Shukla",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051257/IMG_9303_mssidw.jpg",
  },
  {
    name: "Harshit Vardhan",
    batch: "2029",
    imgSrc: "https://drive.google.com/file/d/1OufMMdHonYkz8J21c-WmM9w1ufhq0a5t/view?usp=drivesdk",
  },
  {
    name: "Krrish Verma",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051266/krish_verma_x0aayv.jpg",
  },
  {
    name: "Lakshit Karwa",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051178/20260120_162258_e7h63m.jpg",
  },
  {
    name: "Magizhan",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051219/Magi_pic_iz7elz.jpg",
  },
  {
    name: "Mahesh Thakur",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051177/mahesh_thakur_hz97qw.jpg",
  },
  {
    name: "Manvi Vyas",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051246/manvi_sr8zzs.jpg",
  },
  {
    name: "mishty",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051259/mishty_z0q9ry.jpg",
  },
  {
    name: "Niharika Bhandari",
    batch: "2029",
    imgSrc: "https://drive.google.com/file/d/1P9Yhlx9C2kMAXO6_um5b6vavL5GvCbyn/view?usp=drivesdk",
  },
  {
    name: "Priyansh Sood",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051272/priyansh_sood_hlkbi4.jpg",
  },
  {
    name: "Shreya Singh",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051268/IMG_20260120_152028_585_ge3cpi.webp",
  },
  {
    name: "Srijal Sharma",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051270/SrijanSharma1st_z6hcel.jpg",
  },
  {
    name: "Tanishk Agrawal",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051248/Tanishk1st_dmo6rc.heic",
  },
  {
    name: "Triyan Jha",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051273/IMG-20260121-WA0017_swzrlf.jpg",
  },
];

const getRole = (batch) => {
  switch (batch) {
    case "2029":
      return "Member";
    case "2028":
      return "Executive";
    case "2027":
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
            Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A2A25] to-[#8B4A42] drop-shadow-md">Hacksecure</span>
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
              {[null, 2027, 2028, 2029].map((year) => (
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
                  {member.position && (
                    <span className="text-md italic p-2 font-bold text-white m-1 drop-shadow-md backdrop-blur-sm">
                       {member.position}
                    </span>
                    )}
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