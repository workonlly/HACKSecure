const Accommodation = () => {
  const facilities = [
    'Comfortable dormitory rooms with bedding',
    'Common dining facilities with 3 meals per day',
    ' 24/7 security and surveillance',
    'Reliable WiFi connectivity',
    'Basic amenities (towels, toiletries)',
    'Laundry services',
    'Recreation area and common rooms',
    'Medical assistance on-campus'
  ];

  const accommodationProcess = [
    {
      step: 1,
      title: 'Register for Hackathon',
      description: 'Complete your hackathon registration through the online form'
    },
    {
      step: 2,
      title: 'Request Accommodation',
      description: 'During registration, select that you need on-campus accommodation'
    },
    {
      step: 3,
      title: 'Confirmation',
      description: 'Receive confirmation email with check-in details and hostel information'
    },
    {
      step: 4,
      title: 'Check-in',
      description: 'Arrive at Satpura Hostel on March 14, 2026 for registration and check-in'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      {/* Page Title */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#5A2A25] mb-4">Accommodation</h1>
        <p className="text-base sm:text-lg text-[#33110E] max-w-3xl">
          All participants attending the grand finale will be accommodated at <strong>Satpura Hostel</strong>, NIT Hamirpur.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          
          {/* Hostel Information Card */}
          <div className="bg-white border-2 border-[#E8A87C] rounded-lg p-6 sm:p-8 shadow-md">
            <h2 className="text-2xl font-bold text-[#5A2A25] mb-4">Satpura Hostel</h2>
            
            <div className="space-y-4 text-[#33110E]">
              <div>
                <p className="font-semibold text-[#5A2A25] mb-2">Location:</p>
                <p className="text-sm sm:text-base">NIT Hamirpur Campus, Hamirpur, Himachal Pradesh 177005</p>
              </div>

              <div>
                <p className="font-semibold text-[#5A2A25] mb-2">Check-in Date:</p>
                <p className="text-sm sm:text-base">March 14, 2026</p>
              </div>

              <div>
                <p className="font-semibold text-[#5A2A25] mb-2">Check-out Date:</p>
                <p className="text-sm sm:text-base">March 16, 2026</p>
              </div>

              <div>
                <p className="font-semibold text-[#5A2A25] mb-2">Duration:</p>
                <p className="text-sm sm:text-base">2 nights (accommodating the Grand Finale event)</p>
              </div>
            </div>
          </div>

          {/* Facilities Section */}
          <div className="bg-[#F5D7C8]/20 border-2 border-[#E8A87C]/30 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[#5A2A25] mb-6">Hostel Facilities</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-[#E8A87C] text-xl flex-shrink-0">✓</div>
                  <p className="text-sm sm:text-base text-[#33110E]">{facility}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Get Accommodation */}
          <div className="bg-white border-2 border-[#E8A87C]/30 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[#5A2A25] mb-6">How to Get Accommodation</h2>
            
            <div className="space-y-4">
              {accommodationProcess.map((item, index) => (
                <div key={index} className="flex gap-4 pb-4 border-b border-[#E3AFA0]/30 last:border-0">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#5A2A25] text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#5A2A25] mb-1">{item.title}</h3>
                    <p className="text-sm sm:text-base text-[#33110E]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-[#FFF8F0] border-2 border-[#E8A87C] rounded-lg p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#5A2A25] mb-4">Important Information</h2>
            
            <ul className="space-y-3 text-sm sm:text-base text-[#33110E]">
              <li className="flex gap-3">
                <span className="text-[#E8A87C] font-bold">•</span>
                <span><strong>Free Accommodation:</strong> Accommodation at Satpura Hostel is provided free of cost for all finalists.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E8A87C] font-bold">•</span>
                <span><strong>Mandatory Attendance:</strong> Participants must stay at the hostel during the event period.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E8A87C] font-bold">•</span>
                <span><strong>ID Verification:</strong> Valid government ID will be required at check-in.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E8A87C] font-bold">•</span>
                <span><strong>Guest Policy:</strong> Only registered participants are allowed in the hostel.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E8A87C] font-bold">•</span>
                <span><strong>Valuables:</strong> NIT Hamirpur is not responsible for loss of personal valuables. Please use lockers provided.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E8A87C] font-bold">•</span>
                <span><strong>Conduct:</strong> All participants must follow hostel rules and maintain discipline during their stay.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#3E1714] text-white p-6 sm:p-8 rounded-lg shadow-lg border-2 border-[#E8A87C]">
              <h3 className="text-[#E8A87C] text-lg font-bold mb-4">Quick Info</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[#F2D5C4] font-semibold text-sm mb-2">Hostel Name</p>
                  <p className="text-[#E3AFA0] text-sm">Satpura Hostel</p>
                </div>

                <div>
                  <p className="text-[#F2D5C4] font-semibold text-sm mb-2">Event Dates</p>
                  <p className="text-[#E3AFA0] text-sm">March 14-15, 2026</p>
                </div>

                <div>
                  <p className="text-[#F2D5C4] font-semibold text-sm mb-2">Check-in</p>
                  <p className="text-[#E3AFA0] text-sm">March 14, 2026</p>
                </div>

                <div>
                  <p className="text-[#F2D5C4] font-semibold text-sm mb-2">Check-out</p>
                  <p className="text-[#E3AFA0] text-sm">March 16, 2026</p>
                </div>

                <div className="border-t border-[#E8A87C]/30 pt-6">
                  <p className="text-[#F2D5C4] font-semibold text-sm mb-2">Questions?</p>
                  <a
                    href="mailto:hackathon@nith.ac.in"
                    className="text-[#E8A87C] hover:text-white transition-colors text-sm underline"
                  >
                    Contact us
                  </a>
                </div>

                <div className="bg-[#5A2A25] rounded p-4 text-center">
                  <p className="text-[#E8A87C] font-bold text-sm">✓ Free for all Finalists</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Accommodation;
