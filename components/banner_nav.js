import styles from '../styles/banner_nav.module.css'
import Image from 'next/image'
import CompanyLogo from '../public/vercel.ico'
import Link from 'next/link'

export default function BannerNav({ page }) {
  return (
    <div className={styles.bannerBackground}>
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

      {page === 'properties' ? (
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={styles.info}>
              <h2 className={styles.head}>Find the right investment for you</h2>
              <h3 className={styles.main}>Join more than 1,200 accredited investors and start earning outsized returns using InvestEazy</h3>

              <div className={styles.button}>
                <div className={styles.button_text}>Get Started</div>
              </div>
            </div>
          </div>
        </div>
      ) : page === 'about' ? (
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={styles.infoShort}>
              <h2 className={styles.head}>About the Platform</h2>
              <h3 className={styles.main}>InvestEazy is is an innovative investment platform built on finding the most profiltable invetments for their investors</h3>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}