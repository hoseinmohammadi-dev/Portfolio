import React from 'react'
import NavBar from './components/NavBar'

export default function HomePage() {
  return (
    <>
      <header className="w-full h-screen">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3  h-screen bg-[url('/image/grid-pattern.svg')] bg-cover bg-no-repeat z-0"></div>
        <div className="hidden sm:block absolute top-0 left-0 w-2/3 h-2/3 bg-[url('/image/spotlight.png')] bg-contain bg-no-repeat"></div>
        <div className="hidden sm:block absolute top-0 right-0 w-2/3 h-2/3 bg-[url('/image/spotlight.png')] bg-contain bg-no-repeat scale-x-[-1]"></div>
        <NavBar />
      </header>
    </>
  )
}
