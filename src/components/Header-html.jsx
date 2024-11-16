
import styles from './Header.module.css';

const Header = () => {
  return <>
      <header className={styles.header}>
      <div className={styles.logo}>
        Need<span>Station</span>
      </div>
      <nav className={styles.navLinks}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.login}>Log in</button>
        <button className={styles.signup}>Sign in</button>
        <button className={styles.becomeTasker}>Become a tasker</button>
      </div>
    </header>
  </>
}

export default Header;