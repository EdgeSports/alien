import { ReactElement } from "react";
import { ENVIRONMENT, Environment } from "util/Environment";

const PerEnvironment = ({
  children,
  environments,
}: {
  children: ReactElement;
  environments: Array<Environment>;
}) => {
  if (environments.includes(ENVIRONMENT)) {
    return children;
  } else {
    return null;
  }
};

export { PerEnvironment };
