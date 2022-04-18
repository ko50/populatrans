import styles from "styles/components/checkbox/common.module.scss";

export const Checkbox: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({ ...props }) => {
  return <input className={styles.checkbox} type="checkbox" {...props} />;
};
