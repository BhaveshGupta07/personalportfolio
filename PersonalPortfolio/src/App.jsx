import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technology from './components/Technology'
import Education  from './components/Education'
import Contact from './components/Contact'
import MouseAnimation from "./MouseAnimation";
import DownloadButton from './components/DownloadButton'
import ContactUs from './components/ContactUs'
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900" >
    <div className="fixed top-0 -z-10 h-full w-full">
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </div>
    
    <div className="container mx-auto px-8">
    <MouseAnimation/>
    <Navbar/>
    <Hero/>
    <About/>
    <Technology/>
    <Education/>
    <DownloadButton/>
    <ContactUs/>
    <Contact/>
    </div>
    </div>
  )
}

export default App
