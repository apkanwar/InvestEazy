import styles from '../../styles/image_left.module.css'
import Image from 'next/image'
import HotelImage from '../../public/hotel.webp'

export default function ImageLeft() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.imageBox}>
          <Image src={HotelImage} width={750} height={650} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.head}>InvestEazy is an innovative investment business built on delivering </h2>
          <h3 className={styles.main}>
            We’ve created a hospitality ecosystem to help make smart investments secured by sponsor capital. As professionals well versed in acquisitions, development and lending, we source, 
            underwrite, structure and close investments across diverse markets and asset types, from name brands to boutique properties. We then bring our extensive experience in hotel 
            management to each investment, seeking to add value and improve operations to deliver superior risk-adjusted returns in hospitality.
          </h3>

          <div className={styles.button}>
            <div className={styles.button_text}>
              Learn More About Who We Are
              <span className={styles.arrow}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}