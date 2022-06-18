import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prateek Soni</title>
      </Head>
      <main className="mx-auto my-12 w-3/5">
        <Header />
        <About />
      </main>
    </>
  );
};

export default Home;
