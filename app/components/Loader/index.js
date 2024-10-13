import React, { useEffect, useRef } from "react";
import { words } from "./data";
import gsap from "gsap";

import styles from "./Loader.module.scss";
import { endAnimation, introAnimation, progressAnimation } from "./animation";

const Loader = ({ timeline }) => {

  const loaderRef = useRef(null)
  const progressRef = useRef(null)
  const progressNumberRef = useRef(null)
  const wordGroupsRef = useRef(null)

  useEffect(() => {
    timeline && 
    timeline.add(introAnimation(wordGroupsRef)).add(progressAnimation(progressRef, progressNumberRef), 0).add(endAnimation(loaderRef), "-=1")
  }, [timeline])

  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>0</span>
      </div>
      <div className={styles.loader} ref={loaderRef}>
        <div className={styles.loader__words} >
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordGroupsRef}>
            {words.map((word, index) => {
              return (
                <span key={index} className={`${styles.loader__word} ${word === "Yenfu Lu" ? styles['loader__word--italic'] : ''}`}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
