"use client";
import { useEffect } from "react";

const Registration = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="container mx-auto px-4 py-6 md:py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Main Content - Takes 2/3 width on desktop */}
        <main className="lg:w-2/3 pt-18 md:pt-10">
          {/* Registration Buttons Card */}
          <div className="mb-8 md:mb-10">
            <div className="bg-gradient-to-br from-[#3E1714] via-[#5A2A25] to-[#3E1714] p-8 md:p-10 rounded-2xl shadow-2xl border-2 border-[#E8A87C] relative overflow-hidden">
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8A87C] opacity-10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#E8A87C] opacity-10 rounded-tr-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#F2D5C4] mb-2 text-center">
                  Ready to Join?
                </h2>
                <p className="text-[#E8A87C] text-sm md:text-base mb-6 text-center">
                  Register now and be part of HackSecure 2026
                </p>
                
                <div className="flex justify-center">
                  <div
                    className="apply-button inline-block rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-3 border-[#E8A87C] bg-white"
                    data-hackathon-slug="hacksecure-1461"
                    data-button-theme="light"
                    style={{ height: "60px", width: "340px" }}
                  >
                    <img src="/devfolio.svg" alt="Devfolio Logo" className="h-full w-full object-contain p-2" />
                  </div>
                </div>
                
                <p className="text-[#F5D7C8] text-xs md:text-sm mt-4 text-center opacity-80">
                  🚀 Quick registration • 🎯 Instant confirmation • 🏆 Amazing prizes await
                </p>
              </div>
            </div>
          </div>

          {/* Registration Guidelines */}
          <div className="space-y-4 md:space-y-6 text-[#33110E]">
            <p className="text-sm md:text-base leading-relaxed">
              To ensure a smooth and fair competition, all participants must
              follow these <strong>registration guidelines:</strong>
            </p>

            {/* Eligibility Criteria */}
            <div>
              <p className="font-bold text-base md:text-lg mb-2 md:mb-3">
                Eligibility Criteria
              </p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-sm md:text-base">
                <li>
                  Open to{" "}
                  <strong>
                    students, professionals, and cybersecurity enthusiasts.
                  </strong>
                </li>
                <li>
                  Participants can register <strong>individually</strong> or in{" "}
                  <strong>teams (2-4 members).</strong>
                </li>
                <li>
                  Participants must be <strong>18 years or older</strong> (or
                  provide parental consent if younger).
                </li>
                <li>
                  Multiple team registrations from the{" "}
                  <strong>same organization/university</strong> are allowed.
                </li>
              </ul>
            </div>

            {/* Registration Process */}
            <div>
              <p className="font-bold text-base md:text-lg mb-2 md:mb-3">
                Registration Process
              </p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-sm md:text-base">
                <li>
                  Click on the <strong>“Register with Devfolio”</strong> button
                  to begin your registration.
                </li>
                <li>
                  Fill out the <strong>registration form</strong> on Devfolio
                  with accurate details (name, email, affiliation).
                </li>
              </ul>
            </div>

            {/* Code of Conduct */}
            <div>
              <p className="font-bold text-base md:text-lg mb-2 md:mb-3">
                Code of Conduct
              </p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-sm md:text-base">
                <li>
                  <strong>No plagiarism</strong> — all submissions must be
                  original work.
                </li>
                <li>
                  <strong>Respect teammates and opponents</strong> — no
                  harassment, hate speech, or unethical behavior.
                </li>
                <li>
                  Violation of rules may result in{" "}
                  <strong>immediate disqualification.</strong>
                </li>
              </ul>
            </div>

            {/* Submission Rules */}
            <div>
              <p className="font-bold text-base md:text-lg mb-2 md:mb-3">
                Submission Rules
              </p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-sm md:text-base">
                <li>
                  All projects must be submitted before the{" "}
                  <strong>final deadline.</strong>
                </li>
                <li>
                  Include proper{" "}
                  <strong>
                    documentation, code repository link, and a demo video
                  </strong>{" "}
                  (if required).
                </li>
                <li>
                  Judges' decisions are <strong>final and binding.</strong>
                </li>
              </ul>
            </div>
          </div>
        </main>

        {/* Sidebar - Takes 1/3 width on desktop */}
        <aside className="lg:w-1/3">
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#3E1714] text-white p-6 md:p-8 rounded-lg shadow-lg border border-[#5A2A25]">
              <h3 className="text-[#E8A87C] text-sm md:text-base font-semibold mb-2">
                HACKATHON ON MOBILE DEVICE and Application Security
              </h3>
              <p className="text-[#E8A87C] text-sm md:text-base font-semibold mb-3 md:mb-4">
                March 2026
              </p>
              <p className="text-xs md:text-sm text-[#F2D5C4]">
                Contact:
                <br />
                <a
                  href="mailto:hack@nith.ac.in"
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  hack@nith.ac.in
                </a>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Registration;
