import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import { siteName, siteTagline } from '../../lib/siteConfig'

const team = [
  {
    name: 'Team member one',
    role: 'Role title',
    bio: 'Replace with a short bio. Photo slots can be added later if you extend this layout.',
  },
  {
    name: 'Team member two',
    role: 'Role title',
    bio: 'Another placeholder bio. Keep entries consistent in length for a balanced grid.',
  },
  {
    name: 'Team member three',
    role: 'Role title',
    bio: 'Use real names and titles when you are ready; this file is the single source for the Our Team page.',
  },
  {
    name: 'Team member four',
    role: 'Role title',
    bio: 'Optional fourth slot. Remove or duplicate the map in the team array as needed.',
  },
]

export const metadata = {
  title: `Our Team | ${siteName}`,
  description: siteTagline,
  keywords: 'team, people, draft template',
}

export default function OurTeamPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <TextureOverlay opacity={0.035} className="mix-blend-multiply" />
      <Navbar />
      <section className="relative min-h-[30vh] flex items-center justify-center pt-28 pb-16 bg-gradient-to-b from-amber-50/40 to-white">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading font-heading text-4xl md:text-5xl font-medium text-amber-700 normal-case mb-4">
            Our team
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed font-subheading">
            Introduce the people behind {siteName}.
          </p>
        </div>
      </section>
      <div className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <p className="text-slate-600 text-lg mb-4 max-w-2xl font-subheading">
            This page is a structural draft: headings, spacing, and typography match the rest of the site. Swap in your real roster and bios when you launch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-12">
            {team.map((member, index) => (
              <div key={index} className="py-0">
                <h2 className="font-subheading text-xl md:text-2xl font-medium text-slate-900 mb-2">
                  {member.name}
                </h2>
                <p className="text-amber-700 text-sm font-medium mb-3 font-subheading">
                  {member.role}
                </p>
                <p className="text-slate-600 leading-relaxed font-subheading">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8">
            <p className="text-slate-600 mb-6 font-subheading">
              Add a closing line about how you collaborate, then send people to contact or signup.
            </p>
            <Link href="/contact" className="btn-fc-primary inline-block">
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
