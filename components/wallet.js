import styles from '../styles/walletBar.module.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image'
import BankLogo from '../public/vercel.png'
import Link from 'next/link'

export default function WalletBar({ activityData }) {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContent}>
        <div className={styles.walletBox}>
          <div className={styles.walletBalance}>
            <div className={styles.title}>
              Wallet Balance
            </div>
            <div className={styles.balance}>
              $100.00 CAD
            </div>
          </div>
          <div className={styles.modifyWallet}>
            <div className={styles.name}>
              Add Funds
            </div>
            <div className={styles.icon}>
              <AddCircleOutlineIcon />
            </div>
          </div>
          <div className={styles.modifyWallet}>
            <div className={styles.name}>
              Withdraw Funds
            </div>
            <div className={styles.icon}>
              <RemoveCircleOutlineIcon />
            </div>
          </div>

          <div className={styles.section_modifyWallet}>
            Linked Accounts
          </div>
          <div className={styles.modifyWallet}>
            <div className={styles.logo}>
              <Image src={BankLogo} width={24} height={24} />
            </div>
            <div className={styles.name}>
              TD Canada Trust
            </div>
          </div>
          <Link href="/wallet">
            <a className={styles.button_modifyWallet}>
              Change
              <ArrowForwardIcon />
            </a>
          </Link>
        </div>


        <div className={styles.activityBox}>
          <h2 className={styles.activityTitle}>Account Activity</h2>

          <div className={styles.activities}>
            {activityData.slice(0, 10).reverse().map(activity => {
              return (
                <div className={styles.activity}>
                  <div className={styles.aName}>
                    <div className={styles.aType}>
                      {activity.type}
                    </div>
                    <div className={styles.aDetails}>
                      <div className={styles.aID}>
                        <span>ID:</span> {activity.id}
                      </div>
                      <div className={styles.aDate}>
                        <span>Date:</span> {activity.date}
                      </div>
                    </div>
                  </div>
                  <div className={styles.aAmount}>
                    ${activity.amount} CAD
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}