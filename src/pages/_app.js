import React from 'react';
import Head from 'next/head';

import GlobalStyles from 'styles/index.style';
import reduxWrapper from 'store';

function MasterApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>;
}

export default reduxWrapper.withRedux(MasterApp);
