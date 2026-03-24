import { siteName, siteTagline } from '../../lib/siteConfig'

export const metadata = {
  title: `FAQ | ${siteName}`,
  description: siteTagline,
  keywords: 'FAQ, draft template, help',
}

export default function FAQLayout({ children }) {
  return children
}
