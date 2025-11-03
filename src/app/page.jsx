import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Sec1 from './components/Sec1'

export default function HomePage() {
  return (
    <>
      <main className="w-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-screen bg-[url('/image/grid-pattern.svg')] bg-cover bg-no-repeat z-0"></div>
        <div className="hidden sm:block absolute top-0 left-0 w-2/3 h-2/3 bg-[url('/image/spotlight.png')] bg-contain bg-no-repeat"></div>
        <div className="hidden sm:block absolute top-0 right-0 w-2/3 h-2/3 bg-[url('/image/spotlight.png')] bg-contain bg-no-repeat scale-x-[-1]"></div>
        <NavBar />
        <Hero />
        <Sec1 />


        <section className='mx-[3%] sm:mx-auto mt-6 sm:mt-8 md:mt-15 lg:mt-20 mb-10'>
          <h2 className='font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl text-center mb-3 sm:mb-4 md:mb-7 lg:mb-10'>A small selection of <span className='text-(--title-text)'>recent projects</span></h2>

          <section className='flex gap-5 justify-center flex-wrap'>
            <div className='p-5 w-full md:w-7/16 rounded-(--border-radius)' style={{ background: "var(--fill-gradient)" }}>
              <div className='relative w-full h-[180px] sm:h-[200px] md:h-[190px] lg:h-[220px] xl:h-[250px] rounded-(--border-radius) overflow-hidden' style={{ background: "var(--fill-gradient-secondary)" }}>
                <img src='/image/bgRecentProject.png' alt='' className='absolute bottom-0 left-0 w-auto h-full' />
                <img src='/image/adminPanel.png' alt='' className='absolute -bottom-7 left-1/2 -translate-x-1/2 w-auto h-full scale-75' />
              </div>
              <h4 className='mt-2 text-[13px] sm:text-[18px] md:text-[14px] lg:text-[18px] font-bold'>Admin Dashboard – Smart Control Panel</h4>
              <p className='mt-2 text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] text-(--secondary-text)'>A sleek and modern control panel, crafted for <br /> clarity, ease of use, and precise management</p>
            </div>

            <div className='p-5 w-full md:w-7/16 rounded-(--border-radius)' style={{ background: "var(--fill-gradient)" }}>
              <div className='relative w-full h-[180px] sm:h-[200px] md:h-[190px] lg:h-[220px] xl:h-[250px] rounded-(--border-radius) overflow-hidden' style={{ background: "var(--fill-gradient-secondary)" }}>
                <img src='/image/bgRecentProject.png' alt='' className='absolute bottom-0 left-0 w-auto h-full' />
                <img src='/image/shop.png' alt='' className='absolute -bottom-7 left-1/2 -translate-x-1/2 w-auto h-full scale-75 brightness-65' />
              </div>
              <h4 className='mt-2 text-[13px] sm:text-[18px] md:text-[14px] lg:text-[18px] font-bold'>Online Shop – Responsive E-Commerce</h4>
              <p className='mt-2 text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] text-(--secondary-text)'>A minimal store design focused on smooth <br /> browsing and clean product display .</p>
            </div>

            <div className='p-5 w-full md:w-7/16 rounded-(--border-radius)' style={{ background: "var(--fill-gradient)" }}>
              <div className='relative w-full h-[180px] sm:h-[200px] md:h-[190px] lg:h-[220px] xl:h-[250px] rounded-(--border-radius) overflow-hidden' style={{ background: "var(--fill-gradient-secondary)" }}>
                <img src='/image/bgRecentProject.png' alt='' className='absolute bottom-0 left-0 w-auto h-full' />
                <img src='/image/musicPlayer.png' alt='' className='absolute -bottom-7 left-1/2 -translate-x-1/2 w-auto h-full scale-75' />
              </div>
              <h4 className='mt-2 text-[13px] sm:text-[18px] md:text-[14px] lg:text-[18px] font-bold'>Music Player - Inspired by Radio Javan</h4>
              <p className='mt-2 text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] text-(--secondary-text)'>A stylish, responsive music player designed <br /> for smooth listening and clean UI.</p>
            </div>

            <div className='p-5 w-full md:w-7/16 rounded-(--border-radius)' style={{ background: "var(--fill-gradient)" }}>
              <div className='relative w-full h-[180px] sm:h-[200px] md:h-[190px] lg:h-[220px] xl:h-[250px] rounded-(--border-radius) overflow-hidden' style={{ background: "var(--fill-gradient-secondary)" }}>
                <img src='/image/bgRecentProject.png' alt='' className='absolute bottom-0 left-0 w-auto h-full' />
                <img src='/image/tapsi.png' alt='' className='absolute -bottom-7 left-1/2 -translate-x-1/2 w-auto h-full scale-75 brightness-65' />
              </div>
              <h4 className='mt-2 text-[13px] sm:text-[18px] md:text-[14px] lg:text-[18px] font-bold'>Tapsi Landing Page – Built with Tailwind</h4>
              <p className='mt-2 text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] text-(--secondary-text)'>Modern Tapsi clone built for all screen <br /> sizes, no JavaScript used .</p>
            </div>
          </section>

        </section>
      </main>
    </>
  )
}
