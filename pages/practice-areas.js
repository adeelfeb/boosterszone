import Head from 'next/head'
import Navbar from '../components/designndev/Navbar'
import PracticeAreasSection from '../components/designndev/PracticeAreasSection'
import Footer from '../components/designndev/Footer'

export default function PracticeAreasPage() {
  return (
    <>
      <Head>
        <title>Practice Areas | Founders Club</title>
        <meta name="description" content="Explore our practice areas and how we support founders and entrepreneurs." />
        <meta name="keywords" content="Founders Club, practice areas, legal, entrepreneurship" />
      </Head>
      <main className="min-h-screen bg-forest-900 bg-gradient-forest">
        <Navbar />
        <div className="w-full max-w-[420px] sm:max-w-none mx-auto sm:mx-0 pt-24">
          <PracticeAreasSection />
        </div>
        <Footer />
      </main>
    </>
  )
}
