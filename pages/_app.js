import '../styles/globals.css'
import "../styles/about.css"
import "../styles/slider.css"
import "../styles/contact.css"
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
  );
}

export default MyApp
