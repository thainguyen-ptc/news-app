import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet(),
      originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App { ...props } />)
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: <>
          { initialProps.styles }
          { sheet.getStyleElement() }
        </>
      };
    } finally {
      sheet.seal();
    }
  }

  render () {
    return <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap"
          rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}

export default MyDocument;
