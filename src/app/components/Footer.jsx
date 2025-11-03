import Image from 'next/image'
import React from 'react'

export default function Footer() {

  return (
    <section className='flex flex-col items-center relative z-0 h-80 w-full bg-[url("/image/grid-pattern.svg")] bg-cover bg-no-repeat'>
      <h2 className='relative z-10 font-bold text-2xl md:text-4xl xl:text-5xl text-center mb-3 sm:mb-4 md:mb-5 mt-10 md:mt-15'>Ready to take <span className='text-(--title-text)'>your</span> digital <br /> presence to the next level?</h2>
      <a href="https://wa.me/989180888233" target='_blank' className='w-[250px] flex justify-center gap-2.5 border border-(--stoke-color) rounded-(--border-radius) text-(--primary-text) text-[12px] sm:text-[16px] px-7 py-3 mt-4 cursor-pointer z-10'
        style={{ background: "var(--fill-gradient)" }}>
        <p >Contact Me Now</p>
        <Image src="/icon/Arrow.svg" width={14} height={14} alt='Arrow' />
      </a>
      <p className='w-[80%] sm:w-full font-light text-center text-[12px] sm:text-[14px] text-(--secondary-text) mt-5'>Reach out to me today and let's discuss how I can help you achieve your goals.</p>
      <div className='w-full flex gap-2 flex-col sm:flex-row justify-center sm:justify-between items-center mt-7'>
        <p className='font-light text-center text-[10px] sm:text-[12px] mt-5 mb-2.5'>Copyright ©2025 Hosein Mohammadi</p>
        <div className='flex gap-3.5 justify-center items-center *:w-7 *:h-7 *:flex *:justify-center *:items-center *:rounded-[5px] *:cursor-pointer mb-4 sm:mb-0'>
          <a className='border border-(--stoke-color)' href='https://github.com/hoseinmohammadi-dev' target='_blank'><Image src='/icon/Vector-2.svg' width={17} height={17} alt='social' /></a>
          <a className='border border-(--stoke-color)' href='https://wa.me/989180888233' target='_blank'><Image src='/icon/Vector-3.svg' width={17} height={17} alt='social' /></a>
          <a className='border border-(--stoke-color)' href='https://instagram.com/hoseinmdev' target='_blank'><Image src='/icon/Vector.svg' width={17} height={17} alt='social' /></a>
          <a className='border border-(--stoke-color)' href='https://www.linkedin.com/in/hoseinmohammadi-dev' target='_blank'><Image src='/icon/Linkedin.svg' width={17} height={17} alt='social' /></a>
        </div>
      </div>
    </section>
  )
}
