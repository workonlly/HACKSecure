const Committee = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content - Takes 2/3 width on desktop */}
        <main className="w-full lg:w-2/3">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#5A2A25]">Committee</h3>
            <p className="text-sm sm:text-base text-[#33110E]">Will be updated soon..</p>
          </div>
        </main>

        {/* Sidebar - Takes 1/3 width on desktop */}
        <aside className="w-full lg:w-1/3">
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#3E1714] text-white p-6 sm:p-8 rounded-lg shadow-lg border border-[#5A2A25]">
              <h3 className="text-[#E8A87C] text-sm sm:text-base font-semibold mb-2">
                HACKATHON ON MOBILE DEVICE and Application Security
              </h3>
              <p className="text-[#E8A87C] text-sm sm:text-base font-semibold mb-4">March 2026</p>
              <p className="text-xs sm:text-sm text-[#F2D5C4]">
                Contact:
                <br />
                <a
                  href="mailto:hackathon@nith.ac.in"
                  className="hover:text-[#E8A87C] transition-colors"
                >
                  hackathon@nith.ac.in
                </a>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Committee;
