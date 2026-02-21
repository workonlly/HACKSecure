"use client";
import { useState } from "react";
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
    name: "Lakshay Lalia",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770052332/WhatsApp_Image_2026-01-13_at_23.39.46_aouok7.jpg",
  position: "Student Coordinator"
  },
  {
    name: "Navdeep Singh",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dtrv7xbm5/image/upload/v1768491452/navdeep_ktens5.jpg",
  position: "Student Coordinator"
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
    name: "Piyush Mishra",
    batch: "2027",
    imgSrc: "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1738138149/IMG-20250112-WA0084_akkh6m.jpg",
  position: "Internal Affairs"
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
  position: "Lead Organizer"
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
    imgSrc: "https://res.cloudinary.com/dkpnbush2/image/upload/v1771081952/WhatsApp_Image_2026-02-14_at_5.03.05_PM_zmsnhm.jpg",
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
    imgSrc: "https://i.ibb.co/MyT4MBzB/My-photo.jpg",
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
    imgSrc: "https://res.cloudinary.com/dkpnbush2/image/upload/v1771082448/DSC_3638.JPG_s7l02t.jpg",
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
    imgSrc: "https://res.cloudinary.com/dkpnbush2/image/upload/v1771082595/WhatsApp_Image_2026-02-14_at_8.52.00_PM_gpv3h8.jpg",
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
    name: "Hridanshu",
    batch: "2028",
    imgSrc: "https://res.cloudinary.com/dfgnzhgko/image/upload/v1771672514/WhatsApp_Image_2026-02-21_at_4.44.29_PM_fo8odm.jpg",
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
    imgSrc: "https://i.ibb.co/4whmTJ0g/IMG-0617.jpg",
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
  // {
  //   name: "Harshit Vardhan",
  //   batch: "2029",
  //   imgSrc: "https://drive.google.com/file/d/1OufMMdHonYkz8J21c-WmM9w1ufhq0a5t/view?usp=drivesdk",
  // },
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
  // {
  //   name: "Niharika Bhandari",
  //   batch: "2029",
  //   imgSrc: "https://drive.google.com/file/d/1P9Yhlx9C2kMAXO6_um5b6vavL5GvCbyn/view?usp=drivesdk",
  // },
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
  // {
  //   name: "Tanishk Agrawal",
  //   batch: "2029",
  //   imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051248/Tanishk1st_dmo6rc.heic",
  // },
  {
    name: "Triyan Jha",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqftjf73g/image/upload/v1770051273/IMG-20260121-WA0017_swzrlf.jpg",
  },
  {
    name: "Kshitiz Chauhan",
    batch: "2029",
    imgSrc: "https://i.ibb.co/ZppTT6m0/DOC-20260214-WA0001.png",
  },
  {
    name: "Shivank aggarwal",
    batch: "2029",
    imgSrc: "https://res.cloudinary.com/dqabpyux7/image/upload/v1771070049/WhatsApp_Image_2026-02-14_at_17.20.16_iuxtk0.jpg",
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
  const [activeCard, setActiveCard] = useState(null);

  const glitch = useGlitch({
    timing: { duration: 3950 },
    shake: false,
  });

  // Group members by batch
  const organisers = teamMembers.filter((member) => member.batch === "2027");
  const executives = teamMembers.filter((member) => member.batch === "2028");
  const volunteers = teamMembers.filter((member) => member.batch === "2029");

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  // Group organisers by position
  const getOrganisersByPosition = () => {
    const grouped = {};
    organisers.forEach((member) => {
      const position = member.position || "Other";
      if (!grouped[position]) {
        grouped[position] = [];
      }
      grouped[position].push(member);
    });
    return grouped;
  };

  const renderMembersSection = (title, members, sectionId) => (
    <div className="mb-20 relative z-10">
      <h3 className={`text-3xl md:text-4xl mb-10 text-[#5A2A25] ${hackedFontClass} tracking-wide text-center`}>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
        {members.map((member, index) => {
          const cardId = `${sectionId}-${index}`;
          const isActive = activeCard === cardId;

          return (
            <div
              key={index}
              onClick={() => handleCardClick(cardId)}
              className={`group relative bg-slate-100 rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                isActive
                  ? "border-[#5A2A25]/50 shadow-[0_0_20px_rgba(90,42,37,0.15)] -translate-y-2"
                  : "border-[#5A2A25]/20 hover:border-[#5A2A25]/50 hover:shadow-[0_0_20px_rgba(90,42,37,0.15)] hover:-translate-y-2"
              }`}
            >
              <div className="aspect-4/5 relative overflow-hidden">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-transform duration-500 filter ${
                    isActive
                      ? "scale-110 grayscale-0"
                      : "grayscale-20 group-hover:scale-110 group-hover:grayscale-0"
                  }`}
                />

                {/* Gradient Overlay on Hover or Click */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#5A2A25]/90 via-[#5A2A25]/40 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
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
          );
        })}
      </div>
    </div>
  );

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

        {/* Organisers Section */}
        <div className="mb-20 relative z-10">
          <h3 className={`text-3xl md:text-4xl mb-10 text-[#5A2A25] ${hackedFontClass} tracking-wide text-center`}>
            Organisers 2027
          </h3>
          {Object.entries(getOrganisersByPosition()).map(([position, members]) => (
            <div key={position} className="mb-16">
              <h4 className={`text-2xl md:text-3xl mb-8 text-[#5A2A25] ${hackedFontClass} tracking-wide text-left pl-4 border-l-4 border-[#5A2A25]/50`}>
                {position}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
                {members.map((member, index) => {
                  const cardId = `organisers-${position}-${index}`;
                  const isActive = activeCard === cardId;

                  return (
                    <div
                      key={index}
                      onClick={() => handleCardClick(cardId)}
                      className={`group relative bg-slate-100 rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-[#5A2A25]/50 shadow-[0_0_20px_rgba(90,42,37,0.15)] -translate-y-2"
                          : "border-[#5A2A25]/20 hover:border-[#5A2A25]/50 hover:shadow-[0_0_20px_rgba(90,42,37,0.15)] hover:-translate-y-2"
                      }`}
                    >
                      <div className="aspect-4/5 relative overflow-hidden">
                        <img
                          src={member.imgSrc}
                          alt={member.name}
                          className={`w-full h-full object-cover transition-transform duration-500 filter ${
                            isActive
                              ? "scale-110 grayscale-0"
                              : "grayscale-20 group-hover:scale-110 group-hover:grayscale-0"
                          }`}
                        />

                        {/* Gradient Overlay on Hover or Click */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-[#5A2A25]/90 via-[#5A2A25]/40 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        >
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Executives Section */}
        {renderMembersSection("Executives 2028", executives, "executives")}

        {/* Volunteers Section */}
        {renderMembersSection("Volunteers 2029", volunteers, "volunteers")}
      </div>
    </div>
  );
}