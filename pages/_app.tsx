import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-primary-100 overflow-y-scroll h-screen'>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
