import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

export default function Home() {


  return (
    <div className="min-h-screen bg-white pt-8 lg:pt-12">
      {/* Main Content Area with Sidebar */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Takes 2/3 width on desktop */}
          <main className="lg:w-2/3">
            <MainContent />
          </main>

          {/* Sidebar - Takes 1/3 width on desktop */}
          <aside className="lg:w-1/3">
            <div className="lg:sticky lg:top-24">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
