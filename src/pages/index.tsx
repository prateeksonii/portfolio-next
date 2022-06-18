import type { NextPage } from "next";
import Head from "next/head";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prateek Soni</title>
      </Head>
      <main className="mx-auto my-12 w-3/5">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-extrabold uppercase tracking-tight">
              Prateek Soni
            </h1>
            <p className="mt-2 text-xl font-light">Software Developer</p>
          </div>
          <div className="flex items-center justify-end">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <AiOutlineMail className="text-2xl" />
                <a href="mailto:prateek_soni@outlook.com">
                  prateek_soni@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineLinkedin className="text-2xl" />
                <a href="https://linkedin.com/in/prateeksoni47">
                  linkedin.com/in/prateeksoni47
                </a>
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineGithub className="text-2xl" />
                <a href="https://github.com/prateeksonii">
                  github.com/prateeksonii
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
