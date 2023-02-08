import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <meta charSet="utf-8" />
          <meta name="description" content="See, download and share." />
          <link
            rel="icon"
            type="image/ico"
            href="/images/favicon.ico"
          />
                    <link
            rel="icon"
            type="image/ico"
            sizes="16x16"
            href="/images/favicon.ico"
          />
          <link
            rel="icon"
            type="image/ico"
            sizes="32x32"
            href="/images/favicon.ico"
          />
          <link 
          rel="shortcut icon" 
          href="/images/favicon.ico"
          />
          <link
            rel="icon"
            type="image/ico"
            sizes="64x64"
            href="/images/favicon.ico"
          />
          <link rel="manifest" href="/manifest.json" />

          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto+Slab|Roboto:300,400,500,700&display=swap"
          />

          <meta name="theme-color" content="#094397" />

          <meta name="application-name" content="Dandela Crypto Converter" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Dandela Crypto Converter" />
          <meta name="description" content="See, download and share." />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/icons/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="apple-touch-icon" href="/static/images/logos/logo.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/images/logos/logo_orange_pic_no_back.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/logos/logo_orange_pic_no_back.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/images/logos/logo_orange_pic_no_back.png" />

          <link rel="icon" type="image/ico" sizes="32x32" href="/images/favicon.ico" />
          <link rel="icon" type="image/ico" sizes="16x16" href="/images/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/images/logos/logo_orange_maskable_x512.png" color="#FFFFFFFF" />
          <link rel="shortcut icon" href="/images/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://dandela.com" />
          <meta name="twitter:title" content="See, download and share." />
          <meta name="twitter:description" content="Dandela Crypto Converter - Financial freedom | Freedom to choose" />
          <meta name="twitter:image" content="https://drill-dev.com/images/logos/logo_orange_pic_no_back.png" />
          <meta name="twitter:creator" content="@DrillDev" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Drill Devr" />
          <meta property="og:description" content="See, download and share.ose" />
          <meta property="og:site_name" content="Drill Dev" />
          <meta property="og:url" content="https://drill-dev.com" />
          <meta property="og:image" content="/images/logos/logo_orange_pic_no_back.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
