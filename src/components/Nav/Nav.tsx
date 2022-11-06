import { FunctionComponent } from 'react';

import SlideUpButton from '../SlideUpButton';

import styles from './Nav.module.css';

const Nav: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <SlideUpButton text="Work" classNames="isWhite" />
          </li>
          <li className={styles.navItem}>
            <SlideUpButton text="Contact" classNames="isWhite" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
