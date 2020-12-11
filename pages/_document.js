import Document, { Head, Main, NextScript, Html } from "next/document";
import { TypographyStyle } from "react-typography";

import typography from "utils/typography";
import { getSiteMetaData } from "utils/helpers";

export default class MyDocument extends Document {
  render() {
    // console.log(typography);
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <TypographyStyle typography={typography} />
          <link rel="shortcut icon" href="/profile.png" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <meta
            name="google-site-verification"
            content="UAmwxXvHuG3pvz4KXqAsc4HQRVqCDk9rpjCxFk9hzqU"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-Z61NCH1KS3`}
          />
          {process.env.NODE_ENV == "production" && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z61NCH1KS3', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
