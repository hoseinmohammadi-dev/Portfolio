'use client'
import React, { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState("Hero");

  const navItems = ["Hero", "About Me", "Projects", "Contact"];

  return (
    <section
      className="fixed -top-5 left-1/2 z-20 -translate-x-1/2 mx-auto mt-11 w-[95%] sm:w-[495px] h-[66px] rounded-(--border-radius) border border-(--stoke-color) py-5 px-3 sm:px-6 backdrop-blur-sm"
      style={{ background: "var(--fill-gradient)/99" }}
    >
      <ul className="flex justify-between text-(--link-text) text-[14px] sm:text-[16px]">
        {navItems.map((item) => (
          <li key={item} className="relative cursor-pointer"  onClick={() => setActive(item)}>

            <span className={`transition-all duration-300 ${active === item ? "text-white" : "opacity-70 hover:opacity-100"}`}>
              {item}
            </span>

            <span className={`absolute left-1/2 -translate-x-1/2 -bottom-5 w-2 h-2 rounded-full transition-all duration-300 ${ active === item ? "bg-white opacity-100 scale-100": "bg-white/70 opacity-0 scale-0 group-hover:scale-100"}`}/>
          </li>
        ))}
      </ul>
    </section>
  );
}
