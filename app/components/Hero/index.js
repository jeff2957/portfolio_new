import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

import styles from "./Hero.module.scss";

import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";

import { animateTitle } from "./animation";
import { ThreeScene } from "./threescene";
import { Canvas } from "@react-three/fiber";
import { animateObject } from "./3dAnimation";
import { modularizeImports, reactStrictMode } from "../../../next.config";

const Hero = () => {

  const timeline = useRef(gsap.timeline())

  const lineRef = useRef(null)

  const meshRef = useRef(null)

  useEffect(() => {

    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle())

      // ScrollTrigger.create({
      //   trigger: '[data-section-one]',
      //   pin: true,
      //   start: 'top top',
      //   endTrigger: 'data-div-wrap',
      //   end: 'bottom bottom',
      //   scrub: 1,
      //   markers: true
      // })

      gsap.to("Canvas", {
        scaleY: '800%',
        scaleX: '800%',
        ease: 'back.inOut',
        scrollTrigger: {
          trigger: '[data-section-one]',
          pin: true,
          start: 'top top',
          endTrigger: 'data-div-wrap',
          end: 'bottom +=500',
          scrub: 3,
          // markers: true
        }
      })
    })

    return () => context.revert()

  }, [])

  return (
    <section id="home" data-section-one className={styles.hero}>
      <div data-div-wrap>
        
        {/* <Navigation /> */}

        <h1 className={styles.hero__title}>
          <span data-title-first>Yenfu</span>
          <span data-hero-line className={styles.hero__line} ref={lineRef}></span>
          <span data-title-last>Lu</span>
        </h1>

        <Canvas data-canvas style={{zIndex: -2, position: 'fixed'}}>
          <ThreeScene/>
        </Canvas>

        {/* <div className={styles.hero__image}>
          <div data-image-overlay className={styles.hero__imageOverlay}></div>
          <Image
            data-image
            // src="/images/blob.jpg"
            width={1728}
            height={650}
            alt="Blob"
            style={{ objectFit: "cover" }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
