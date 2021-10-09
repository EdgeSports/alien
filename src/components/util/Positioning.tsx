import { ReactElement } from "react";

const AllCentered = ({ children }: { children: ReactElement }) => (
  <div
    style={{
      width: "100%",
      minHeight: "100%",
      maxHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

export { AllCentered };
