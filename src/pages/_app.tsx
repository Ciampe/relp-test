import React from 'react';

import '../styles/globals.css';
import Layout from '@components/Layout/Layout'
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;