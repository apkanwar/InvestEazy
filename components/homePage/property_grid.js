import styles from '../../styles/property_grid.module.css'
import Image from 'next/image'
import HotelImage from '../../public/hotel.webp'
import Link from 'next/link'

export default function PropertyGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h1 className={styles.title}>Closed Deals</h1>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
          </div>
          <div className={styles.propertyDetails}>
            <h3>OnPremiere Suites</h3>
            <h4>Markham, ON</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Markham area.
            </p>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
          </div>
          <div className={styles.propertyDetails}>
            <h3>LIVE Apartments</h3>
            <h4>Ottawa, ON</h4>
            <p>
              Start to own a newly renovated and fully occupied 25-unit multifamily apartment building in the downtown Ottawa area near to bus routes.
            </p>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
          </div>
          <div className={styles.propertyDetails}>
            <h3>BH Apartments</h3>
            <h4>Halimton, ON</h4>
            <p>
              Start owning the newly renovated and fully occupied 15-unit multifamily apartment building in a prime Halimton location near McMasters university.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.tagContainer}>
        <Link href="/properties">
          <div className={styles.tag}>
            View All Properties
            <span className={styles.arrow}></span>
          </div>
        </Link>
      </div>
    </div>
  )
}