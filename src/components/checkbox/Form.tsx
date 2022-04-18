import { Checkbox } from "components/checkbox/Common";

import styles from "styles/components/checkbox/form.module.scss";

type Props = {
  label: string;
};

export const CheckboxForm: React.FC<
  Props & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, ...props }) => {
  return (
    <div className={styles.form}>
      <Checkbox id={props.id} {...props} />
      <label htmlFor={props.id}>{label}</label>
    </div>
  );
};
