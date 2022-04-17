type Props = {
  text: string;
};

export const H1: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <span />
    </div>
  );
};
