import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <link
          rel="preload"
          href="/fonts/vulf-sans-regular"
          as = "font"
          type = "font/woff2"
          crossOrigin = "anonymous"
        />
        <link
          rel="preload"
          href="/fonts/vulf-sans-bold"
          as = "font"
          type = "font/woff2"
          crossOrigin = "anonymous"
        />
        <link
          rel="preload"
          href="/fonts/vulf-sans-medium"
          as = "font"
          type = "font/woff2"
          crossOrigin = "anonymous"
        />
        <link
          rel="preload"
          href="/fonts/vulf-sans-light"
          as = "font"
          type = "font/woff2"
          crossOrigin = "anonymous"
        />
        <link
          rel="preload"
          href="/fonts/visuelt-regular"
          as = "font"
          type = "font/woff2"
          crossOrigin = "anonymous"
        />
        <link
          rel="preload"
          href="/fonts/visuelt-medium"
          as = "font"
          type = "font/woff2"
          crossOrigin = "anonymous"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}