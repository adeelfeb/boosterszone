import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/designndev/Navbar'
import Footer from '../components/designndev/Footer'

const stats = [
  { value: '150+', label: 'Member-only events annually' },
  { value: '10,000+', label: 'Total attendees across all experiences' },
  { value: 'Worldwide', label: 'Rooted in the U.S. and Canada, our members gather from around the world through high-impact chapters in New York, Miami, Los Angeles, Toronto, and beyond.' },
]

const eventTypes = [
  {
    title: 'Founders Forum',
    description: 'Immersive weekend retreats in inspiring locations such as beach houses and mountain cabins, combining strategy sessions, shared meals, memorable adventures, and transformational Men\'s and Women\'s retreats like the Muskoka experience and the NYC Female Founder weekend.',
  },
  {
    title: 'Masterminds',
    description: 'Private, invite-only dinners hosted in exclusive venues for 20 to 50 founders. These gatherings foster meaningful conversation and connections that extend far beyond the table.',
  },
  {
    title: 'Ongoing Local Meetups',
    description: 'Private, invite-only dinners hosted in exclusive venues for 20 to 50 founders. These gatherings foster meaningful conversation and connections that extend far beyond the table.',
  },
  {
    title: 'Founder Getaways',
    description: 'Immersive weekend retreats in inspiring locations such as beach houses and mountain cabins, combining strategy sessions, shared meals, memorable adventures, and transformational Men\'s and Women\'s retreats like the Muskoka experience and the NYC Female Founder weekend.',
  },
  {
    title: "Men's Growth Workshops",
    description: "Structured environments for men committed to brotherhood, clarity, accountability, and long-term growth.",
  },
  {
    title: "Women's Growth Workshops",
    description: "Small-group sessions where ambitious women connect, support one another, and grow in all areas of life.",
  },
]

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Events | Founders Club</title>
        <meta name="description" content="The Founders Club curates a calendar of cornerstone experiences: flagship gatherings, intimate workshops, masterminds, and retreats." />
        <meta name="keywords" content="Founders Club, events, retreats, masterminds, founders forum" />
      </Head>
      <div className="min-h-screen bg-forest-800">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gold-400 mb-6 text-center">
              Events
            </h1>
            <p className="text-gold-100/90 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Each year, The Founders Club curates a calendar of cornerstone experiences designed to build leaders, deepen relationships, and renew perspective. From flagship gatherings to intimate workshops, these events create the rhythm of the year for our members.
            </p>

            <p className="text-gold-100/80 text-center max-w-2xl mx-auto mb-12">
              With hundreds of experiences hosted year-round, members have unlimited opportunities to connect, collaborate, and build lifelong friendships.
            </p>
            <div className="text-center mb-16">
              <Link
                href="/become-a-member"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-forest-800 bg-gold-400 border border-gold-400 rounded hover:bg-gold-300 transition-colors no-underline"
              >
                Apply for Membership
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="font-serif text-4xl font-semibold text-gold-400 mb-2">150+</div>
                <div className="text-gold-100/80 text-sm">Member-only events annually</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-semibold text-gold-400 mb-2">10,000+</div>
                <div className="text-gold-100/80 text-sm">Total attendees across all experiences</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-xl font-semibold text-gold-400 mb-2">Worldwide</div>
                <div className="text-gold-100/80 text-sm">Rooted in the U.S. and Canada, our members gather from around the world through high-impact chapters in New York, Miami, Los Angeles, Toronto, and beyond.</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {eventTypes.map((event) => (
                <div key={event.title} className="bg-forest-700/50 border border-forest-600 rounded-xl p-6">
                  <h3 className="font-serif text-xl font-semibold text-gold-300 mb-3">{event.title}</h3>
                  <p className="text-gold-100/80 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>

            <p className="text-gold-100/90 text-center text-lg mb-8">
              What began as a small dinner series has grown into a nationwide ecosystem hosting more than 150 curated gatherings each year.
            </p>
            <p className="text-gold-100/80 text-center mb-12">
              Our members come together in person across the country, day in and day out, actively working and supporting each other.
            </p>

            <section className="text-center pt-8 border-t border-forest-600/50">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gold-400 mb-4">
                Apply to Join The Club
              </h2>
              <p className="text-gold-100/90 mb-6 max-w-xl mx-auto">
                The Founders Club is not for everyone. But for the right founder, it can change everything.
              </p>
              <Link
                href="/become-a-member"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-forest-800 bg-gold-400 border border-gold-400 rounded hover:bg-gold-300 transition-colors no-underline"
              >
                Become a Member
              </Link>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
