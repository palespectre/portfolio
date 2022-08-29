import { FunctionComponent } from 'react';

import styles from './Nav.module.css';

const Nav: FunctionComponent = () => {
  return (
    <ul className={styles.nav}>
      <li>Work</li>
      <li>Contact</li>
    </ul>
  );
};

export default Nav;
