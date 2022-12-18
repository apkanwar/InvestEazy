import Head from 'next/head'

import Navbar from '../components/navbar'
import WalletBar from '../components/wallet'
import { activityData } from '../activityData'

export default function Wallet({ activityData }) {
  return (
    <>
      <Head>
        <title>InvestEazy - Wallet</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar login={true} />
      <WalletBar activityData={ activityData } />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      activityData: activityData
    }
  }
}