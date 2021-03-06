import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Support from '../components/Support'
import AllInOne from '../components/AllInOne'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cloud Management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <Hero/>
        <About />
        <Support />
        <AllInOne />
        <Pricing/>
        <Footer/>
      </div>  
    </div>
  )
}

