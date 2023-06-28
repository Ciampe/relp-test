import React from 'react';

import '../styles/globals.css';
import axios from 'axios';
import App from 'next/app';
import Layout from '../../components/Layout'

function MyApp({ Component, pageProps } : any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async (appContext:any) => {
  const appProps = await App.getInitialProps(appContext);

  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const characters = response.data.results;
    appProps.pageProps = { ...appProps.pageProps, characters };
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return { ...appProps };
};

export default MyApp;