import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import CompanyLogo from '../public/vercel.ico'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <div className={styles.navLogo}>
            <Image src={CompanyLogo} width={48} height={48}/>
            <span>InvestEazy</span>
          </div>
        </li>
        <li className={styles.navItem}>
          <a className={styles.pageLink}>
            About
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.pageLink}>
            Properties
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.pageLink}>
            Blog
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.pageLink}>
            Reviews
          </a>
        </li>
        <li className={styles.navItem}>
          <button className={styles.navButton}>
            Log In
          </button>
        </li>
      </ul>
    </nav>
  )
}