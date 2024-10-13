import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap";

// gsap.registerPlugin(ScrollTrigger)

export const animateObject = (meshRef) => {

    const lenis = new Lenis({
        duration: 1.2,
         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
      
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    const section1 = document.getElementById("section-one")
    const contentTop = document.getElementById("content-top") 

    gsap.to(".box", {
        x: 1,
        y: 100,
        z: 1,
        ease: "back.inOut",
        scrollTrigger: {
            trigger: "[data-section-one]",
            start: 'top top',
            // pin: true,
            end: 'bottom bottom',
            scrub: true,
            // markers: true,
        }
    })
}