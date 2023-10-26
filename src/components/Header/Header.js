import React from 'react';
import styles from './Header.module.css';

import logo from '../../assets/logo.svg';
import profileImg from '../../assets/profile.jpg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='Cuvette Logo' />
      <div className={styles.headerDiv}>
        <img
          src={profileImg}
          alt='Pranshu Sati avatar'
          className={styles.profileImg}
        />
        <p>Pranshu Sati</p>
      </div>
    </header>
  );
};

export default Header;
