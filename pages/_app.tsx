import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import heroImage from "../static/images/my-pic-1-min.jpg";

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
