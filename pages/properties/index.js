import Head from 'next/head'

import BannerNav from '../../components/banner_nav'
import AllProperties from '../../components/propertiesPage/all_properties'
import Footer from '../../components/footer'
import { properties } from '../../data'

export default function Properties( { properties } ) {
  return (
    <>
      <Head>
        <title>InvestEazy - Properties</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <BannerNav page='properties' />
      <AllProperties data={ properties } />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // const response = await fetch('http://localhost:4000/properties')
  // const data = await response.json();

  return {
    props: {
      properties: properties
    }
  }
}