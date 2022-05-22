import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import 'normalize.css/normalize.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to planit-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
