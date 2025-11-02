import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

export default function HomePage() {
  return (
    <>
      <main className="w-full h-[150vh]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-screen bg-[url('/image/grid-pattern.svg')] bg-cover bg-no-repeat z-0"></div>
        <div className="hidden sm:block absolute top-0 left-0 w-2/3 h-2/3 bg-[url('/image/spotlight.png')] bg-contain bg-no-repeat"></div>
        <div className="hidden sm:block absolute top-0 right-0 w-2/3 h-2/3 bg-[url('/image/spotlight.png')] bg-contain bg-no-repeat scale-x-[-1]"></div>
        <NavBar />
        <Hero />
        <section className='mx-[3%] flex flex-col lg:flex-row gap-5 justify-center mt-10 lg:mt-30'>
          <div className='w-full lg:w-6/12 h-[250px] md:h-80 lg:h-auto rounded-(--border-radius) relative overflow-hidden bg-[url(/image/Box.png)] bg-no-repeat bg-cover'>
            <p className='absolute bottom-4 left-4 text-[20px] md:text-[32px]'>I prioritize client <br /> collaboration, fostering <br /> open communication </p>
          </div>

          <div className='w-full lg:w-5/12 flex gap-5 flex-col'>
            <div className='relative rounded-(--border-radius) h-[170px] md:h-[230px] overflow-hidden opacity-80'
              style={{ background: "var(--fill-gradient)" }}>
              <img src='/image/Pagination.png' alt='' className='absolute bottom-0 left-0 w-full h-auto' />
              {/* <p className='absolute top-5 left-1/2 -translate-x-1/2 text-[20px] md:text-[32px]'>I’m very flexible work</p> */}
              <p className='absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 text-[14px] scale-160 sm:scale-200 md:scale-220'>I’m very flexible work</p>
            </div>

            <div className='relative rounded-(--border-radius) h-[150px] md:h-[230px] overflow-hidden' style={{ background: "var(--fill-gradient)" }}>
              <img src='/image/Group.png' alt='' className='absolute bottom-0 right-0 w-auto h-full' />
              <p className='absolute top-1/2 -translate-y-2/6 left-5 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[32px]'>My Tech Stack</p>
            </div>
          </div>
        </section>





        {/* <section className='mx-[3%] flex  flex-col sm:flex-row gap-5 justify-center mt-10 sm:mt-30'>
          <div className='w-full sm:w-5/12 flex gap-5 flex-col '>
            <div className='rounded-(--border-radius) h-[200px]' style={{ background: "var(--fill-gradient)" }}>
              1
            </div>
            <div className='rounded-(--border-radius) h-[200px]' style={{ background: "var(--fill-gradient)" }}>
              2
            </div>
          </div>
          <div className='w-full sm:w-6/12 h-[400px] rounded-(--border-radius) '
            style={{ background: "var(--fill-gradient)" }}>
            0
          </div>
        </section> */}
      </main>
    </>
  )
}
