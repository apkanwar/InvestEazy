import styles from '../styles/portfolioContent.module.css'
import Accordion from './miniComponents/accordion'

export default function PortfolioContent({ portfolioData }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Portfolio Summary</h2>
      <div className={styles.portfolioContainer}>
        <div className={styles.header}>
          <div className={styles.pInvestment}>
            Total Investment
          </div>
          <div className={styles.pIRR}>
            Estimated IRR
          </div>
        </div>
        {portfolioData.slice(0, 10).reverse().map(item => {
          return (
            <Accordion item={ item } />
          )
        })}
      </div>
    </div>
  )
}