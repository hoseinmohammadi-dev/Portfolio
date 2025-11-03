import React from 'react'
import Image from 'next/image'


export default function Hero() {
    return (
        <section id='hero' className='mt-30 flex flex-col items-center'>
            <h1 className='text-[30px] sm:text-[45px] md:text-[60px] text-center text-(--primary-text) font-bold z-10'>Hey, I'm <br className='lg:hidden' /><strong className='text-(--title-text)'>Hosein Mohammadi</strong><br /> Front-End Developer</h1>
            <p className='font-light text-[10px] sm:text-[16px] md:text-[18px] text-(--secondary-text) mt-5'>Transforming Concepts into Seamless User Experiences</p>
            <a href="https://github.com/hoseinmohammadi-dev" target='_blank' className='w-[80%] sm:w-auto flex justify-center gap-2.5 border border-(--stoke-color) rounded-(--border-radius) text-(--primary-text) text-[12px] sm:text-[16px] px-7 py-3 mt-4 cursor-pointer z-10'
                style={{ background: "var(--fill-gradient)" }}>
                <p >See My Work</p>
                <Image src="/icon/Arrow.svg" width={14} height={14} alt='Arrow' />
            </a>
        </section>
    )
}


