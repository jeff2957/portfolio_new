"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import About from "@/components/About"
import Navigation from "@/components/Navigation";
import Works from "@/components/Works";
import Contact from "./components/Contact";



import { Canvas } from "@react-three/fiber";
import { ThreeScene } from "@/components/Hero/threescene";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger)

const Home = () => {

  const [loaderFinished, setLoaderFinished] = useState(false)

  const [timeline, setTimeline] = useState(null)

  useLayoutEffect(() => {

    const context = gsap.context(() => {
      
      const tl = gsap.timeline({

        onComplete: () => setLoaderFinished(true)

      });

      setTimeline(tl)

    });

    return () => context.revert()
  }, []);

  // const containerRef = useRef(null)


  // useEffect(() => {

  //   const st = gsap.registerPlugin(ScrollTrigger)


  //   const blockRows = document.querySelectorAll(".blocks-row")
  //   blockRows.forEach((row) => {
  //     for (let i = 0; i < 16; i++) {
  //       const block = document.createElement("div")
  //       block.className = "block"
  //       row.appendChild(block)
  //     }
  //   })

  //   const blockContainers = document.querySelectorAll(".blocks-container")
  //   blockContainers.forEach((container) => {
  //     const rows = container.querySelectorAll(".blocks-row")
  //     const numRows = rows.length

  //     rows.forEach((row, rowIndex) => {
  //       const blocks = Array.from(row.querySelectorAll(".block"))
  //       const isTop = container.classList.contains("top")

  //       const randomizedOrder = gsap.utils.shuffle(blocks.map((block, idx) => idx))


  //       ScrollTrigger.create({
  //           trigger: container,
  //           start: "top bottom",
  //           end: 'bottom top',
  //           scrub: true,
  //           onUpdate: (self) => {
  //             let progress = self.progress
  //             let rowDelay = 0.3 * (numRows - rowIndex - 1)
  //             let adjustedProgress = Math.max(0, Math.min(1, progress - rowDelay))

  //             updateBlocksOpacity(blocks, randomizedOrder, isTop, adjustedProgress)
  //         }
  //       })
  //     })
  //   })

  //   function updateBlocksOpacity(blocks, order, isTop, progress) {
  //     blocks.forEach((block, idx) => {
  //       let offset = order.indexOf(idx) / blocks.length
  //       let adjustedProgress = (progress - offset) * blocks.length
  //       let opacity = isTop 
  //         ? 1 - Math.min(1, Math.max(0, adjustedProgress))
  //         : Math.min(1, Math.max(0, adjustedProgress))
    
  //         block.style.opacity = opacity
  //     })
  //   }

  // }, [])

  return (
    <main>
      {loaderFinished ? 
      <div>
        <Navigation/>
        <Hero/> 
        <section id="about">
          <About />
        </section>
        <section id="works">
          <Works/>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      : 
      <Loader timeline={timeline}/>}
    </main>
  );
};

export default Home;
