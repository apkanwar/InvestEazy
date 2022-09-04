import styles from '../styles/all_properties.module.css'
import Image from 'next/image'
import HotelImage from '../public/hotel.webp'

export default function AllProperties() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h1 className={styles.title}>Availible Properties</h1>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
            <div className={styles.progress}>
              <div className={styles.propertyType}>
                <div className={styles.type}>
                  Lending
                </div>
              </div>
              <div className={styles.progressValue}>
                <div className={styles.value}>
                  25%
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyDetails}>
            <h3>London Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
            </p>
            <div className={styles.propertyButton}>
              Learn More
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
            <div className={styles.progress}>
              <div className={styles.propertyType}>
                <div className={styles.type}>
                  Acquisitions
                </div>
              </div>
              <div className={styles.progressValue}>
                <div className={styles.value}>
                  20%
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyDetails}>
            <h3>Brampton Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
            </p>
            <div className={styles.propertyButton}>
              Learn More
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
            <div className={styles.progress}>
              <div className={styles.propertyType}>
                <div className={styles.type}>
                  Acquisitions
                </div>
              </div>
              <div className={styles.progressValue}>
                <div className={styles.value}>
                  10%
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyDetails}>
            <h3>Toronto Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
            </p>
            <div className={styles.propertyButton}>
              Learn More
            </div>
          </div>
        </div>
      </div>




      <div className={styles.sectionTitle}>
        <h1 className={styles.title}>Recently Closed Properties</h1>
      </div>

      <div className={[styles.flexContainer, styles.bottomBorder].join(" ")}>
        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
            <div className={styles.progress}>
              <div className={styles.propertyType}>
                <div className={styles.type}>
                  Lending
                </div>
              </div>
              <div className={styles.progressValue}>
                <div className={styles.value}>
                  100%
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyDetails}>
            <h3>London Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
            </p>
            <div className={styles.propertyClosed}>
              Closed July 2022
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
            <div className={styles.progress}>
              <div className={styles.propertyType}>
                <div className={styles.type}>
                  Acquisitions
                </div>
                <div className={styles.position}>
                  Realized
                </div>
              </div>
              <div className={styles.progressValue}>
                <div className={styles.value}>
                  100%
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyDetails}>
            <h3>Brampton Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
            </p>
            <div className={styles.propertyClosed}>
              Closed January 2022
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
            <div className={styles.progress}>
              <div className={styles.propertyType}>
                <div className={styles.type}>
                  Development
                </div>
                <div className={styles.position}>
                  Realized
                </div>
              </div>
              <div className={styles.progressValue}>
                <div className={styles.value}>
                  100%
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyDetails}>
            <h3>Toronto Apartments</h3>
            <h4>123 Property Lane</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Vancouver-Broadway Corridor.
            </p>
            <div className={styles.propertyClosed}>
              Closed April 2021
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}