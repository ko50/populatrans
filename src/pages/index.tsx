import { PrefForm } from "components/checkbox/PrefForm";
import { PopulationTransitionGraph } from "components/graph/PopulationTransition";
import { H1 } from "components/heading/H1";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>POPULA Trans</title>
        <meta
          name="description"
          content="Display population transition in selected prefectures"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <H1 text="人口の推移" />
          <PopulationTransitionGraph
            transition={{ boundaryYear: 2020, transitions: [] }}
          />
        </div>
        <div>
          <H1 text="都道府県" />
          <PrefForm prefList={[]} onSelect={() => {}} />
        </div>
      </main>
    </div>
  );
};

export default Index;
