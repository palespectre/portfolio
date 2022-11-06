import { FunctionComponent } from 'react';
import styles from './SlideUpButton.module.css';

import { addScopedClassNames } from '@/lib/utils';

const SlideUpButton: FunctionComponent = ({ text, classNames = `` }) => {
  return (
    <button className={`${styles.button} ${addScopedClassNames(styles, classNames)}`}>
      <div className={styles.wrapper} data-slide_up={text}>
        <span className={styles.text}>{text}</span>
      </div>
    </button>
  );
};

export default SlideUpButton;
