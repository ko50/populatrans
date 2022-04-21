import { CheckboxForm } from "components/checkbox/Form";
import { Prefecture } from "models/prefecture";
import { useState } from "react";
import styles from "styles/components/checkbox/pref_form.module.scss";

type Props = {
  prefList: Prefecture[];
  onSelect: (prefList: Prefecture[]) => void;
};

export const PrefForm: React.FC<Props> = ({ prefList, onSelect }) => {
  const [selectedPrefList, setSelectedPrefList] = useState<Prefecture[]>([]);

  return (
    <div className={styles.wrapper}>
      {prefList.map((p) => {
        return (
          <CheckboxForm
            key={p.code}
            label={p.name}
            id={p.code.toString()}
            onChange={async () => {
              const updated = selectedPrefList.includes(p)
                ? selectedPrefList.filter((e) => e.code !== p.code)
                : [...selectedPrefList, p];

              setSelectedPrefList(updated);
              await onSelect(updated);
            }}
          />
        );
      })}
    </div>
  );
};
