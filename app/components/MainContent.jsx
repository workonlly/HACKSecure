import React from "react";

const MainContent = () => {
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
        "Shortlisted teams participate in the hackathon from 10th to 11th March and develop their working prototypes with available mentorship support.",
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
      date: "15th February 2026",
    },
    { event: "Evaluation Round", date: "15th February 2026" },
    { event: "Announcement of Shortlisted Teams", date: "5th March 2026" },
    { event: "Hackathon Starts", date: "10th March 2026" },
    { event: "Project Submission Deadline", date: "11th March 2026" },
    { event: "Awards Ceremony / Event Close", date: "11th March 2026" },
  ];

  return (
    <div className="space-y-12">
      {/* About Hackathon Section */}
      <section>
        <div className="mb-6 md:mb-8">
          <div className="flex items-center mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5A2A25] mr-4 md:mr-8">
              About Hackathon
            </h3>
            <div className="flex-1 border-b-2 border-[#5A2A25]"></div>
          </div>
        </div>

        <div className="space-y-4 text-sm md:text-base lg:text-lg text-[#33110E]">
          <p className="text-justify leading-relaxed">
            Hackathon Under Information Security Education Awareness (ISEA) on
            theme Mobile Device and Application Security at NIT Hamirpur. The
            main objective is to identify Talent, Innovative Ideas and
            Technological Solutions and to establish linkages with Individuals,
            Industry, Start-ups and Educational Institutions.
          </p>

          <p className="text-justify leading-relaxed">
            <strong>Information Security Education and Awareness (ISEA)</strong>{" "}
            is an initiative of Ministry of Electronics and Information
            Technology (MeitY), Government of India for generating human
            resources in the area of Information Security and creating general
            awareness on Cyber Hygiene/Cyber Security among the masses.
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

      {/* Timeline and Structure Section */}
      <section>
        <div className="mb-6 md:mb-8">
          <div className="flex items-center mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5A2A25] mr-4 md:mr-8">
              Hackathon Timeline and Structure:
            </h3>
            <div className="flex-1 border-b-2 border-[#5A2A25]"></div>
          </div>
        </div>

        <div className="space-y-4 text-sm md:text-base lg:text-lg text-[#33110E]">
          <p>
            The hackathon will be conducted over a short timeline with a single
            round of evaluation followed by the main event.
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
              Timeline:
            </h3>
            <div className="flex-1 border-b-2 border-[#5A2A25]"></div>
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

      {/* About NIT Hamirpur Section */}
      <section>
        <div className="mb-6 md:mb-8">
          <div className="flex items-center mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5A2A25] mr-4 md:mr-8">
              About NIT Hamirpur
            </h3>
            <div className="flex-1 border-b-2 border-[#5A2A25]"></div>
          </div>
        </div>

        <div className="text-sm md:text-base lg:text-lg text-[#33110E]">
          <p className="text-justify leading-relaxed">
            Established in 1986, National Institute of Technology Hamirpur is an
            institute of national importance dedicated to excellence in
            education, research, and innovation. Located in the picturesque
            Himalayan region of Himachal Pradesh, the institute offers
            state-of-the-art infrastructure and a vibrant academic environment.
            With a strong focus on interdisciplinary research and industry
            collaboration, NIT Hamirpur is committed to addressing global
            challenges. Hosting this workshop reflects its mission to foster
            knowledge exchange and technological advancements in the Cyber
            Security and Mobile Security Domain.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
