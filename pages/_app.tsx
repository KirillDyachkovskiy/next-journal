import type { AppProps } from "next/app";
import "../views/styles/reset.scss";
import "../views/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
