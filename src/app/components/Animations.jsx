"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Animations() {
    useEffect(() => {
        gsap.utils.toArray(".anim-text").forEach((el) => {
            gsap.fromTo(
                el,
                {
                    y: 50,
                    opacity: 0,
                    rotationX: 50,
                    rotationY: 50,
                    rotationZ: 10,
                    scale: 0.7,
                    z: 100,
                    transformOrigin: "50% 50%",
                },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scale: 1,
                    z: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        })

        const h1 = document.getElementById("hero-title")
        if (!h1) return

        const split = new SplitText(h1, { type: "chars" })
        gsap.from(split.chars, {
            y: 50,
            opacity: 0,
            rotationX: 20,
            rotationY: 10,
            stagger: 0.05,
            duration: 0.7,
            ease: "power3.out",
        })


        const titles = gsap.utils.toArray(".scroll-title")

        titles.forEach((title) => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            })
        })


    }, [])

    return null
}
