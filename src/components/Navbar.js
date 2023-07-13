import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../images/image-from-rawpixel-id-4035508-jpeg.jpg";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.listItem}>
            <a href="#products">Products</a>
          </li>
          <li className={styles.listItem}>
            <a href="#about">About Us</a>
          </li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
    </header>
  );
}
