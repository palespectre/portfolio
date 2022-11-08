import { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './About.module.css';

const About: FunctionComponent = () => {
  return (
    <section data-scroll data-scroll-section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.text}>
          <div data-scroll className={styles.lineWrapper}>
            <h2 data-scroll data-scroll-class="line-appear-on-scroll" className={styles.title}>
              Je m'appelle Pierre, et je suis
            </h2>
          </div>
          <div data-scroll className={styles.lineWrapper}>
            <h2 data-scroll data-scroll-class="line-appear-on-scroll" className={styles.title}>
              développeur front-end
            </h2>
          </div>
          <div className={styles.description}>
            <div data-scroll data-scroll-repeat className={styles.lineWrapper}>
              <p data-scroll data-scroll-class="line-appear-on-scroll" className={styles.lineDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div data-scroll data-scroll-repeat className={styles.lineWrapper}>
              <p data-scroll data-scroll-class="line-appear-on-scroll" className={styles.lineDescription}>
                Fugit nihil praesentium magni blanditiis, aut nesciunt !
              </p>
            </div>
            <div data-scroll data-scroll-repeat className={styles.lineWrapper}>
              <p data-scroll data-scroll-class="line-appear-on-scroll" className={styles.lineDescription}>
                Maxime nesciunt error quia deleniti necessitatibus iure.
              </p>
            </div>
          </div>
        </div>
        <div data-scroll data-scroll-speed="-1" className={styles.media}>
          <div className={styles.left}>
            <div
              data-scroll
              data-scroll-offset="20, 0"
              data-scroll-class="image-appear-on-scroll"
              className={`${styles.imageWrapper} ${styles.imageWrapper1}`}
            >
              <img src="/pierre1.jpg" alt="Pierre" />
            </div>
            <div
              data-scroll
              data-scroll-offset="20, 0"
              data-scroll-class="image-appear-on-scroll"
              className={`${styles.imageWrapper} ${styles.imageWrapper2}`}
            >
              <img src="/pierre2.jpg" alt="Pierre" />
            </div>
          </div>
          <div className={styles.right}>
            <div
              data-scroll
              data-scroll-offset="20, 0"
              data-scroll-class="image-appear-on-scroll"
              className={`${styles.imageWrapper} ${styles.imageWrapper3}`}
            >
              <img src="/pierre3.jpg" alt="Pierre" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
