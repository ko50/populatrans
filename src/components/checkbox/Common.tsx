export const Checkbox: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({ ...props }) => {
  return (
    <div>
      <input className="" {...props} />
    </div>
  );
};
