import { FunctionComponent, useRef } from 'react';
import { gsap } from 'gsap';

import Emojis from '../Emojis';

import styles from './Hero.module.css';

const Hero: FunctionComponent = () => {
  const wrapperRef = useRef<HTMLInputElement>();
  const shapesRef = useRef<HTMLInputElement>();

  const handleMouseMove = (e) => {
    // Get cursor position relative to box with text
    const rect = wrapperRef?.current?.getBoundingClientRect();
    const x = e.clientX - rect?.left;
    const y = e.clientY - rect?.top;

    // Animate shapes
    gsap.to(shapesRef?.current?.childNodes, {
      x: x,
      y: y,
      duration: (i) => 1.4 - i * 0.2, // set different duration for every block
      stagger: 0.01,
      ease: `expo.out`,
    });
  };

  return (
    <section data-scroll data-scroll-section className={styles.hero} onMouseMove={handleMouseMove}>
      <div className={styles.content}>
        <div ref={wrapperRef} className={styles.container}>
          <Emojis />
          <div ref={shapesRef} className={styles.shapes}>
            <div className={styles.shape}></div>
            <div className={styles.shape}></div>
            <div className={styles.shape}></div>
          </div>
          <div className={styles.title}>
            <h1 data-scroll data-scroll-speed="-2">
              <div
                data-scroll
                data-scroll-class="letter-appear-on-scroll"
                data-scroll-speed="2"
                className={styles.letterWrapper}
              >
                <span
                  data-scroll
                  data-scroll-class="letter-appear-on-scroll"
                  data-scroll-speed="2"
                  className={styles.letter}
                >
                  C
                </span>
              </div>
              <div
                data-scroll
                data-scroll-class="letter-appear-on-scroll"
                data-scroll-speed="-1"
                className={styles.letterWrapper}
              >
                <span
                  data-scroll
                  data-scroll-class="letter-appear-on-scroll"
                  data-scroll-speed="-1"
                  className={styles.letter}
                >
                  o
                </span>
              </div>
              <div
                data-scroll
                data-scroll-class="letter-appear-on-scroll"
                data-scroll-speed="1"
                className={styles.letterWrapper}
              >
                <span
                  data-scroll
                  data-scroll-class="letter-appear-on-scroll"
                  data-scroll-speed="1"
                  className={styles.letter}
                >
                  u
                </span>
              </div>
              <div
                data-scroll
                data-scroll-class="letter-appear-on-scroll"
                data-scroll-speed="-0.5"
                className={styles.letterWrapper}
              >
                <span
                  data-scroll
                  data-scroll-class="letter-appear-on-scroll"
                  data-scroll-speed="-0.5"
                  className={styles.letter}
                >
                  c
                </span>
              </div>
              <div
                data-scroll
                data-scroll-class="letter-appear-on-scroll"
                data-scroll-speed="1"
                className={styles.letterWrapper}
              >
                <span
                  data-scroll
                  data-scroll-class="letter-appear-on-scroll"
                  data-scroll-speed="1"
                  className={styles.letter}
                >
                  o
                </span>
              </div>
              <div
                data-scroll
                data-scroll-class="letter-appear-on-scroll"
                data-scroll-speed="3"
                className={styles.letterWrapper}
              >
                <span
                  data-scroll
                  data-scroll-class="letter-appear-on-scroll"
                  data-scroll-speed="3"
                  className={styles.letter}
                >
                  u
                </span>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
