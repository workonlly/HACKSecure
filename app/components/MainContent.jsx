"use client";

const objectives = [
  "Enhance Awareness: Educate participants on mobile device security threats and best practices.",
  "Encourage Innovation: Foster innovative solutions to counter mobile security vulnerabilities.",
  "Skill Development: Provide a platform for participants to enhance their technical skills in mobile security and ethical hacking",
  "Industry Collaboration: Facilitate knowledge exchange between academia, industry experts, and cybersecurity professionals",
  "Prototype Development: Encourage the creation of proof-of-concept solutions that can be further developed into robust security applications.",
];

const phases = [
  {
    title: "Phase 1: Registration",
    description:
      "Call for participation through the portal. Teams register and submit their ideas.",
  },
  {
    title: "Phase 2: Evaluation",
    description:
      "Single evaluation round to assess innovation, feasibility, and clarity of submitted ideas. Shortlisted teams announced on 5th March. (Online)",
  },
  {
    title: "Phase 3: Hackathon & Prototype Development",
    description:
      "Shortlisted teams participate in the hackathon from 10th to 11th March and develop their working prototypes with available mentorship support. Problem statements listed on the website will be used only for shortlisting. Actual problem statements will be revealed during the Hackathon Opening Ceremony.",
  },
  {
    title: "Phase 4: Final Presentation & Awards",
    description:
      "Teams present their final working solutions before the judging panel at NIT Hamirpur. Winners are selected and awarded on 11th March.",
  },
];

