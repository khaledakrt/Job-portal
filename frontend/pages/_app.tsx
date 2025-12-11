// frontend/pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/NavBar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />  {/* Navbar sera sur toutes les pages */}
      <Component {...pageProps} />
    </>
  );
}
