import styles from '../../styles/numbers.module.css'

export default function PropertyNumbers({ propertyData = [] }) {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.info}>
          <h2 className={styles.value}>{propertyData.annualYeild}%</h2>
          <h3 className={styles.caption}>Annualized Yield</h3>
        </div>
        <div className={styles.info}>
          <h2 className={styles.value}>{propertyData.targetIRR}%</h2>
          <h3 className={styles.caption}>Target IRR</h3>
        </div>
        <div className={styles.info}>
          <h2 className={styles.value}>{propertyData.antTerm} yrs</h2>
          <h3 className={styles.caption}>Anticipated Term</h3>
        </div>
        <div className={styles.info}>
          <h2 className={styles.value}>{propertyData.avgLTV}%</h2>
          <h3 className={styles.caption}>Avg. LTV</h3>
        </div>
      </div>
    </div>
  )
}