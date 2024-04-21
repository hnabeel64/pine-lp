import "@/styles/globals.css";
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
 
// Font files can be colocated inside of `pages`
const majallab = localFont({ 
    src: './majallab-webfont.woff2',
    variable: '--font-majallab',
});
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['400', '500', '600'],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable, majallab.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
