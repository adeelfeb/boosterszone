/**
 * Site imagery — assets live under public/images/new.
 * Keys map to hero collage, inner-page heroes, product tiles, and team portraits.
 */
const BASE = '/images/new'

/** @type {Record<string, string>} */
const ASSETS = {
  tallA: `${BASE}/B00E014A-562C-4326-8154-CFBB6B925A68.png`,
  tallB: `${BASE}/FA6B6AB0-3C78-4A89-8271-9B068255EA16.png`,
  portraitMid: `${BASE}/5547D7B9-C2CE-4DC0-848C-7923F74E13A7.jpeg`,
  portraitSm: `${BASE}/15CE9B02-ECB1-434C-B03A-4918D8BEE3A9.png`,
  logoMark: `${BASE}/44BA2EF1-3840-4F53-944C-FFC2DAFC970F.jpeg`,
}

export const marketingImages = {
  heroMain: ASSETS.tallA,
  heroSchool: ASSETS.tallB,
  heroCommunity: ASSETS.portraitMid,
  sectionBooks: ASSETS.portraitSm,
  sectionHeart: ASSETS.tallB,
  pageFundraising: ASSETS.portraitMid,
  pageBooks: ASSETS.portraitSm,
  pageAbout: ASSETS.tallA,
  /** Inline photo on About (distinct from hero) */
  pageAboutBody: ASSETS.portraitSm,
  pageContact: ASSETS.portraitMid,
  pageFaq: ASSETS.portraitSm,
  pageTeam: ASSETS.tallB,
  productHistory: ASSETS.tallA,
  productColoring: ASSETS.tallB,
  productTrivia: ASSETS.portraitMid,
  productCustom: ASSETS.logoMark,
  teamPortrait1: ASSETS.portraitSm,
  teamPortrait2: ASSETS.portraitMid,
  teamPortrait3: ASSETS.tallB,
  teamPortrait4: ASSETS.tallA,
}
