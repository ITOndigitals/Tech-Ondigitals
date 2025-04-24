import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import LoadingSpinnerOverlay from "@/components/ui/LoadingSpinnerOverlay/LoadingSpinnerOverlay";
import usePageLoading from "@/hooks/usePageLoading";
import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import localFont from "next/font/local";
import Head from "next/head";
const fixelFont = localFont({
  src: "./fonts/FixelVariable.ttf",
  display: "swap",
});
const client = new ApolloClient({
  uri: "https://itapi.ondigitals.com/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  const isLoading = usePageLoading();
  return (
    <>
      {isLoading && <LoadingSpinnerOverlay />}
      {!isLoading && (
        <ApolloProvider client={client}>
          <Head>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-XW0FYLXMC7"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XW0FYLXMC7');
          `,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WP7JNHC4');
              `,
              }}
            />
            <script
              src="https://analytics.ahrefs.com/analytics.js"
              data-key="hvmGSJyCbOExDkSNBkM97g"
              async
            ></script>
          </Head>
          <div className={fixelFont.className}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </ApolloProvider>
      )}
    </>
  );
}
