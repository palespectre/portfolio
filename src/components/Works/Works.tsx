import { FunctionComponent } from 'react';

import styles from './Works.module.css';

const Works: FunctionComponent = () => {
  return (
    <section data-scroll data-scroll-section className={styles.section}>
      <div className="container">
        <h2
          data-scroll
          data-scroll-repeat
          data-scroll-direction="horizontal"
          data-scroll-speed="-2"
          className={styles.title}
        >
          Work
        </h2>
      </div>
    </section>
  );
};

export default Works;
