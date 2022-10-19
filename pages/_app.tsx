import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className='bg-primary-100 overflow-y-scroll h-screen'>
        <Toaster />
        <Header />
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
