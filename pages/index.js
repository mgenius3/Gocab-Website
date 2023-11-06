import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: nine4"
        description="Gocab. Transit & Logistics"
        canonical="gocab.site"
        openGraph={{
          url: "gocab.site",
        }}
      />
      <Head>
        <title>Gocab</title>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
