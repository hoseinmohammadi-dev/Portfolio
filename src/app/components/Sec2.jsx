import React from 'react'
import Image from 'next/image'

export default function Sec2() {
    return (
        <>
            <section id='project' className='mx-[3%] sm:mx-auto mt-15 md:mt-30'>
                <h2 className='font-bold text-3xl md:text-4xl xl:text-5xl text-center mb-5 sm:mb-7 md:mb-10 lg:mb-14'>A small selection of <br  className='md:hidden'/><span className='text-(--title-text)'>recent projects</span></h2>

                <section className='flex gap-5 justify-center flex-wrap'>
                    <div className='p-5 w-full md:w-7/16 rounded-(--border-radius)' style={{ background: "var(--fill-gradient)" }}>
                        <div className='relative w-full h-[180px] sm:h-[200px] md:h-[190px] lg:h-[220px] xl:h-[250px] rounded-(--border-radius) overflow-hidden' style={{ background: "var(--fill-gradient-secondary)" }}>
                            <img src='/image/bgRecentProject.png' alt='' className='absolute bottom-0 left-0 w-auto h-full' />
                            <img src='/image/adminPanel.png' alt='' className='absolute -bottom-7 left-1/2 -translate-x-1/2 w-auto h-full scale-75 xl:scale-90' />
                        </div>
                        <h4 className='mt-2 text-[13px] sm:text-[18px] md:text-[14px] lg:text-[18px] font-bold'>Admin Dashboard – Smart Control Panel</h4>
                        <p className='mt-0.5 text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] text-(--secondary-text)'>A sleek and modern control panel, crafted for <br /> clarity, ease of use, and precise management</p>
                        <div className='mt-2 mx-0.5 flex justify-between items-center'>
                            <div className='flex *:-mr-1.5 *:w-6.5 *:h-6.5 sm:*:w-8 sm:*:h-8 md:*:w-6.5 md:*:h-6.5 lg:*:w-8 lg:*:h-8'>
                                <Image src="/icon/react.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-0.5 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                                <Image src="/icon/nextjs.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-0.5 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                                <Image src="/icon/materialui.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-0.5 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                                <Image src="/icon/tailwindcss.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-0.5 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                                <Image src="/icon/Rechart.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-0.5 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                            </div>
                            <a href="https://github.com/hoseinmohammadi-dev/admin-panel" target='_blank' className=' flex justify-center gap-1.5 border border-(--stoke-color) rounded-(--border-radius) text-(--primary-text) text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] px-2 py-1  cursor-pointer z-10' style={{ background: "var(--fill-gradient)" }}>
                                <p >See My Work</p>
                                <Image src="/icon/Arrow.svg" width={10} height={10} alt='Arrow' />
                            </a>
                        </div>
                    </div>

                    <div className='p-5 w-full md:w-7/16 rounded-(--border-radius)' style={{ background: "var(--fill-gradient)" }}>
                        <div className='relative w-full h-[180px] sm:h-[200px] md:h-[190px] lg:h-[220px] xl:h-[250px] rounded-(--border-radius) overflow-hidden' style={{ background: "var(--fill-gradient-secondary)" }}>
                            <img src='/image/bgRecentProject.png' alt='' className='absolute bottom-0 left-0 w-auto h-full' />
                            <img src='/image/shop.png' alt='' className='absolute -bottom-7 left-1/2 -translate-x-1/2 w-auto h-full scale-75 xl:scale-90 brightness-65' />
                        </div>
                        <h4 className='mt-2 text-[13px] sm:text-[18px] md:text-[14px] lg:text-[18px] font-bold'>Online Shop – Responsive E-Commerce</h4>
                        <p className='mt-0.5 text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] text-(--secondary-text)'>A minimal store design focused on smooth <br /> browsing and clean product display .</p>
                        <div className='mt-2 mx-0.5 flex justify-between items-center'>
                            <div className='flex *:-mr-1.5 *:w-6.5 *:h-6.5 sm:*:w-8 sm:*:h-8 md:*:w-6.5 md:*:h-6.5 lg:*:w-8 lg:*:h-8'>
                                <Image src="/icon/react.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-0.5 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                                <Image src="/icon/nextjs.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-0.5 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                                <Image src="/icon/tailwindcss.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-0.5 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                                <Image src="/icon/zustand.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-0.5 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                            </div>
                            <a href="https://github.com/hoseinmohammadi-dev/ShopZamanIran" target='_blank' className=' flex justify-center gap-1.5 border border-(--stoke-color) rounded-(--border-radius) text-(--primary-text) text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] px-2 py-1  cursor-pointer z-10' style={{ background: "var(--fill-gradient)" }}>
                                <p >See My Work</p>
                                <Image src="/icon/Arrow.svg" width={10} height={10} alt='Arrow' />
                            </a>
                        </div>
                    </div>

                    <div className='p-5 w-full md:w-7/16 rounded-(--border-radius)' style={{ background: "var(--fill-gradient)" }}>
                        <div className='relative w-full h-[180px] sm:h-[200px] md:h-[190px] lg:h-[220px] xl:h-[250px] rounded-(--border-radius) overflow-hidden' style={{ background: "var(--fill-gradient-secondary)" }}>
                            <img src='/image/bgRecentProject.png' alt='' className='absolute bottom-0 left-0 w-auto h-full' />
                            <img src='/image/tapsi.png' alt='' className='absolute -bottom-7 left-1/2 -translate-x-1/2 w-auto h-full scale-75 xl:scale-90 brightness-65' />
                        </div>
                        <h4 className='mt-2 text-[13px] sm:text-[18px] md:text-[14px] lg:text-[18px] font-bold'>Tapsi Landing Page – Built with Tailwind</h4>
                        <p className='mt-0.5 text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] text-(--secondary-text)'>Modern Tapsi clone built for all screen <br /> sizes, no JavaScript used .</p>
                        <div className='mt-2 mx-0.5 flex justify-between items-center'>
                            <div className='flex *:-mr-1.5 *:w-6.5 *:h-6.5 sm:*:w-8 sm:*:h-8 md:*:w-6.5 md:*:h-6.5 lg:*:w-8 lg:*:h-8'>
                                <Image src="/icon/html5.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-1 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                                <Image src="/icon/css3.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-1 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                                <Image src="/icon/tailwindcss.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-0.5 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                            </div>
                            <a href="https://github.com/hoseinmohammadi-dev/tapsi" target='_blank' className=' flex justify-center gap-1.5 border border-(--stoke-color) rounded-(--border-radius) text-(--primary-text) text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] px-2 py-1  cursor-pointer z-10' style={{ background: "var(--fill-gradient)" }}>
                                <p >See My Work</p>
                                <Image src="/icon/Arrow.svg" width={10} height={10} alt='Arrow' />
                            </a>
                        </div>
                    </div>

                    <div className='p-5 w-full md:w-7/16 rounded-(--border-radius)' style={{ background: "var(--fill-gradient)" }}>
                        <div className='relative w-full h-[180px] sm:h-[200px] md:h-[190px] lg:h-[220px] xl:h-[250px] rounded-(--border-radius) overflow-hidden' style={{ background: "var(--fill-gradient-secondary)" }}>
                            <img src='/image/bgRecentProject.png' alt='' className='absolute bottom-0 left-0 w-auto h-full' />
                            <img src='/image/musicPlayer.png' alt='' className='absolute -bottom-7 left-1/2 -translate-x-1/2 w-auto h-full scale-75 xl:scale-90' />
                        </div>
                        <h4 className='mt-2 text-[13px] sm:text-[18px] md:text-[14px] lg:text-[18px] font-bold'>Music Player - Inspired by Radio Javan</h4>
                        <p className='mt-0.5 text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] text-(--secondary-text)'>A stylish, responsive music player designed <br /> for smooth listening and clean UI.</p>
                        <div className='mt-2 mx-0.5 flex justify-between items-center'>
                            <div className='flex *:-mr-1.5 *:w-6.5 *:h-6.5 sm:*:w-8 sm:*:h-8 md:*:w-6.5 md:*:h-6.5 lg:*:w-8 lg:*:h-8'>
                                <Image src="/icon/javascript.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-1 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                                <Image src="/icon/tailwindcss.svg" width={10} height={10} alt='devTools' className='border border-(--stoke-color) rounded-full p-0.5 z-20' style={{ background: "var(--fill-gradient)" }}></Image>
                            </div>
                            <a href="https://github.com/hoseinmohammadi-dev/music-player" target='_blank' className=' flex justify-center gap-1.5 border border-(--stoke-color) rounded-(--border-radius) text-(--primary-text) text-[12px] sm:text-[15px] md:text-[12px] lg:text-[15px] px-2 py-1  cursor-pointer z-10' style={{ background: "var(--fill-gradient)" }}>
                                <p >See My Work</p>
                                <Image src="/icon/Arrow.svg" width={10} height={10} alt='Arrow' />
                            </a>
                        </div>
                    </div>
                </section>

            </section>
        </>
    )
}
