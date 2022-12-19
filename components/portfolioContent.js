import styles from '../styles/portfolioContent.module.css'
import Image from 'next/image'
import Link from 'next/link'

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
            <div className={styles.activity}>
              <div className={styles.pImage}>
                <Image src={`/properties/${item.image}`} height={100} width={100} />
              </div>
              <div className={styles.pDetails}>
                <div className={styles.pName}>
                  <Link href={`/properties/${encodeURIComponent(item.pID)}`}>
                    {item.name}
                  </Link>
                </div>
                <div className={styles.pAddress}>
                  {item.address}
                </div>
              </div>
              <div className={styles.pInvestment}>
                ${item.invested}
              </div>
              <div className={styles.pIRR}>
                {item.irr}%
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}