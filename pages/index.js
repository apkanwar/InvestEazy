import Head from 'next/head'
import styles from '../styles/pages.module.css'

import Navbar from '../components/navbar'
import HomeBanner from '../components/full_banner'
import Description from '../components/image_left'
import RowLayout from '../components/row_layout'
import BoxRows from '../components/property_grid'
import HowItWorks from '../components/full_card'
import Footer from '../components/footer'

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
      <Description />
      <RowLayout />
      <BoxRows />
      <HowItWorks />
      <Footer />
    </>
  )
}
