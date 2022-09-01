import styles from '../styles/BoxRows.module.css'
import Image from 'next/image'
import HotelImage from '../public/hotel.webp'

export default function BoxRows() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h1 className={styles.title}>Closed Deals</h1>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.info}>
          <Image src={HotelImage} />
          <div className={styles.propertyDetails}>
            <h3>Brampton Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
            </p>
          </div>
        </div>
        <div className={styles.info}>
          <Image src={HotelImage} />
          <div className={styles.propertyDetails}>
            <h3>Brampton Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
            </p>
          </div>
        </div>
        <div className={styles.info}>
          <Image src={HotelImage} />
          <div className={styles.propertyDetails}>
            <h3>Brampton Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
            </p>
          </div>
        </div>
      </div>

      <div>View All Properties</div>
    </div>
  )
}