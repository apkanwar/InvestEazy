import Image from 'next/image'
import Checkmark from '../../public/check.svg'
import styles from '../../styles/details.module.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function PropertyDetails({ propertyData = [] }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.title}>
          Estimated Returns
        </div>
        <div className={styles.imageBox}>
          <Image src={`/../public/eReturns-1.png`} layout={'fill'} />
        </div>
        <div className={styles.disclaimer}>
          The information presented above represents expected results of a $1,194,650 maximum offering and may not reflect actual results.
          The expected return (IRR and ROI) based on your investment amount can fluctuate up or down based on many factors.
          Please review the entirety of the Offering Memorandum and understand the risks stated in “Item 8 – Risks Factors”.
          You are not liable beyond your investment amount.
        </div>
      </div>

      <div className={styles.containerContent}>
        <div className={styles.title}>
          Property Highlights
        </div>
        <div className={styles.checklist}>
          {propertyData.highlights.map(highlight => {
            return (
              <>
                <Image src={Checkmark} width={16} height={16} />
                <div className={styles.checklistItem}>
                  {highlight}
                </div>
              </>
            )
          })}

        </div>
      </div>

      <div className={styles.containerContent}>
        <div className={styles.title}>
          Location
        </div>
        <div className={styles.gradesRow}>
          <div className={styles.grades}>
            <h2 className={styles.value}>Transit</h2>
            <div className={styles.progressBox}>
              <CircularProgressbar value={propertyData.locationScore.transit} text={propertyData.locationScore.transit + '%'} counterClockwise={true} styles={{ path: { stroke: '#1abc9c' } }} />
            </div>
          </div>
          <div className={styles.grades}>
            <h2 className={styles.value}>Walking</h2>
            <div className={styles.progressBox}>
              <CircularProgressbar value={propertyData.locationScore.walking} text={propertyData.locationScore.walking + '%'} counterClockwise={true} styles={{ path: { stroke: '#1abc9c' } }} />
            </div>
          </div>
          <div className={styles.grades}>
            <h2 className={styles.value}>Biking</h2>
            <div className={styles.progressBox}>
              <CircularProgressbar value={propertyData.locationScore.biking} text={propertyData.locationScore.biking + '%'} counterClockwise={true} styles={{ path: { stroke: '#1abc9c' } }} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerContent}>
        <div className={styles.title}>
          Investment Type
        </div>
        <div className={styles.investmentInfo}>
          <div className={styles.investmentType}>
            <p>{propertyData.investmentType.type}</p>
          </div>
          <i className={styles.arrow} />
          <div className={styles.info}>
            <div className={styles.investorType}>
              <div className={styles.question}>
                What does {propertyData.investmentType.type} mean?
              </div>
              <div className={styles.answer}>
                {propertyData.investmentType.define}
              </div>
            </div>
            <div className={styles.definition}>
              <div className={styles.question}>
                Investor Type:
              </div>
              <div className={styles.answer}>
              {propertyData.investmentType.target}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}