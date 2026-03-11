import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/designndev/Navbar'
import Footer from '../components/designndev/Footer'

const team = [
  {
    name: 'Sahail',
    role: 'Founder & Lead Counsel',
    bio: 'Focused on making legal services clear and accessible. Experienced in corporate, real estate, and estate planning.',
  },
  {
    name: 'Sarah Chen',
    role: 'Associate Lawyer',
    bio: 'Practises in family law and immigration. Committed to guiding clients through complex processes with clarity and care.',
  },
  {
    name: 'Michael Torres',
    role: 'Associate Lawyer',
    bio: 'Specializes in corporate and commercial matters. Helps businesses and founders with structure, contracts, and compliance.',
  },
  {
    name: 'Emily Park',
    role: 'Legal Assistant',
    bio: 'Supports the team with client intake, document preparation, and scheduling so your matter runs smoothly from start to finish.',
  },
]

export default function OurTeamPage() {
  return (
    <>
      <Head>
        <title>Our Team | Sahail Law</title>
        <meta name="description" content="Meet the team at Sahail Law. Experienced lawyers and support staff dedicated to clear, practical legal solutions in Ontario." />
        <meta name="keywords" content="Sahail Law, team, lawyers, Ontario, legal" />
      </Head>
      <div className="min-h-screen bg-forest-800">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="section-heading font-heading text-4xl md:text-5xl font-medium text-gold-500 mb-4 text-left normal-case">
              Our Team
            </h1>
            <p className="text-gold-100/80 text-lg mb-16 max-w-2xl">
              We are a small team of lawyers and support staff who believe in clear communication, integrity, and practical solutions. Get to know the people behind Sahail Law.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {team.map((member, index) => (
                <div key={index} className="py-0">
                  <h2 className="font-subheading text-xl md:text-2xl font-medium text-gold-200 mb-2">
                    {member.name}
                  </h2>
                  <p className="text-gold-400/90 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gold-100/90 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8">
              <p className="text-gold-100/80 mb-6">
                We work together to deliver consistent, reliable advice across our practice areas. If you would like to discuss your matter with our team, we are happy to arrange a consultation.
              </p>
              <Link href="/contact" className="btn-fc-primary inline-block">
                Contact us
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
