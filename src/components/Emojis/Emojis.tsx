import { FunctionComponent } from 'react';

import styles from './Emojis.module.css';

const Emojis: FunctionComponent = () => {
  return (
    <div className={styles.emojis}>
      <img className={styles.emoji} src="/emoji-smile.svg" alt="" />
      <img className={styles.emoji} src="/emoji-sunglasses.svg" alt="" />
      <img className={styles.emoji} src="/emoji-heart.svg" alt="" />
      <img className={styles.emoji} src="/emoji-alien.svg" alt="" />
      <img className={styles.emoji} src="/emoji-thumb.svg" alt="" />
      <img className={styles.emoji} src="/emoji-smile.svg" alt="" />
      <img className={styles.emoji} src="/emoji-sunglasses.svg" alt="" />
      <img className={styles.emoji} src="/emoji-heart.svg" alt="" />
      <img className={styles.emoji} src="/emoji-alien.svg" alt="" />
    </div>
  );
};

export default Emojis;
