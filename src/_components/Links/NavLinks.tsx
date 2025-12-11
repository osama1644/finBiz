import styles from "./Links.module.css"
function NavLinks() {
  return (
    <div className={styles.links}>
        <ul>
          <li>Product</li>
          <li>Integration</li>
          <li>Demo</li>
          <li>Pricing</li>
          <li>Login</li>
        </ul>
    </div>
  )
}

export default NavLinks