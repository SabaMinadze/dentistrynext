import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import logo from "../../public/assets/logo2.jpg"

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <center>
          <Image
            src={logo}
            alt="error"
            className={styles.footerImg}
            height={150}
            width={300}
          />
        </center>
        <center>
          <h2 className={styles.footerText}>📞 574 42 42 38</h2>
        </center>
        <center>
          <hr className={styles.footerHr} />
        </center>
        <center>
          <h2 className={styles.footerText}>🗺️ პეკინის ქუჩა 17</h2>
        </center>
      </div>
      <br /><br /><br />
    </>
  );
};

export default Footer;
