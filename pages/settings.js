import Head from 'next/head'

import Navbar from '../components/navbar'
import PersonalInfo from '../components/settingsPage/personalInfo'
import SettingsLinks from '../components/settingsPage/settingsLinks'
import Support from '../components/settingsPage/support'
import ModifyAccount from '../components/settingsPage/modifyAccount'
import Footer from '../components/footer'

export default function Settings() {
  return (
    <>
      <Head>
        <title>InvestEazy - Settings</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar login={true} />
      <PersonalInfo />
      <SettingsLinks />
      <Support />
      <ModifyAccount />
      {/* <Footer /> */}
    </>
  )
}
