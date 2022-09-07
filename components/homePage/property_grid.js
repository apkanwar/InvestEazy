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
            <h3>Brampton Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
            </p>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
          </div>
          <div className={styles.propertyDetails}>
            <h3>Brampton Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
            </p>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
          </div>
          <div className={styles.propertyDetails}>
            <h3>Brampton Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
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