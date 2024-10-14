import gsap from "gsap";

export const animateTitle = () => {
    const tl = gsap.timeline({
        defaults: {
            ease: "expo.inOut",
            duration: 3
        },
    });


    tl.to("[data-hero-line]", {
        scaleX: 1,
    }, "<-1").from("[data-title-first]", {
        x: "30vw",
        alpha: 0,
    }, "<").to("[data-menu-container]", {
        scaleY: 1.2,
        scaleX: 0.6,
        alpha: 1,
        ease: "power2.inOut"
    }, "<").from("[data-title-last]", {
        x: "-30vw",
        alpha: 0,
    }, "<").from("[data-canvas]", {
        yPercent: 30,
        alpha: 0,
        ease: "power3.inOut"
    }, "<")

    return tl;
}