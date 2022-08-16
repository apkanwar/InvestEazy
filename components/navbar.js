import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import CompanyLogo from '../public/vercel.ico'

export default function Navbar() {
  return (
    <navbar>
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
            Contact
          </a>
        </li>
        <li className={styles.navItem}>
          <button className={styles.navButton}>
            Login
          </button>
        </li>
      </ul>
    </navbar>
  )
}