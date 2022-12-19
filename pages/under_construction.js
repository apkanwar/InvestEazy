import Head from 'next/head'
import styles from '../styles/under_construction.module.css'

import Navbar from '../components/navbar'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function UnderConstruction() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Under Constuction - Coming Soon</title>
        <meta name="description" content="This page is still under construction" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar login={false} />
      <main className={styles.main}>
        <h1 className={styles.title}>Work in Progess</h1>
        <h3 className={styles.description}>This page is curently under construction. Come back soon to check it out.</h3>

        <div className={styles.icons}>
          <div className={styles.socialMediaButton}>
            <FacebookIcon sx={{fontSize: 64}} />
          </div>
          <div className={styles.socialMediaButton}>
            <InstagramIcon sx={{fontSize: 64}} />
          </div>
          <div className={styles.socialMediaButton}>
            <LinkedInIcon sx={{fontSize: 64}} />
          </div>
        </div>
      </main>
    </div>
  )
}
