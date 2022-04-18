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
import styles from "styles/components/graph.module.scss";

type Props = {
  transition: TransitionList;
};

export const PopulationTransitionGraph: React.FC<Props> = ({ transition }) => {
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

  const labelSet: Set<number> = new Set();
  const _labels = transition.transitions.map((t) =>
    t.populations.map((p) => p.year)
  );
  _labels.forEach((array) => {
    array.forEach((label) => {
      const consistent = _labels.every((array2) => array2.includes(label));
      if (consistent) labelSet.add(label);
    });
  });
  const labels = Array.from(labelSet.values()).sort();

  const data = {
    labels,
    datasets: transition.transitions.map((t) => {
      return {
        label: t.pref,
        data: t.populations
          .filter((p) => labels.includes(p.year))
          .map((p) => p.value),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
