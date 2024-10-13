import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animateAbout = () => {
    
    gsap.to(wordsRef.current, {
        scrollTrigger: {
            trigger: wordContainer.current,
            scrub: true,
            start: `top`,
            end: `+=${window.innerHeight / 1.5}`,
        },
        opacity: 1,
        ease: 'none',
        stagger: 0.1,
    })


}