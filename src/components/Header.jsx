import React from 'react'
import styles from "../shopApp.module.css";
import logo from "../images/droppe-logo.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";

const Header = () => {

    const images = [{src:img1,alt:"img1"},{src:img2,alt:"img2"}];

  return (
    <>
     <div className={styles.header}>
            <div className={`container ${styles["logo-img-wrapper"]}`}>
            <img src={logo} className={styles['logo-img']} alt="Logo"/>
            </div>
    </div>
    <div className={`container ${styles.main} ${styles["header-img-wrapper"]}`}>
    {images.map((img,i)=> <img src={img.src} className={styles['header-img']} alt={img.alt} key={`header-img-${i}`}/>)}
           
    </div>
    </>
   
  )
}

export default Header