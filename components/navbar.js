import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import CompanyLogo from '../public/vercel.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar({ login }) {
  const [miniMenuStatus, setMenuStatus] = useState("closed")

  const showMenu = () => {
    let navbarP = document.getElementById("navbarP");
    if (miniMenuStatus == 'closed') {
      navbarP.style.display = "flex"
      setMenuStatus('open')
    }
    else {
      navbarP.style.display = "none"
      setMenuStatus('closed')
    }
  }

  return (
    <>
      {!login ? (
        <>
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
                <Link href="/about">
                  <a className={styles.dropdownLink}>About</a>
                </Link>
                {/* <div className={styles.dropdownContent}>
              <Link href="/about/invest-eazy">
                <a>About InvestEazy</a>
              </Link>
              <a>About the Properties</a>
            </div> */}
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
                <Link href="/login">
                  <button className={styles.navButton}>
                    Log In
                  </button>
                </Link>
              </li>
            </ul>
          </nav>

          <nav className={styles.navbarMini}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <div className={styles.menuButton} onClick={showMenu}></div>
              </li>
              <li className={styles.navItem}>
                <Link href="/">
                  <div className={styles.navLogo}>
                    <Image src={CompanyLogo} width={48} height={48} />
                    <span>InvestEazy</span>
                  </div>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/login">
                  <button className={styles.navButton}>
                    Log In
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
          <nav id='navbarP' className={styles.navbarPlus}>
            <ul className={styles.navList}>
              <li className={styles.dropdown}>
                <Link href="/about">
                  <a className={styles.pageLink}>
                    About
                  </a>
                </Link>
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
            </ul>
          </nav>
        </>
      ) : login ? (
        <>
          <nav className={styles.navbar}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                  <div className={styles.navLogo}>
                    <Image src={CompanyLogo} width={48} height={48} />
                    <span>InvestEazy</span>
                  </div>
              </li>
              <li className={styles.dropdown}>
                <Link href="/portfolio">
                  <a className={styles.pageLink}>Portfolio</a>
                </Link>
              </li>
              <li className={styles.dropdown}>
                <Link href="/marketplace">
                  <a className={styles.pageLink}>Marketplace</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/wallet">
                  <a className={styles.pageLink}>
                    Wallet
                  </a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/settings">
                  <a className={styles.pageLink}>
                    Settings
                  </a>
                </Link>
              </li>
              <li className={styles.navItem}>
                  <a className={styles.pageLink}>
                    <NotificationsIcon />
                  </a>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </>
  )
}