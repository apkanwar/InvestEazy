import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import CompanyLogo from '../public/vercel.ico'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">
            <div className={styles.navLogo}>
              <Image src={CompanyLogo} width={48} height={48} />
              <span>InvestEazy</span>
            </div>
          </Link>
        </li>
        <li className={styles.dropdown}>
          <a className={styles.dropdownLink}>About</a>
          <div className={styles.dropdownContent}>
            <Link href="/about/invest-eazy">
              <a>About InvestEazy</a>
            </Link>
            <a>About the Properties</a>
          </div>
        </li>
        <li className={styles.navItem}>
          <Link href="/properties">
            <a className={styles.pageLink}>
              Properties
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/under_construction">
            <a className={styles.pageLink}>
              Blog
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/under_construction">
            <a className={styles.pageLink}>
              Reviews
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/under_construction">
            <button className={styles.navButton}>
              Log In
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}