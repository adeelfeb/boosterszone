import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/designndev/Navbar'
import Footer from '../../components/designndev/Footer'
import TextureOverlay from '../../components/designndev/TextureOverlay'
import MarketingPageHero from '../../components/boosters/MarketingPageHero'
import { siteName, siteTagline } from '../../lib/siteConfig'
import { marketingImages } from '../../lib/marketingImages'

const team = [
  {
    name: 'Team member one',
    role: 'Role title',
    bio: 'Short bio introducing this person’s role and background.',
    image: marketingImages.teamPortrait1,
  },
  {
    name: 'Team member two',
    role: 'Role title',
    bio: 'Short bio—keep length similar across cards for a balanced layout.',
    image: marketingImages.teamPortrait2,
  },
  {
    name: 'Team member three',
    role: 'Role title',
    bio: 'Names, titles, and bios are edited in this page’s team array.',
    image: marketingImages.teamPortrait3,
  },
  {
    name: 'Team member four',
    role: 'Role title',
    bio: 'Optional fourth card; add or remove entries in the team array as needed.',
    image: marketingImages.teamPortrait4,
  },
]

export const metadata = {
  title: `Our Team | ${siteName}`,
  description: siteTagline,
  keywords: 'team, people, draft template',
}

export default function OurTeamPage() {
  return (
    <main className="relative min-h-screen">
      <TextureOverlay opacity={0.055} className="mix-blend-multiply" />
      <Navbar />
      <MarketingPageHero
        eyebrow="People"
        title="Our team"
        subtitle={`Introduce the people behind ${siteName}.`}
        imageKey="team"
        imageAlt="Team collaboration"
      />
      <div className="pb-20">
        <div className="max-w-bz-wide mx-auto px-4 sm:px-5 lg:px-8 xl:px-10 pt-4">
          <p className="text-stone-600 text-base mb-10 max-w-4xl font-subheading">
            Meet the people behind {siteName}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
            {team.map((member, index) => (
              <article
                key={index}
                className="flex flex-col border border-parchment-300/80 bg-white/80 shadow-bz-soft overflow-hidden rounded-sm hover:shadow-bz-card transition-shadow duration-300"
              >
                <div className="relative aspect-[4/5] bg-parchment-200">
                  <Image
                    src={member.image}
                    alt={`${member.name} portrait`}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-heading text-xl text-stone-900 mb-1">{member.name}</h2>
                  <p className="text-fc-highlight-dark text-sm font-medium mb-4 font-subheading">{member.role}</p>
                  <p className="text-stone-600 leading-relaxed font-subheading text-base m-0 flex-1">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-parchment-300/70 max-w-4xl">
            <p className="text-stone-600 mb-4 font-subheading text-base">
              Add a closing line about how you collaborate, then send people to contact.
            </p>
            <Link href="/contact" className="btn-fc-primary inline-flex no-underline">
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
