import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

import styles from './Works.module.scss';

const projects = [
  { name: 'Web Design + Dev', image: '/images/scene01.png', intro: 'In this project, I developed the website for the Pangcah Festival, an event rooted in the cultural and artistic traditions of the Pangcah (Amis) people. The website is designed to reflect the festival’s core themes of sustainability, community, and cultural heritage, while offering an engaging and intuitive experience for visitors.', link: 'https://pangcahfestival.vercel.app/' },
  { name: 'Audio-Reactive Visuals', image: '/images/project2.jpg', intro: 'In these visual works, I explore the interplay between sound and image, crafting immersive audiovisual experiences that breathe life into my own music. Using p5.js & shader for one project, and TouchDesigner for another, I’ve sought to capture the energy and emotion of each track in dynamic, reactive visuals.', link: 'https://www.youtube.com/playlist?list=PLSrYrtDJoY4fFlzNgSQpAVVAXIKhqD--k'},
  { name: 'Audio Recording & Mixing', image: '/images/project3.jpg', intro: 'Through my experiences at Dolan Recording Studio and Vitruvian Sound NYC, I’ve cultivated a deep connection to the art of recording and mixing, especially for guitar and bass. Each session is a delicate balance between capturing the raw essence of the instrument and shaping it into something more—where sound becomes a landscape, and every note finds its place within a rich, immersive mix. My approach weaves technical mastery with artistic intuition, allowing the music to breathe and resonate, preserving its soul while polishing it into something timeless.', link: 'https://soundcloud.com/jeff-jeff-619662162/tracks' },
  { name: 'Project Three', image: '/images/project3.jpg' },
];


const Works = () => {

  const imageRef = useRef([])
  const textRef = useRef([])
  const containerRef = useRef(null)
  const tl = useRef(gsap.timeline())

  useEffect(() => {
    
    imageRef.current.forEach((image, i) => {

      const imageWidth = image.offsetWidth
      const containerWidth = containerRef.current.offsetWidth;
      const maxMove = containerWidth - imageWidth;


      tl.current.fromTo(image, {
          x: 50
        },
        {
          x: window.innerWidth - imageWidth - 50,
          // duration: 0.1,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: image,
            start: 'top 60%',
            end: 'bottom 70%',
            // markers: true,
            scrub: true,
        }
      })

      textRef.current.forEach((t, i) => {

        tl.current.to(t, {
            opacity: 1,
            scrollTrigger: {
              trigger: t,
              start: 'top 55%',
              end: 'bottom 70%',
              // markers: true,/
              scrub: true,
            }
          })
    })

    return () => trigger.forEach(t => t.kill())
  }, [])
})

  const generateRows = () => {
    const rows = []
    for (let i = 0; i < projects.length - 1; i += 1) {
      rows.push(
        <div className='row' key={i}>
          <div className='card'>
            <div className='card-title' style={{paddingLeft: '50px'}}>
              <span style={{fontSize: "5rem"}}>{projects[i].name}</span>
            </div>
            <div style={{display: 'flex', position: 'relative', paddingBottom: '100px'}}>
              <a href={projects[i].link} target="_blank" rel="noopener noreferrer">
                <Image className='img' ref={el => imageRef.current[i] = el} src={projects[i].image} alt={projects[i].name} width={500} height={300} />
              </a>
              <span 
                ref={el => textRef.current[i] = el} 
                style={{zIndex: -1, opacity: 0, position: 'absolute', paddingLeft: '50px', paddingTop: '10px', paddingRight: '550px', fontSize: '2.5rem', fontWeight: 'lighter', lineHeight: '1.5'}}>
                  {projects[i].intro}
              </span>
            </div>
          </div>
        </div>
      )
    }
    return rows;
  }
  
  return (
    <div className={styles.works} ref={containerRef}>
      <h1 style={{padding: '10px'}}>Works</h1>
      {generateRows()}
    </div>
  )

};

export default Works;
