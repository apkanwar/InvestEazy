import styles from '../styles/banner_style1.module.css'
import Image from 'next/image'
import CompanyLogo from '../public/vercel.ico'

export default function BannerStyle1() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.info}>
          <h2 className={styles.head}>Let’s Own Real Estate Together</h2>
          <h3 className={styles.main}>Join thousands of Canadians already earning passive income with addy, get started with $1</h3>

          <div className={styles.button}>
            <div className={styles.button_text}>Join Today</div>
          </div>
        </div>
        <div className={styles.imageBox}>
          {/* <Image src={CompanyLogo} width={48} height={48}/> */}
        </div>
      </div>
    </div>
  )
}