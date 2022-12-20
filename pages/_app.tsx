import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import heroImage from "../static/images/my-pic-1-min.jpg";
import faviconIco from "../public/favicon/favicon.ico";
import favicon32 from "../public/favicon/favicon-32x32.png";
import favicon16 from "../public/favicon/favicon-16x16.png";
import faviconA192 from "../public/favicon/android-chrome-192x192.png";
import faviconA512 from "../public/favicon/android-chrome-512x512.png";
import faviconAT from "../public/favicon/apple-touch-icon.png";

import GlobalStyle from "../components/GlobalStyles";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";

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
              url: `https://dzmitry-baranau-portfolio.netlify.app${heroImage.src}`,
              alt: "My photo",
            },
            // {
            //   url: "https://dzmitry-baranau-portfolio.netlify.app/static/images/dapperlabs-nfl.png",
            //   alt: "Screenshot of project for Dapperlabs",
            // },
            // {
            //   url: "/static/images/newsroom-min.png",
            //   alt: "Screenshot of project for Depop",
            // },
          ],
          site_name: "React Developer Portfolio",
        }}
      />
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href={faviconIco.src} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16.src} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32.src} />
        <link rel="icon" type="image/png" sizes="192x192" href={faviconA192.src} />
        <link rel="icon" type="image/png" sizes="512x512" href={faviconA512.src} />
        <link rel="apple-touch-icon" sizes="180x180" href={faviconAT.src} />
        <meta
          name="keywords"
          content="react, developer, portfolio, projects, contact"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
