import MainContent from './components/MainContent'

export default function Home() {


  return (
    <div className="min-h-screen bg-white ">
      
      <img src="/assets/hacksecure-banner.png" alt="" className='pt-16 lg:pt-0 lg:h-[70vh] w-screen object-fill' />
      {/* Main Content Area with Sidebar */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Takes 2/3 width on desktop */}
          <main className="">
            <MainContent />
            
          </main>
        </div>
      </div>
    </div>
  );
}
