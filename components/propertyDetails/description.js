import styles from '../../styles/description.module.css'
import Image from 'next/image'
import HotelImage from '../../public/hotel.webp'

export default function PropertyDetails({ propertyData = [] }) {
  return (
    < >
      <div className={styles.section}>
        <div className={styles.content_a}>
          <div className={styles.imageBox}>
            <Image src={HotelImage} width={750} height={650} />
          </div>
          <div className={styles.info}>
            <h2 className={styles.head}>{propertyData.name}</h2>
            <h3 className={styles.address}>{propertyData.address}</h3>
            <p className={styles.main}>{propertyData.detailedDescription}</p>

            <div className={styles.button}>
              <div className={styles.button_text}>
                Start Investing
                <span className={styles.arrow}></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.content_b}>
          
        </div>
      </div>
    </>
  )
}