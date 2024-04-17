import "@/styles/globals.css";
import { majallab, poppins } from './customfont';

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable, majallab.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
