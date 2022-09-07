import styles from '../../styles/property_details.module.css'
import Image from 'next/image'
import HotelImage from '../../public/hotel.webp'

export default function PropertyDetails({ propertyData = [] }) {
  return (
    <>
      <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.imageBox}>
          <Image src={HotelImage} width={750} height={650} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.head}>{propertyData.name}</h2>
          <h3 className={styles.address}>{propertyData.address}</h3>
          <h3 className={styles.main}>{propertyData.detailedDescription}</h3>

          <div className={styles.button}>
            <div className={styles.button_text}>
              Start Investing
              <span className={styles.arrow}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}