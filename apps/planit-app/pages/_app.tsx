import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import 'normalize.css/normalize.css';
import { Dialog } from '@mui/material';
import { UserProvider } from '@auth0/nextjs-auth0';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Head>
        <title>PlanIT</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </UserProvider>
  );
}

export default CustomApp;
