import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link
          type="font/woff2"
          href="/fonts/opensans.woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          type="font/woff2"
          href="/fonts/opensanslight.woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          type="font/woff2"
          href="/fonts/opensansbold.woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
