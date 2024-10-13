import gsap from "gsap"


export const introAnimation = (wordGroupsRef) => {
    const tl = gsap.timeline();

    tl.to(wordGroupsRef.current, {
        yPercent: -80,
        duration: 5,
        ease: "expo.inOut"
    });

    return tl;
}

export const progressAnimation = (progressRef, progressNumberRef) => {
    const tl = gsap.timeline();
    
    tl.to(progressRef.current, {
        scaleX: 1,
        duration: 5,
        ease: "power3.inOut"
    }).to(progressNumberRef.current, {
        x: "100vw",
        duration: 5,
        ease: "power3.inOut"
    }, "<").to(progressNumberRef.current, {
        textContent: "100",
        duration: 5,
        ease: "power3.inOut",
        roundProps: "textContent"
    }, "<").to(progressNumberRef.current, {
        y: "24px",
        alpha: 0,
        ease: "power1.inOut"
    }).to(progressRef.current, {
        y: "24px",
        alpha: 0,
        ease: "power1.inOut"
    }, "<")

    return tl;
}

export const endAnimation = (loaderRef) => {
    const tl = gsap.timeline();

    tl.to(loaderRef.current, {
        scaleY: 0,
        duration: 1,
        ease: "power3.inOut"
    });

    return tl;
}