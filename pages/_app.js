import "../styles/globals.css";
import Script from 'next/script'
import Head from "next/head";

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_CONTAINER_ID

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
    // gtag.js (deprecated. Trying to migrate gtag.js into Google TagManager)
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BLGRS7WXF0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {dataLayer.push(arguments); };
              gtag('js', new Date());
              gtag('config', 'G-BLGRS7WXF0');
            `
          }}
        />
        <title>Schole（スコレ）| 本格的プログラミング学習</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
        </style>
      </Head>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <Component {...pageProps} />
      <noscript><iframe src={"https://www.googletagmanager.com/ns.html?id=" + GTM_ID}
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    </>
  );
}

export default MyApp;
