"use client";

import React, { useState } from "react";
import TopBar from './components/TopBar'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ProblemStatements from './components/ProblemStatements'
import Registration from './components/Registration'
import Accommodation from './components/Accommodation'
import Committee from './components/Committee'
import Contact from './components/Contact'
import Prizes from './components/Prizes'
import Team from './components/Team'

export default function Home() {

   // Simple page routing without React Router (for demonstration)
    // In production, use React Router
    const [currentPage, setCurrentPage] = useState('home')
  
    // Listen to hash changes for simple navigation
    React.useEffect(() => {
      const handleHashChange = () => {
        const hash = window.location.hash.slice(1)
        if (hash) setCurrentPage(hash)
      }
      
      window.addEventListener('hashchange', handleHashChange)
      handleHashChange() // Check initial hash
      
      return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])
  
  return (
   <>
      <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
      {currentPage === 'home' && (
        <>
          {/* <HeroSlider /> */}
          
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
        </>
      )}

      {currentPage === 'problem-statements' && (
        <div className="pt-8 lg:pt-12">
          <ProblemStatements />
        </div>
      )}

      {currentPage === 'registration' && (
        <div className="pt-8 lg:pt-12">
          <Registration />
        </div>
      )}

      {currentPage === 'accommodation' && (
        <div className="pt-8 lg:pt-12">
          <Accommodation />
        </div>
      )}

      {currentPage === 'committee' && (
        <div className="pt-8 lg:pt-12">
          <Committee />
        </div>
      )}

      {currentPage === 'contact' && (
        <div className="pt-8 lg:pt-12">
          <Contact />
        </div>
      )}

      {currentPage === 'prizes' && (
        <div className="pt-8 lg:pt-12">
          <Prizes />
        </div>
      )}
      
      <Footer />
    </div>
   </>
  );
}
