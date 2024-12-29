import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import LoadingSpinnerOverlay from "@/components/ui/LoadingSpinnerOverlay/LoadingSpinnerOverlay";
import usePageLoading from "@/hooks/usePageLoading";
import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import localFont from "next/font/local";
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
      <ApolloProvider client={client}>
        <div className={fixelFont.className}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ApolloProvider>
    </>
  );
}
