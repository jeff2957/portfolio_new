import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { context } from "@react-three/fiber";

import styles from "./About.module.scss";


const aboutMe = "Ex IBM, Current Grad student Studying Music Tech at NYU. with a focus on Audio Production, Digital Signal Processing, and Web Development"
const aboutMe_one = "Dapple in Music Visuals, Production, and Recording."
const aboutMe_two = "「Blending beats and bytes, I craft soundscapes and digital experiences that resonate.」"


const About = () => {

    const wordsRef = useRef([])
    const wordContainer = useRef(null)
    const wordBody = useRef(null)

    const timeline = useRef(gsap.timeline())


    useEffect(() => {
        
        const context = gsap.context(() => {
            
            // createAnimation()
            timeline.current.to(wordsRef.current, 
                // {
                //     opacity: 0.2,
                //     ease: 'none',
                //     stagger: 0.1,
                // },
                {
                    opacity: 1,
                    ease: 'none',
                    stagger: 0.1,
                scrollTrigger: {
                    trigger: wordContainer.current,
                    scrub: true,
                    start: `top 40%`,
                    // end: `+=${window.innerHeight / 0.2}`,
                    end: `bottom 30%`,
                    // markers: true,
                    // pin: true,
                }
            })
        })

        return () => context.revert()

    }, [])

    const createAnimation = () => {
    }

    const splitWords = (phrase) => {
        // let body = [];
        // phrase.split(" ").forEach( (word, i) => {
        //   const letters = splitLetters(word);
        //   body.push(<p key={word + "_" + i} style={{ margin: "10px" }}>{letters}</p>)
        // })
        return(
          <p style={{ margin: "10px" }}>
            {phrase.split(" ").map((word, i) => (
              <span key={word + "_" + i} >
                {splitLetters(word)}
                {i !== phrase.split(" ").length - 1 && " "}
              </span>
            ))}
          </p>
        )
        // body
        
      }
    
      const splitLetters = (word) => {
        let letters = []
        word.split("").forEach( (letter, i) => {
          letters.push(<span key={letter + "_" + i} style={{opacity: 0.2}} ref={el => {wordsRef.current.push(el)}}>{letter}</span>)
        })
        return letters;
      }

    return (
        <div //className="sec-1-container" 
        className={styles.About__aboutContainer}
        style={{minHeight: "50vh", maxHeight: '100vh'}} ref={wordContainer}>
          {/* <div className={styles.About__aboutBody}> */}
            <div className={styles.About__aboutTitle}>
              <h1 className="text-one">About Me</h1>
            </div>
            <div ref={wordBody} className={styles.About__aboutMe}>
                { splitWords(aboutMe) }
                <br/>
                { splitWords(aboutMe_one)}
                <br/>
                { splitWords(aboutMe_two)}
            </div>
        </div>
    )
};


export default About