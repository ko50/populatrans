import { PrefForm } from "components/checkbox/PrefForm";
import { PopulationTransitionGraph } from "components/graph/PopulationTransition";
import { Header } from "components/header/Common";
import { H1 } from "components/heading/H1";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "styles/pages/index.module.scss";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>POPULA Trans</title>
        <meta
          name="description"
          content="Display population transition in selected prefectures"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.graph}>
            <H1 text="人口の推移" />
            <PopulationTransitionGraph
              transition={{ boundaryYear: 2020, transitions: [] }}
            />
          </div>
          <div className={styles.prefForm}>
            <H1 text="都道府県" />
            <PrefForm prefList={[]} onSelect={() => {}} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
