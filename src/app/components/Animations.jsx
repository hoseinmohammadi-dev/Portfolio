"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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

    }, [])

    return null
}
