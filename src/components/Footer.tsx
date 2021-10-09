import { Link } from "react-router-dom";

const thisYear = new Date().getFullYear();
const Copyright = () => (
  <span>
    {"Edge Sports Technology LLC \u00A9 2021" +
      (2021 === thisYear ? "" : "-" + thisYear) +
      ", All Rights Reserved"}
  </span>
);

const Footer = () => (
  <div
    style={{
      backgroundColor: "#272727",
      width: "102vw",
      left: "-1vw",
      padding: "20px 1vw",
      boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.4)",
    }}
  >
    <div
      className="d-flex justify-content-center"
      style={{ fontSize: "0.9em" }}
    >
      <Copyright />
      <span style={{ margin: "0px 20px" }}>-</span>
      <Link to="/privacy">Privacy</Link>
      <span style={{ margin: "0px 20px" }}>-</span>
      <Link to="/terms">Terms</Link>
    </div>
  </div>
);

export { Footer };
