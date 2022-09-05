import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/under_construction.module.css'

import Navbar from '../components/navbar'
import FacebookIcon from '../public/facebook.svg'
import InstagramIcon from '../public/instagram.svg'
import LinkedInIcon from '../public/linkedin.svg'

export default function UnderConstruction() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page Under Constuction - Coming Soon</title>
        <meta name="description" content="This page is still under construction" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Work in Progess</h1>
        <h3 className={styles.description}>This page is curently under construction. Come back soon to check it out.</h3>

        <div className={styles.icons}>
          <div className={styles.icon}>
            <Image src={FacebookIcon} width={48} height={48} />
          </div>
          <div className={styles.icon}>
            <Image src={InstagramIcon} width={48} height={48} />
          </div>
          <div className={styles.icon}>
            <Image src={LinkedInIcon} width={48} height={48} />
          </div>
        </div>
      </main>
    </div>
  )
}
