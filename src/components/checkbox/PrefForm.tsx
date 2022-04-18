import { CheckboxForm } from "components/checkbox/Form";
import { Prefecture } from "models/prefecture";

type Props = {
  prefList: Prefecture[];
  onSelect: (pref: Prefecture) => void;
};

export const PrefForm: React.FC<Props> = ({ prefList, onSelect }) => {
  return (
    <div>
      {prefList.map((p) => {
        return (
          <CheckboxForm
            key={p.code}
            label={p.name}
            id={p.code.toString()}
            onChange={() => onSelect(p)}
          />
        );
      })}
    </div>
  );
};
