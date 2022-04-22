import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { TransitionList } from "models/transition";
import styles from "styles/components/graph/population_transition.module.scss";
import { filterGraphLabel } from "controllers/populationTransitionGraph/filterGraphLabel";
import {
  computeGraphDotColor,
  computeGraphLineColor,
} from "controllers/populationTransitionGraph/computeGraphColor";

type Props = {
  transitionList?: TransitionList;
};

export const PopulationTransitionGraph: React.FC<Props> = ({
  transitionList,
}) => {
  if (transitionList === undefined)
    return <div className={styles.wrapper}>Loading</div>;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: false,
      },
    },
  };

  const labels = filterGraphLabel(transitionList);
  const data = {
    labels,
    datasets: transitionList.transitions.map((t) => {
      return {
        label: t.pref.name,
        data: t.populations
          .filter((p) => labels.includes(p.year))
          .map((p) => p.value),
        borderColor: computeGraphLineColor(t.pref),
        backgroundColor: computeGraphDotColor(t.pref),
      };
    }),
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.population}>人口数</div>
      <div className={styles.year}>年度</div>
      <div className={styles.graph}>
        <Line options={options} data={data}></Line>
      </div>
    </div>
  );
};
