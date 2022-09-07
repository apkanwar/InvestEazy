import styles from '../../styles/full_card.module.css'
import Image from 'next/image'
import Step1Image from '../../public/Stag.svg'
import Step2Image from '../../public/Bear.svg'
import Step3Image from '../../public/Rabbit.svg'
import { useState } from "react"

export default function FullCard() {
  const [stepCount, setStepCount] = useState(1)

  const changeStepCount = async (value) => {
    setStepCount(value)
  }

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.head}>How is InvestEazy THIS easy?</h2>
          <h3 className={styles.main}>
            We believe our proprietary solution helps to reduce risk in the investment process.
            We execute the entire transaction upfront using our own capital and then give you access on a deal-by-deal basis.
          </h3>
        </div>
        <div className={styles.howItWorks}>
          {stepCount === 1 ? (
            <div className={styles.stepCards}>
              <div className={styles.stepHeading}>
                Step 1
              </div>
              <div className={styles.stepImage}>
                <Image src={Step1Image} />
              </div>
              <div className={styles.stepInfo}>
                Our real estate acquisitions team identifies a real estate investment oppourtunity. All oppourtunities go through our very rigourus due dilgence process.
              </div>
              <div className={styles.box}>
                <div className={styles.nextButton} onClick={e => changeStepCount(2)}>
                  <div className={styles.button_text_one}>Next</div>
                </div>
              </div>
            </div>
          ) : stepCount === 2 ? (
            <div className={styles.stepCards}>
              <div className={styles.stepHeading}>
                Step 2
              </div>
              <div className={styles.stepImage}>
                <Image src={Step2Image} />
              </div>
              <div className={styles.stepInfo}>
                Our real estate acquisitions team identifies a real estate investment oppourtunity. All oppourtunities go through our very rigourus due dilgence process.
              </div>
              <div className={styles.box}>
              <div className={styles.prevButton} onClick={e => changeStepCount(1)}>
                  <div className={styles.button_text_two}>Prev</div>
                </div>
                <div className={styles.nextButton} onClick={e => changeStepCount(3)}>
                  <div className={styles.button_text_two}>Next</div>
                </div>
              </div>
            </div>
          ) : stepCount === 3 ? (
            <div className={styles.stepCards}>
              <div className={styles.stepHeading}>
                Step 1
              </div>
              <div className={styles.stepImage}>
                <Image src={Step3Image} />
              </div>
              <div className={styles.stepInfo}>
                Our real estate acquisitions team identifies a real estate investment oppourtunity. All oppourtunities go through our very rigourus due dilgence process.
              </div>
              <div className={styles.box}>
                <div className={styles.prevButton} onClick={e => changeStepCount(2)}>
                  <div className={styles.button_text_three}>Prev</div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}