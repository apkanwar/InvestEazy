import styles from '../../styles/numbers.module.css'

export default function PropertyNumbers({ propertyData = [] }) {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.info}>
          <h2 className={styles.value}>{propertyData.realizedMOIC}x</h2>
          <h3 className={styles.caption}>Realized MOIC</h3>
        </div>
        <div className={styles.info}>
          <h2 className={styles.value}>{propertyData.realizedIRR}%</h2>
          <h3 className={styles.caption}>Realized IRR</h3>
        </div>
        <div className={styles.info}>
          <h2 className={styles.value}>{propertyData.projectTimeline} yrs</h2>
          <h3 className={styles.caption}>Project Timeline</h3>
        </div>
        <div className={styles.info}>
          <h2 className={styles.value}>{propertyData.projectROIC}%</h2>
          <h3 className={styles.caption}>Project ROIC</h3>
        </div>
      </div>
    </div>
  )
}