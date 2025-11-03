import Image from 'next/image'
import React from 'react'

export default function Sec1() {
  return (
    <>
     <section id='about' className='mx-[3%] flex flex-col lg:flex-row gap-5 justify-center mt-10 lg:mt-30'>
          <div className='w-full lg:w-6/12 h-[250px] md:h-80 lg:h-auto rounded-(--border-radius) relative overflow-hidden bg-[url(/image/box.png)] bg-no-repeat bg-cover'>
            <p className='absolute bottom-4 left-4 text-[20px] md:text-[32px]'>I prioritize client <br /> collaboration, fostering <br /> open communication </p>
          </div>

          <div className='w-full lg:w-5/12 flex gap-5 flex-col'>
            <div className='relative rounded-(--border-radius) h-[170px] md:h-[230px] overflow-hidden opacity-80'
              style={{ background: "var(--fill-gradient)" }}>
              <img src='/image/Pagination.png' alt='' className='absolute bottom-0 left-0 w-full h-auto' />
              <p className='absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 text-[14px] scale-160 sm:scale-200 md:scale-220'>I’m very flexible work</p>
            </div>

            <div className='relative rounded-(--border-radius) h-[150px] md:h-[230px] overflow-hidden opacity-90' style={{ background: "var(--fill-gradient)" }}>
              <img src='/image/Group.png' alt='' className='absolute bottom-0 -right-4 lg:-right-16 xl:right-0 w-auto h-full'/>
              <img src='/image/grid-pattern.svg' alt='' className='absolute bottom-0 left-0 w-auto h-full scale-110' />
              <p className='absolute top-1/2 -translate-y-1/2 left-5 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[32px]'>My Tech Stack</p>
            </div>
          </div>
        </section>


        <section className='mx-[3%] lg:mx-[6%] flex flex-col lg:flex-row gap-5 justify-center mt-5'>
          <div className='order-2 w-full lg:w-3/12 flex gap-5 flex-col'>
            <div className='relative h-[125px] lg:h-[115px] rounded-(--border-radius) overflow-hidden opacity-80'
              style={{ background: "var(--fill-gradient)" }}>
              <img src='/image/grid-pattern.svg' alt='' className='absolute bottom-0 left-0 w-auto h-full scale-150' />
              <img src='/image/sectionInput.png' alt='' className='absolute -bottom-10 -right-15 md:-right-1 lg:-right-13 w-auto h-full scale-50 md:scale-80 lg:scale-50' />
              <p className='text-[18px] sm:text-[22px] md:text-[26px] lg:text-[16px] mt-6 sm:mt-10 md:mt-6 ml-4 lg:ml-4 md:w-[80%] lg:w-[90%] relative z-10'>Tech enthusiast with a passion for development.</p>
            </div>

            <div className='order-3 relative h-[125px] lg:h-[115px] rounded-(--border-radius) overflow-hidden'
              style={{ background: "var(--fill-gradient)" }}>
              <img src='/image/backgroundblobservicepng.png' alt='' className='absolute w-auto h-full' />
              <p className='relative flex justify-center top-4 lg:top-3 text-[18px] sm:text-[24px] lg:text-[17px]'>Do you want to start <br className='sm:hidden lg:block' /> a project together?</p>
              <div className='relative flex gap-3.5 justify-center items-center  -bottom-7 sm:-bottom-9 lg:-bottom-6 *:w-7 *:h-7 *:flex *:justify-center *:items-center *:rounded-[5px] *:cursor-pointer'>
                <a className='border border-(--stoke-color)' href='https://github.com/hoseinmohammadi-dev' target='_blank'><Image src='/icon/Vector-2.svg' width={17} height={17} alt='social' /></a>
                <a className='border border-(--stoke-color)' href='https://wa.me/989180888233' target='_blank'><Image src='/icon/Vector-3.svg' width={17} height={17} alt='social' /></a>
                <a className='border border-(--stoke-color)' href='https://instagram.com/hoseinmdev' target='_blank'><Image src='/icon/Vector.svg' width={17} height={17} alt='social' /></a>
              </div>
            </div>
          </div>

          <div className='order-1 lg:order-4 relative w-full lg:w-9/12 h-[150px] sm:h-[200px] md:h-[250px] rounded-(--border-radius) overflow-hidden'
            style={{ background: "var(--fill-gradient)" }}>
            <img src='/image/grid-pattern.svg' alt='' className='absolute bottom-0 left-0 w-auto h-full scale-150' />
            <img src='/image/ImageCode.png' alt='' className='absolute -bottom-10 -right-10 lg:-bottom-10 lg:right-0 w-auto h-full scale-80 lg:scale-100' />
            <div className='relative top-1/2 -translate-y-1/2 left-4'>
              <p className='text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-light text-(--secondary-text)'>THE INSIDE SCOOP</p>
              <p className='text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px]'>Constantly improving<br />crafting clean code</p>
            </div>
          </div>
        </section>
    
    </>
  )
}
