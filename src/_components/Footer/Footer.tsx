import  styles from"./Footer.module.css"
import logo from "../../images/logo.png"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className={styles.footer} style={{direction:"ltr"}}>
      <div className={styles.footerContent}>
        {/* firs box */}
        <div className={styles.footerLogo}>
          <div className={styles.logo}>
            <img src={logo} alt="logo image" />
            <h2>FinBiz</h2>
          </div>
          <div className={styles.foot}>
            <p>Data analysis software is a type of software tool used for data analysis and reporting.</p>
          </div>
          <div className={styles.social}>
           <div> <FaTwitter /></div>
            <div><FaFacebookF /></div>
            <div><FaInstagram /></div>
            <div><FaGithub /></div>
          </div>
        </div>
        {/* second box */}
        <div>
          <h2>Company</h2>
          <div className={styles.footerInfo}>
        <p>Service</p>
        <p>Resources</p>
        <p>About us</p>
          </div>
        </div>
        {/* third box */}
        <div>
          <h2>Help</h2>
          <div className={styles.footerInfo}>
        <p>Customer Support</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
          </div>
        </div>
        {/* forth box */}
        <div className={styles.submit}>
          <h2>Subscribe to Newsletter</h2>
          <div>
            <input type="email" placeholder="Enter email address"  />
            <button>Join</button>
          </div>
        </div>
      </div>
      <p className={styles.copyrihgt}>© Copyright 2024, All Rights Reserved by FinBiz</p>
    </div>
  )
}

export default Footer