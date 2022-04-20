import { api } from "api/setup";
import { PrefForm } from "components/checkbox/PrefForm";
import { PopulationTransitionGraph } from "components/graph/PopulationTransition";
import { Header } from "components/header/Common";
import { H1 } from "components/heading/H1";
import { Prefecture } from "models/prefecture";
import { TransitionList } from "models/transition";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "styles/pages/index.module.scss";

type Props = {
  prefList: Prefecture[];
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const prefList = await api.getPrefList();
  const props: Props = {
    prefList: prefList,
  };

  return { props };
};

const Index: NextPage<Props> = ({ prefList }) => {
  const [transitionList, setTransitionList] = useState<TransitionList>();

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
            <PopulationTransitionGraph transitionList={transitionList} />
          </div>
          <div className={styles.prefForm}>
            <H1 text="都道府県" />
            <PrefForm
              prefList={prefList}
              onSelect={async (prefList) => {
                const t = await api.getPopulationTransition(prefList);
                setTransitionList(t);
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
