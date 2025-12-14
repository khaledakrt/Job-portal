/* // frontend/pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/NavBar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
//      <Navbar />  {/* Navbar sera sur toutes les pages */
// }
//      <Component {...pageProps} />
//    </>
//  );
//}
// frontend/pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Navbar from '../components/NavBar';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Pages où on ne veut pas afficher le Navbar
  const noNavbarPages = ['/recruiter/RecruiterDashboard']; // ajoute d'autres pages recruteur si nécessaire

  const showNavbar = !noNavbarPages.includes(router.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
