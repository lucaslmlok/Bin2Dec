import Head from "next/head";
import { type AppType } from "next/dist/shared/lib/utils";
import { Inter } from "@next/font/google";
import colors from "tailwindcss/colors";

import "../styles/globals.css";
import Footer from "components/Footer";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Bin2Dec</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content={colors.neutral[900]}></meta>
      </Head>
      <div className={inter.className}>
        <div className="min-h-screen bg-neutral-900">
          <div className="container py-6 text-center">
            <div className="prose prose-xl prose-invert mx-auto">
              <main>
                <Component {...pageProps} />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyApp;
