import icon from "/icons/icon.svg"

export default {
  github: 'https://github.com/wyattowalsh/artbots',
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – 𝓐𝓻𝓽𝔹𝕠𝕥𝕤',
  logo: (
    <>
      <icon/>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#6667AB" />
      <meta name="theme-color" content="#6667AB" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="𝓐𝓻𝓽𝔹𝕠𝕥𝕤: Smart Artist-Machines" />
      <meta name="og:description" content="𝓐𝓻𝓽𝔹𝕠𝕥𝕤: Smart Artist-Machines" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/icons/icon.png" />
      {/* <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" /> */}
      <meta name="og:title" content="𝓐𝓻𝓽𝔹𝕠𝕥𝕤: Smart Artist-Machines" />
      <meta name="og:image" content="/icons/icon.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon/favicon-16x16.png">
      <link rel="manifest" href="/icons/favicon/site.webmanifest">
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <><a href="https://github.com/wyattowalsh/artbots/blob/main/LICENSE">GPLv3</a> {new Date().getFullYear()} © 𝓐𝓻𝓽𝔹𝕠𝕥𝕤.</>,
  unstable_faviconGlyph: '💾',
}
