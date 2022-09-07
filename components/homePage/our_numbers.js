import styles from '../../styles/row_layout.module.css'

export default function RowLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h1 className={styles.title}>InvestEazy by the numbers</h1>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.info}>
          <h2 className={styles.value}>$100,000,000</h2>
          <h3 className={styles.detail}>Total Asset Value</h3>
        </div>
        <div className={styles.info}>
          <h2 className={styles.value}>50</h2>
          <h3 className={styles.detail}>Total Properties</h3>
        </div>
        <div className={styles.info}>
          <h2 className={styles.value}>$150,000,000</h2>
          <h3 className={styles.detail}>Total Distributions</h3>
        </div>
        <div className={styles.info}>
          <h2 className={styles.value}>200+</h2>
          <h3 className={styles.detail}>Total Investors</h3>
        </div>
      </div>
    </div>
  )
}