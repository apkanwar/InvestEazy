import Head from 'next/head'
import styles from '../styles/pages.module.css'

import Navbar from '../components/navbar'
import HomeBanner from '../components/banner_style1'

export default function Home() {
  return (
    <>
      <Head>
        <title>InvestEazy</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar />
      <HomeBanner />
    </>
  )
}
