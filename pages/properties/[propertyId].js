import Head from "next/head";

import Navbar from "../../components/navbar";
import Description from "../../components/propertyDetails/description";
import Footer from "../../components/footer";

export default function PropertyDetails({ property }) {
  return (
    <>
      <Head>
        <title>InvestEazy - Property Details</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar />
      <Description propertyData={property} />
      {/* <Footer /> */}
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { propertyId: '1' }
      },
      {
        params: { propertyId: '2' }
      },
      {
        params: { propertyId: '3' }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/properties/${params.propertyId}`)
  const data = await response.json();

  return {
    props: {
      property: data
    }
  }
}