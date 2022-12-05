import Head from 'next/head'

import BannerNav from '../components/banner_nav'
import AboutCards from '../components/aboutPage/aboutCards'
import Footer from '../components/footer'

export default function AboutInvestEazy() {
  return (
    <>
      <Head>
        <title>InvestEazy - About</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <BannerNav page='about' />
      <AboutCards />
      <Footer />
    </>
  )
}
