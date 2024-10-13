import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import styles from './Navigation.module.scss';

const Navigation = () => {

    const navRef = useRef(null);

    useEffect(() => {
        const navItems = navRef.current.querySelectorAll('a');
        const navBar = navRef.current;

        navBar.addEventListener('mouseenter', () => {
            gsap.to(navBar, {
                // scale: 1.1,
                // y: -2,
                // opacity: 1,
                borderRadius: '10px',
                width: '18vw',
                // left: '41vw',
                position: 'fixed',
                duration: 0.4,
                // ease: 'power3.Out'
            });
        });

        navBar.addEventListener('mouseleave', () => {
            gsap.to(navBar, {
                // scale: 1.1,
                // y: -2,
                // opacity: 1,
                borderRadius: '5px',
                width: '20vw',
                // left: '40vw',
                position: 'fixed',
                duration: 0.3,
                // ease: 'power3.inOut'
            });
        });

        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    scale: 1.1,
                    y: -2,
                    opacity: 1,
                    duration: 0.3,
                    textShadow: '0px 3px 6px #ecebeb8b',
                    // ease: 'power3.inOut'
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    scale: 1,
                    y: 0,
                    opacity: 0.2,
                    duration: 0.3,
                    // ease: 'power3.inOut'
                });
            });
        });
    }, []);

    return (
        <nav className={styles.stickyNav} ref={navRef}>
            <ul>
                <li className='link'><a href="#home">Home</a></li>
                <li className='link'><a href="#about">About</a></li>
                <li className='link'><a href="#works">Works</a></li>
                <li className='link'><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
