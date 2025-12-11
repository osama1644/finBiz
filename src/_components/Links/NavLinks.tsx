import styles from "./Links.module.css"
function NavLinks() {
  return (
    <div className={styles.links}>
       <div className={styles.link}>
         <ul>
          <li>Product</li>
          <li>Integration</li>
          <li>Demo</li>
          <li>Pricing</li>
          <li>Login</li>
        </ul>
       </div>
    </div>
  )
}

export default NavLinks