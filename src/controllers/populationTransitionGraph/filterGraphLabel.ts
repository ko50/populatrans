import { TransitionList } from "models/transition";

export function filterGraphLabel(transitionList: TransitionList) {
    const labelSet: Set<number> = new Set();
    const _labels = transitionList.transitions.map((t) =>
        t.populations.map((p) => p.year)
    );

    _labels.forEach((years) => {
        years.forEach((y) => {
            if (y > transitionList.boundaryYear) return;

            // 他の Transition の人口構成にも共通する年だけ考慮する
            const consistent = _labels.every((years2) => years2.includes(y));

            if (consistent) labelSet.add(y);
        });
    });

    // 全ての Transition で共通する年だけをラベルとして返す
    return Array.from(labelSet.values()).sort();
}
