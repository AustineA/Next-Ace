import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={inter.className}>
      <AnimatePresence initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </main>
  );
}
