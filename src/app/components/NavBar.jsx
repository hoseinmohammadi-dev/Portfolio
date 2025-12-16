'use client'
import React, { useEffect, useState } from 'react'

export default function NavBar() {
  const [active, setActive] = useState('hero')

  const navItems = ['hero', 'about', 'project', 'contact']

  const handleClick = (id) => {
    const section = document.getElementById(id)
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight / 2

      for (let i = 0; i < navItems.length; i++) {
        const section = document.getElementById(navItems[i])
        if (!section) continue

        const top = section.offsetTop
        const height = section.offsetHeight

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActive(navItems[i])
          break
        }

        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 2
        ) {
          setActive(navItems[navItems.length - 1])
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="fixed z-50 -top-5 left-1/2 -translate-x-1/2 mx-auto mt-11 w-[85%] sm:w-[495px] h-[66px] rounded-(--border-radius) border border-(--stoke-color) py-5 px-3 sm:px-6 backdrop-blur-sm"
      style={{ background: 'var(--fill-gradient)/99' }}
    >
      <ul className="flex justify-between text-(--link-text) text-[14px] sm:text-[16px]">
        {navItems.map((item) => (
          <li
            key={item}
            className="relative cursor-pointer"
            onClick={() => handleClick(item)}
          >
            <span
              className={`capitalize transition-all duration-300 ${
                active === item
                  ? 'text-white'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {item}
            </span>

            <span
              className={`absolute left-1/2 -translate-x-1/2 -bottom-5 w-2 h-2 rounded-full transition-all duration-300 ${
                active === item
                  ? 'bg-white opacity-100 scale-100'
                  : 'bg-white/70 opacity-0 scale-0'
              }`}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
