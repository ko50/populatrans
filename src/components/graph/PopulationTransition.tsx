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
import { conversionPopulationTransition } from "controllers/populationTransitionGraph/conversionGraphData";

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
  const data = conversionPopulationTransition(labels, transitionList);

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
