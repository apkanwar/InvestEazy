import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/portfolioContent.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Accordion({ item }) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={styles.accordian}>
      <div className={styles.activity} onClick={toggle}>
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

      <div style={{ display: isShowing ? "flex" : "none", padding: "5px" }} className={styles.accordianBlock} >
        <div className={styles.label}>
          Estmated ROI
        </div>
        <div className={styles.pROI}>
          {item.estimatedROI}%
        </div>

        <div className={styles.sectionTitle}>
          <h1 className={styles.subTitle}>Future Projection</h1>
        </div>
        <div className={styles.future}>
          <div className={styles.info}>
            <h2 className={styles.value}>${item.futureProjections.optimistic}</h2>
            <h3 className={styles.detail}>Optimistic</h3>
          </div>
          <div className={styles.info}>
            <h2 className={styles.value}>${item.futureProjections.realistic}</h2>
            <h3 className={styles.detail}>Realistic</h3>
          </div>
          <div className={styles.info}>
            <h2 className={styles.value}>${item.futureProjections.pessimistic}</h2>
            <h3 className={styles.detail}>Pessimistic</h3>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.link}>
            <span>
              Offering Memorandum
            </span>
            <div className={styles.linkArrow}>
              <ArrowForwardIcon />
            </div>
          </div>
          <div className={styles.link}>
            <span>
              Subscription Aggreement
            </span>
            <div className={styles.linkArrow}>
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
