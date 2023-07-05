import React from "react";
import styles from "./Navbar.module.css";
import StinkBait from "../assets/pngFiles/StinkbaiteLettering.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.container}>
          <div className={styles.tabsContainer}>
            <p>Documentation</p>
            <p>Pricing</p>
            <img src={StinkBait} alt="StinkBait" />
            <p>Features</p>
            <p>Products</p>
          </div>
          <div className={styles.rightAlignedItem}>
            <button className={styles.Login}>Login</button>
            <button className={styles.SignUp}>Sign Up</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
