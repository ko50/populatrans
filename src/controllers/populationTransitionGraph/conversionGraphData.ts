import {
    computeGraphDotColor,
    computeGraphLineColor,
} from "controllers/populationTransitionGraph/computeGraphColor";
import { TransitionList } from "models/transition";

export function conversionPopulationTransition(
    labels: number[],
    transition: TransitionList
) {
    const data = transition.transitions.map((t) => {
        const lineColor = computeGraphLineColor(t.pref);
        const dotColor = computeGraphDotColor(t.pref);

        return {
            label: t.pref.name,
            data: t.populations
                .filter((p) => labels.includes(p.year))
                .map((p) => p.value),
            borderColor: lineColor,
            backgroundColor: dotColor,
        };
    });

    return {
        labels,
        datasets: data,
    };
}
