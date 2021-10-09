import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Button = ({
  label,
  path,
  disabled = false,
  onClick,
}: {
  label: string | ReactElement;
  path?: string;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const innerButton = (
    <button className="edge-button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );

  if (path) {
    return <Link to={path}>{innerButton}</Link>;
  }
  return innerButton;
};

const SubmitButton = ({ label }: { label: string }) => {
  return (
    <input className="edge-button" name="submit" type="submit" value={label} />
  );
};

export { Button, SubmitButton };
