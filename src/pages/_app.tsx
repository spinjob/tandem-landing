import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import {CustomFonts} from '../../Global.js'
import localFont from '@next/font/local'
import '../styles/fonts.css'
import '../styles/global.css'

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{

        }}
      >
        <Component {...pageProps} />
        <CustomFonts />
      </MantineProvider>
    </>
  );
}