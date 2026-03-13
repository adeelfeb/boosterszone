import Head from 'next/head'
import Navbar from '../components/designndev/Navbar'
import Footer from '../components/designndev/Footer'
import LetsChatForm from '../components/designndev/LetsChatForm'
import { foundersClubImages } from '../lib/foundersClubImages'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Founders Club</title>
        <meta name="description" content="Get in touch with The Founders Club. Building something meaningful? Connect with 1000+ serious founders and operators who understand your journey." />
        <meta name="keywords" content="Founders Club, contact, get in touch" />
      </Head>
      <div className="min-h-screen bg-forest-900 bg-gradient-forest relative">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-center opacity-[0.08] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url(${foundersClubImages.texture})`, backgroundSize: 'auto' }}
          aria-hidden
        />
        <Navbar />
        {/* Hero with full-bleed background (same as About Us) */}
        <section className="relative min-h-[45vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${foundersClubImages.aboutCta})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-forest-950/60" aria-hidden />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-gold-500 mb-6">
              Let&apos;s Chat
            </h1>
            <p className="text-gold-100/95 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Building something meaningful? Add your details below and we&apos;ll get back to you with next steps and a time to talk.
            </p>
          </div>
        </section>
        <main className="relative z-10 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
              <div className="flex flex-col">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gold-500 mb-4 text-left">
                  Schedule a conversation
                </h2>
                <p className="text-gold-100/90 text-lg mb-4 leading-relaxed">
                  Add a few details about what you&apos;re working on and what you need help with. Fill out the form on the right to schedule a time to talk with our team.
                </p>
                <p className="text-gold-100/75 text-base leading-relaxed">
                  Whether you have a quick question or are ready to move forward, we&apos;ll review your message and get back to you with next steps and available times.
                </p>
              </div>
              <div className="bg-forest-700/70 border border-forest-600 rounded-2xl p-6 md:p-8 fc-card flex flex-col min-h-0">
                <LetsChatForm />
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