const timeline = [
  { event: "Grand Challenge Launch", date: "31st January 2026" },
  { event: "Registration Window Opens", date: "31st January 2026" },
  {
    event: "Last Date for Registration & Idea Submission",
    date: "22nd February 2026",
  },
  { event: "Evaluation Round", date: "22nd February 2026" },
  { event: "Announcement of Shortlisted Teams", date: "5th March 2026" },
  { event: "Hackathon Starts", date: "10th March 2026" },
  { event: "Project Submission Deadline", date: "11th March 2026" },
  { event: "Awards Ceremony / Event Close", date: "11th March 2026" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <img src="/hack-landscape.svg" alt="HackSecure Banner - Large Screen" className="hidden lg:block w-full" />
        <img src="/hack-landscape.svg" alt="HackSecure Banner - Medium Screen" className="hidden md:block lg:hidden w-full" />
        <img
          src="/hack-portrait.svg"
          alt="HackSecure Banner - Small Screen"
          className="block md:hidden w-full mt-15"
        />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="w-full max-w-6xl mx-auto">
            <div className="space-y-12">
              {/* About Hackathon Section */}
              <section>
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5A2A25] mr-4 md:mr-8">
                      About Hackathon
                    </h3>
                    <div className="flex-1 border-b-2 border-[#5A2A25]" />
                  </div>
                </div>

                <div className="space-y-4 text-sm md:text-base lg:text-lg text-[#33110E]">
                  <p className="text-justify leading-relaxed">
                    Hackathon Under Information Security Education Awareness
                    (ISEA) on theme Mobile Device and Application Security at
                    NIT Hamirpur. The main objective is to identify Talent,
                    Innovative Ideas and Technological Solutions and to
                    establish linkages with Individuals, Industry, Start-ups and
                    Educational Institutions.
                  </p>

                  <p className="text-justify leading-relaxed">
                    <strong>
                      Information Security Education and Awareness (ISEA)
                    </strong>{" "}
                    is an initiative of Ministry of Electronics and Information
                    Technology (MeitY), Government of India for generating human
                    resources in the area of Information Security and creating
                    general awareness on Cyber Hygiene/Cyber Security among the
                    masses.
                  </p>

                  <div className="mt-6">
                    <p className="font-bold mb-3 text-sm md:text-base lg:text-lg">
                      Hackathon Objectives
                    </p>

                    <ul className="space-y-2 md:space-y-3">
                      {objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-[#E8A87C] mr-2 md:mr-3 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <circle cx="10" cy="10" r="3" />
                          </svg>
                          <span className="text-justify text-sm md:text-base lg:text-lg">
                            {objective}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Registration Section */}
              <section id="registration">
                <div className="mb-8 md:mb-10">
                  <div className="bg-gradient-to-br from-[#3E1714] via-[#5A2A25] to-[#3E1714] p-8 md:p-10 rounded-2xl shadow-2xl border-2 border-[#E8A87C] relative overflow-hidden">
                    {/* Decorative corner accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8A87C] opacity-10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#E8A87C] opacity-10 rounded-tr-full"></div>

                    <div className="relative z-10 flex flex-col justify-center items-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#F2D5C4] mb-2 text-center">
                        Ready to Join?
                      </h2>
                      <p className="text-[#E8A87C] text-sm md:text-base mb-6 text-center">
                        Register now and be part of HackSecure 2026
                      </p>

                      <div
                        className="apply-button"
                        data-hackathon-slug="hacksecure-1461"
                        data-button-theme="light"
                        style={{ height: "44px", width: "312px" }}
                        suppressHydrationWarning
                      ></div>

                      <p className="text-[#F5D7C8] text-xs md:text-sm mt-4 text-center opacity-80">
                        🚀 Quick registration • 🎯 Instant confirmation • 🏆
                        Amazing prizes await
                      </p>
                    </div>
                  </div>
                </div>

                {/* Registration Guidelines */}
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-[#F5D7C8]/30 p-6 md:p-8 rounded-xl border border-[#E8A87C]/30">
                    <p className="text-sm md:text-base leading-relaxed text-[#33110E] text-center mb-6">
                      To ensure a smooth and fair competition, all participants
                      must follow these
                      <strong> registration guidelines:</strong>
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-y-16 md:gap-x-6 text-left">
                      {/* Eligibility Criteria */}
                      <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border-l-4 border-[#E8A87C]">
                        <p className="font-bold text-base md:text-lg mb-3 text-[#5A2A25]">
                          Eligibility Criteria
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-[#33110E]">
                          <li>
                            Open to{" "}
                            <strong>
                              students, professionals, and cybersecurity
                              enthusiasts.
                            </strong>
                          </li>
                          <li>
                            Participants can register{" "}
                            <strong>individually</strong> or in{" "}
                            <strong>teams (2-4 members).</strong>
                          </li>
                          <li>
                            Participants must be{" "}
                            <strong>18 years or older</strong> (or provide
                            parental consent if younger).
                          </li>
                          <li>
                            Multiple team registrations from the{" "}
                            <strong>same organization/university</strong> are
                            allowed.
                          </li>
                        </ul>
                      </div>

                      {/* Registration Process */}
                      <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border-l-4 border-[#E8A87C]">
                        <p className="font-bold text-base md:text-lg mb-3 text-[#5A2A25]">
                          Registration Process
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-[#33110E]">
                          <li>
                            Click on the{" "}
                            <strong>&quot;Register with Devfolio&quot;</strong>{" "}
                            button to begin your registration.
                          </li>
                          <li>
                            Fill out the <strong>registration form</strong> on
                            Devfolio with accurate details (name, email,
                            affiliation).
                          </li>
                        </ul>
                      </div>

                      {/* Code of Conduct */}
                      <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border-l-4 border-[#E8A87C]">
                        <p className="font-bold text-base md:text-lg mb-3 text-[#5A2A25]">
                          Code of Conduct
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-[#33110E]">
                          <li>
                            <strong>No plagiarism</strong> — all submissions
                            must be original work.
                          </li>
                          <li>
                            <strong>Respect teammates and opponents</strong> —
                            no harassment, hate speech, or unethical behavior.
                          </li>
                          <li>
                            Violation of rules may result in{" "}
                            <strong>immediate disqualification.</strong>
                          </li>
                        </ul>
                      </div>

                      {/* Submission Rules */}
                      <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border-l-4 border-[#E8A87C]">
                        <p className="font-bold text-base md:text-lg mb-3 text-[#5A2A25]">
                          Submission Rules
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-[#33110E]">
                          <li>
                            All projects must be submitted before the{" "}
                            <strong>final deadline.</strong>
                          </li>
                          <li>
                            Include proper{" "}
                            <strong>
                              documentation, code repository link, and a demo
                              video
                            </strong>{" "}
                            (if required).
                          </li>
                          <li>
                            Judges&apos; decisions are{" "}
                            <strong>final and binding.</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Timeline and Structure Section */}
              <section>
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5A2A25] mr-4 md:mr-8">
                      Hackathon Timeline and Structure
                    </h3>
                    <div className="flex-1 border-b-2 border-[#5A2A25]" />
                  </div>
                </div>

                <div className="space-y-4 text-sm md:text-base lg:text-lg text-[#33110E]">
                  <p>
                    The hackathon will be conducted over a short timeline with a
                    single round of evaluation followed by the main event.
                  </p>

                  <ul className="space-y-3 md:space-y-4">
                    {phases.map((phase, index) => (
                      <li
                        key={index}
                        className="flex items-start border-b border-[#E3AFA0]/30 pb-3 md:pb-4"
                      >
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 text-[#E8A87C] mr-2 md:mr-3 mt-1 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <circle cx="10" cy="10" r="3" />
                        </svg>
                        <div>
                          <span className="font-bold text-base md:text-lg lg:text-xl">
                            {phase.title} -{" "}
                          </span>
                          <span className="text-sm md:text-base lg:text-lg">
                            {phase.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Timeline Table Section */}
              <section>
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5A2A25] mr-4 md:mr-8">
                      Timeline
                    </h3>
                    <div className="flex-1 border-b-2 border-[#5A2A25]" />
                  </div>
                </div>

                <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                  <table className="w-full border-collapse">
                    <tbody>
                      {timeline.map((item, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2 === 0 ? "bg-[#F5D7C8]/20" : "bg-white"
                          } border-b border-[#E3AFA0]/30`}
                        >
                          <td className="px-3 md:px-4 py-3 md:py-4 text-[#33110E] text-xs md:text-sm lg:text-base">
                            {item.event}
                          </td>
                          <td className="px-3 md:px-4 py-3 md:py-4 text-[#5A2A25] font-medium text-xs md:text-sm lg:text-base whitespace-nowrap">
                            {item.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Sponsors Section */}
              <section>
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5A2A25] mr-4 md:mr-8">
                      Sponsors
                    </h3>
                    <div className="flex-1 border-b-2 border-[#5A2A25]" />
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#5A2A25] mb-8">
                    Gold Sponsors
                  </h4>

                  <div className="flex flex-wrap justify-center gap-12">
                    <img
                      src="/assets/meity_logo.png"
                      alt="MeitY"
                      className="h-28 md:h-36 lg:h-44 object-contain"
                    />
                    <img
                      src="/assets/isea_logo.png"
                      alt="ISEA"
                      className="h-28 md:h-36 lg:h-44 object-contain"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#5A2A25] mb-8">
                    Silver Sponsor
                  </h4>

                  <div className="flex justify-center">
                    <img
                      src="/assets/devfolio.png"
                      alt="DEVFOLIO LOGO"
                      className="h-10 md:h-16 lg:h-20 object-contain"
                    />
                  </div>
                </div>
              </section>

              {/* About NIT Hamirpur Section */}
              <section>
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5A2A25] mr-4 md:mr-8">
                      About NIT Hamirpur
                    </h3>
                    <div className="flex-1 border-b-2 border-[#5A2A25]" />
                  </div>
                </div>

                <div className="text-sm md:text-base lg:text-lg text-[#33110E]">
                  <p className="text-justify leading-relaxed">
                    Established in 1986, National Institute of Technology
                    Hamirpur is an institute of national importance dedicated to
                    excellence in education, research, and innovation. Located
                    in the picturesque Himalayan region of Himachal Pradesh, the
                    institute offers state-of-the-art infrastructure and a
                    vibrant academic environment. With a strong focus on
                    interdisciplinary research and industry collaboration, NIT
                    Hamirpur is committed to addressing global challenges.
                    Hosting this workshop reflects its mission to foster
                    knowledge exchange and technological advancements in the
                    Cyber Security and Mobile Security Domain.
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
