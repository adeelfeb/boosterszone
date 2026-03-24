import { Html, Head, Main, NextScript } from 'next/document'
import { sourceSans, sourceSerif } from '../lib/fonts'

export default function Document() {
  return (
    <Html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// Ensure this file is only used by Pages Router
// This prevents conflicts with App Router's layout.js
