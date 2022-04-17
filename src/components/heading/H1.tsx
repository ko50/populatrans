import styles from "styles/components/heading.module.scss";

type Props = {
  text: string;
};

export const H1: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.h1}>
      <h1 className={styles.text}>{text}</h1>
      <div className={styles.underline} />
    </div>
  );
};
