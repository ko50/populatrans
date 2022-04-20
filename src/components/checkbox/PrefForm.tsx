import { CheckboxForm } from "components/checkbox/Form";
import { Prefecture } from "models/prefecture";
import { useState } from "react";
import styles from "styles/components/prefForm.module.scss";

type Props = {
  prefList: Prefecture[];
  onSelect: (prefList: Prefecture[]) => void;
};

export const PrefForm: React.FC<Props> = ({ prefList, onSelect }) => {
  const [selectedPrefList, setSelectedPrefList] =
    useState<Prefecture[]>(prefList);

  return (
    <div className={styles.wrapper}>
      {prefList.map((p) => {
        return (
          <CheckboxForm
            key={p.code}
            label={p.name}
            id={p.code.toString()}
            onChange={() => {
              selectedPrefList.includes(p)
                ? selectedPrefList.filter((e) => e.code !== p.code)
                : selectedPrefList.push(p);

              setSelectedPrefList(selectedPrefList);
              onSelect(prefList);
            }}
          />
        );
      })}
    </div>
  );
};
