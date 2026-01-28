"use client";
import MainContent from './components/MainContent'

export default function Home() {

  return (
    <div className="min-h-screen bg-white ">

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content - Takes 2/3 width on desktop */}
        <main className="">
          <MainContent />

        </main>
      </div>
    </div>
  );
}
