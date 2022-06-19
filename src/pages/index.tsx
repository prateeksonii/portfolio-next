import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Internships from "../components/Internships";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prateek Soni</title>
      </Head>
      <main className="mx-auto my-12 w-3/5 space-y-8">
        <Header />
        <About />
        <WorkExperience />
        <Internships />
        <Projects />
      </main>
    </>
  );
};

export default Home;
