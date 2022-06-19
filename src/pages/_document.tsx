import { Html, Head, Main, NextScript } from "next/document";

const CustomDocument = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap"
        rel="stylesheet"
      />
      <meta name="title" content="Prateek Soni | Software Developer" />
      <meta
        name="description"
        content="This is the homepage of my portfolio with details about me, my career and my projects."
      />
      <meta
        name="keywords"
        content="developer, engineer, portfolio, frontend, backend, fullstack"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Prateek Soni" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default CustomDocument;
