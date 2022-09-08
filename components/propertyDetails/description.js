import styles from '../../styles/description.module.css'
import ProgressBar from '../miniComponents/progressBar'

import Image from 'next/image'
import HotelImage from '../../public/hotel.webp'

export default function PropertyDetails({ propertyData = [] }) {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.content_a}>
          <div className={styles.imageBox}>
            <Image src={HotelImage} width={750} height={650} />
          </div>
          <div className={styles.info}>
            <h2 className={styles.head}>{propertyData.name}</h2>
            <h3 className={styles.address}>{propertyData.address}</h3>
            <div className={styles.investmentProgress}>
              <ProgressBar bgcolor='#112854' completed={propertyData.investmentGained / propertyData.investmentNeeded * 100} />
              <h4 className={styles.caption}>Funded Of ${propertyData.investmentNeeded} Goal</h4>
            </div>
            <div className={styles.investmentStructure}>
              <div className={styles.name}>
                Offer. Structure
              </div>
              <div className={styles.value}>
                Equity Income Generating
              </div>
              <div className={styles.name}>
                Days Left
              </div>
              <div className={styles.value}>
                17 Days
              </div>
              <div className={styles.name}>
                Min. investment
              </div>
              <div className={styles.value}>
                $1,000.00
              </div>
              <div className={styles.name}>
                Max. investment
              </div>
              <div className={styles.value}>
                $100,000.00
              </div>
              <div className={styles.name}>
                Minimum Raise
              </div>
              <div className={styles.value}>
                $100,000.00
              </div>
              <div className={styles.name}>
                Maximun Raise
              </div>
              <div className={styles.value}>
                $300,000.00
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content_b}>
          <div className={styles.button}>
            <div className={styles.button_text}>
              Invest Now
              <span className={styles.arrow}></span>
            </div>
          </div>

          <div className={styles.aboutProperty}>
            <div className={styles.sub}>
              About the Property
            </div>
            <div className={styles.description}>
              {propertyData.detailedDescription}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}