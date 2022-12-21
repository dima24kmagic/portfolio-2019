import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";

import GlobalStyle from "../components/GlobalStyles";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";

const ldJSON = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  url: "https://dzmitry-baranau-portfolio.netlify.app/",
  name: "React Developer Portfolio",
  author: {
    "@type": "Person",
    name: "Dzmitry Baranau",
    sameAs: [
      "https://www.linkedin.com/in/dzmitry-baranau-b96106159/",
      "https://github.com/dima24kmagic",
    ],
  },
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      url: "https://dzmitry-baranau-portfolio.netlify.app/project/dapperlabs-nfl",
      image:
        "https://dzmitry-baranau-portfolio.netlify.app/images/dapperlabs-nfl.png",
      name: "Dapper Labs NFL Project",
    },
    {
      "@type": "ListItem",
      position: 2,
      url: "https://dzmitry-baranau-portfolio.netlify.app/project/newsroom",
      image:
        "https://dzmitry-baranau-portfolio.netlify.app/images/newsroom-min.png",
      name: "Newsroom Project",
    },
  ],
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NextSeo
        title="React Developer Portfolio"
        defaultTitle="React Developer Portfolio"
        titleTemplate="React Developer Portfolio"
        canonical="https://dzmitry-baranau-portfolio.netlify.app/"
        description="Welcome to my portfolio as a React developer. Check out my projects and contact me for more information."
        // keywords="react, developer, portfolio, projects, contact"
        // keywords={["react", "developer", "portfolio", "projects", "contact"]}
        openGraph={{
          title: "React Developer Portfolio",
          description:
            "Welcome to my portfolio as a React developer. Check out my projects and contact me for more information.",
          type: "website",
          url: "https://dzmitry-baranau-portfolio.netlify.app/",
          images: [
            {
              url: `https://dzmitry-baranau-portfolio.netlify.app/images/my-pic-1-min.jpg`,
              alt: "My photo",
            },
            {
              url: "https://dzmitry-baranau-portfolio.netlify.app/images/dapperlabs-nfl.png",
              alt: "Screenshot of project for Dapperlabs",
            },
            {
              url: "https://dzmitry-baranau-portfolio.netlify.app/images/newsroom-min.png",
              alt: "Screenshot of project for Depop",
            },
          ],
          site_name: "React Developer Portfolio",
        }}
      />
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta
          name="keywords"
          content="react, developer, portfolio, projects, contact"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJSON) }}
          key="item-jsonld"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/public/sitemap.xml"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
