import { FunctionComponent } from 'react';

import styles from './Hero.module.css';

const Hero: FunctionComponent = () => {
  return (
    <div data-scroll data-scroll-section className={styles.hero}>
      <h1 className={styles.title}>Coucou</h1>
    </div>
  );
};

export default Hero;
