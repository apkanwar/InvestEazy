import React, { useState } from "react"
import styles from '../../styles/settings/personalInfo.module.css'
import Image from 'next/image'
import HotelImage from '../../public/hotel.webp'
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const mTheme = createTheme({
  palette: {
    green: {
      main: '#4CAF50'
    },
    dark: {
      main: '#000000'
    }
  }
});

export default function PersonalInfo() {
  const [accountData, setAccountData] = useState({
    isVerified: true,
  })

  return (
    <div className={styles.container}>
      <div className={styles.personalContainer}>
        {/* Name, SignUp Date, Verfied Status */}
        <div className={styles.profileInfo}>
          <div className={styles.profileImage}>
            <Image src={HotelImage} width={150} height={150} />
          </div>
          <div className={styles.basicInfo}>
            <div className={styles.name}>
              Raja Singh
              <ThemeProvider theme={mTheme}>
              <div className={styles.verfied}>
                {accountData.isVerified ? (
                  <>
                    <VerifiedIcon color="green" />
                    &nbsp;&nbsp;Verified
                  </>
                ) : !accountData.isVerified ? (
                  <>
                    <CancelIcon color="dark" />
                    &nbsp;&nbsp;Verified
                  </>
                ) : null}
              </div>
              </ThemeProvider>
            </div>
            <div className={styles.signUpDate}>
              Member Since: December 7, 2022
            </div>
          </div>
        </div>
        {/* Email, Phone Number */}
        <div className={styles.contactInfo}>
          <div className={styles.email}>
            <div className={styles.label}>
              Email
            </div>
            rajasingh@gmail.com
          </div>
          <div className={styles.phone}>
            <div className={styles.label}>
              Phone Number
            </div>
            (123) 123-1234
          </div>
        </div>
      </div>
    </div>
  )
}