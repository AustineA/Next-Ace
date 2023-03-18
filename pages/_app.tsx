import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </AnimatePresence>
  );
}
