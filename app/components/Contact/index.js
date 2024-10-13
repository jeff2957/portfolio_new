import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import styles from './Contact.module.scss';
import linkAnimation from './linkAnimation'

const linkTitle = ["→Linkedin", "→Instagram", "→Soundcloud"]

const transforms = [
    {
        x: -0.8,
        y: -0.6,
        rotationZ: -29
    },
    {
        x: -0.2,
        y: -0.4,
        rotationZ: -6
    },
    {
        x: -0.05,
        y: 0.1,
        rotationZ: 12
    },
    {
        x: -0.05,
        y: -0.1,
        rotationZ: -9
    },
    {
        x: -0.1,
        y: 0.55,
        rotationZ: 3
    },
    {
        x: 0,
        y: -0.1,
        rotationZ: 9
    },
    {
        x: 0,
        y: 0.15,
        rotationZ: -12
    },
    {
        x: 0,
        y: 0.15,
        rotationZ: -17
    },
    {
        x: 0,
        y: -0.65,
        rotationZ: 9
    },
    {
        x: 0.1,
        y: 0.4,
        rotationZ: 12
    },
    {
        x: 0,
        y: -0.15,
        rotationZ: -9
    },
    {
        x: 0.2,
        y: 0.15,
        rotationZ: 12
    },
    {
        x: 0.8,
        y: 0.6,
        rotationZ: 20
    }
  ]



const Contact = () => {

    // const linkRef = useRef(null)
    // const lettersRef = useRef([])
    const linkRef = useRef(null)
    const tl = useRef(gsap.timeline())

    // const [isAnimated, setIsAnimated] = useState(false)

    const splitLetters = (word) => {
        let letters = []
        word.split("").forEach( (letter, i) => {
          letters.push(
            <span 
              className={styles.linkStyle}
              key={letter + "_" + i} 
            //   ref={el => { lettersRef.current[i] = el; }} // Update to use index
            >
              {letter}
            </span>
          );
        });
        return letters;
    }

    useEffect(() => {

        const linkDivs = linkRef.current.querySelectorAll(`.${styles.containerStyle}`)
        const linkAs = linkRef.current.querySelectorAll('a')


        linkDivs.forEach((link, i) => {
            link.addEventListener('mouseenter', () => {
                gsap.to(linkAs[i], {
                    fontSize: '80px',
                    duration: 0.5,
                    // ease: 'power.out'
                })

                if (link.innerText.includes('Linkedin')) { // Check if the link text includes 'Linkedin'
                    gsap.to(link, {
                        backgroundColor: 'blue', // Set background color to blue
                        duration: 0.5,
                        ease: 'power3.out',
                        height: '30vh'
                    });
                } else if (link.innerText.includes('Instagram')) { // Check if the link text includes 'Linkedin'
                    gsap.to(link, {
                        backgroundColor: '#DD2A7B', // Set background color to blue
                        duration: 0.5,
                        ease: 'power3.out',
                        height: '30vh'
                    });
                } else {
                    gsap.to(link, {
                        backgroundColor: '#FF7700', // Set background color to blue
                        duration: 0.5,
                        ease: 'power3.out',
                        height: '30vh'
                    });
                }
            });

            link.addEventListener('mouseleave', () => {
                gsap.to(link, {
                    height: '10vh', // Return height to original
                    // fontSize: 'initial', // Reset font size
                    // duration: 0.5,
                    ease: 'power3.out',
                    backgroundColor: 'black'
                })

                gsap.to(linkAs[i], {
                    fontSize: '40px',
                    // duration: 0.3,
                    // ease: 'power.out'
                })
            });
        });
    }, []);

    return (
        <div className={styles.section} ref={linkRef}>
            <div className={styles.containerStyle}>
                <p className={styles.linkStyle}>
                    <a className={styles.linkStyle} href='https://www.linkedin.com/in/yen-fu-lu-593347178/'>
                    {linkTitle[0]}
                    </a>
                </p>
            </div>
            <div className={styles.containerStyle}>
                <p>
                    <a className={styles.linkStyle} href='https://www.instagram.com/luyenfu_/'>
                    {linkTitle[1]}
                    </a>
                </p>
            </div>
            <div className={styles.containerStyle}>
                <p>
                    <a className={styles.linkStyle} href='https://soundcloud.com/jeff-jeff-619662162/tracks'>
                    {linkTitle[2]}
                    </a>
                </p>
            </div>
            <div style={{backgroundColor:'grey', display: 'flex', alignItems: 'end', justifyContent: 'end', paddingRight: '15px'}}>
                <h1 style={{color: 'white', fontSize: '10rem'}}>Contact</h1>
            </div>
        </div>
    );
};

export default Contact;
