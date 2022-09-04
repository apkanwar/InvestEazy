import Head from 'next/head'

import Navbar from '../components/navbar'
import HomeBanner from '../components/full_banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>InvestEazy - Properties</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar />
      <HomeBanner />
    </>
  )
}
