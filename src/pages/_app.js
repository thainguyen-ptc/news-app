import React from 'react';
import reduxWrapper from 'store';

import '../styles/globals.css';

function MasterApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default reduxWrapper.withRedux(MasterApp);
