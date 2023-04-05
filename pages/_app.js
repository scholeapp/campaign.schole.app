import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Schole（スコレ）| 本格的プログラミング学習</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
        </style>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LGX89LF33R"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); };
          gtag('js', new Date());
          gtag('config', 'G-LGX89LF33R');
            `,
          }}
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;