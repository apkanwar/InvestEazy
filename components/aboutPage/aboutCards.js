import styles from '../../styles/aboutCards.module.css'
import Image from 'next/image'
import HotelImage from '../../public/hotel.webp'

export default function AboutCards() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.imageBoxLeft}>
          <Image src={HotelImage} width={750} height={650} />
        </div>
        <div className={styles.infoRight}>
          <h2 className={styles.head}>InvestEazy is an innovative investment business built on delivering </h2>
          <h3 className={styles.main}>
            We’ve created a hospitality ecosystem to help make smart investments secured by sponsor capital. As professionals well versed in acquisitions, development and lending, we source, 
            underwrite, structure and close investments across diverse markets and asset types, from name brands to boutique properties. We then bring our extensive experience in hotel 
            management to each investment, seeking to add value and improve operations to deliver superior risk-adjusted returns in hospitality.
          </h3>
        </div>
      </div>

      <div className={styles.bannerContent}>
        <div className={styles.infoLeft}>
          <h2 className={styles.head}>InvestEazy is an innovative investment business built on delivering </h2>
          <h3 className={styles.main}>
            We’ve created a hospitality ecosystem to help make smart investments secured by sponsor capital. As professionals well versed in acquisitions, development and lending, we source, 
            underwrite, structure and close investments across diverse markets and asset types, from name brands to boutique properties. We then bring our extensive experience in hotel 
            management to each investment, seeking to add value and improve operations to deliver superior risk-adjusted returns in hospitality.
          </h3>
        </div>
        <div className={styles.imageBoxRight}>
          <Image src={HotelImage} width={750} height={650} />
        </div>
      </div>

      <div className={styles.bannerContent}>
        <div className={styles.imageBoxLeft}>
          <Image src={HotelImage} width={750} height={650} />
        </div>
        <div className={styles.infoRight}>
          <h2 className={styles.head}>InvestEazy is an innovative investment business built on delivering </h2>
          <h3 className={styles.main}>
            We’ve created a hospitality ecosystem to help make smart investments secured by sponsor capital. As professionals well versed in acquisitions, development and lending, we source, 
            underwrite, structure and close investments across diverse markets and asset types, from name brands to boutique properties. We then bring our extensive experience in hotel 
            management to each investment, seeking to add value and improve operations to deliver superior risk-adjusted returns in hospitality.
          </h3>
        </div>
      </div>
    </div>
  )
}