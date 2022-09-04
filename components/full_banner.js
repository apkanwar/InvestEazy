import styles from '../styles/full_banner.module.css'

export default function FullBanner() {
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