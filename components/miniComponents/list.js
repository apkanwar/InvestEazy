import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/miniComponents/list.module.css'


export default function List({ item }) {
  const [timeTilClose, setTimeLeft] = useState(0);

  useEffect(() => {
    let d = new Date();
    let n = new Date(item.closingDate);
    setTimeLeft(Math.round((n - d) / 1000 / 60 / 60 / 24));
  }, []);

  return (
    <div className={styles.listing}>
      <div className={styles.pImage}>
        <Image src={`/properties/${item.image}`} height={75} width={75} />
      </div>
      <div className={styles.pDetails}>
        <div className={styles.pName}>
          <Link href={`/properties/${encodeURIComponent(item.id)}`}>
            {item.name}
          </Link>
        </div>
        <div className={styles.pAddress}>
          {item.address}
        </div>
      </div>
      <div className={styles.pValues}>
        <div>
          {timeTilClose}
        </div>
        <div>
          {item.type}
        </div>
        <div>
          {item.projectTimeline}
        </div>
        <div>
          ${item.minInvestment}
        </div>
        <div className={styles.lastHeader}>
          {item.investmentGained / item.investmentNeeded}%
        </div>
      </div>
    </div>
  );
}