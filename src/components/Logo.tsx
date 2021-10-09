import { Link } from "react-router-dom";

import mainWhiteLogo from "assets/images/logo/logo-main-white.png";
import mainBlackLogo from "assets/images/logo/logo-main-black.png";
import smallBlueLogo from "assets/images/logo/logo-small-blue.png";

const WhiteLogo = ({ width = 150 }) => (
  <Link to="/">
    <img
      src={mainWhiteLogo}
      width={width}
      style={{ padding: "10% 20%" }}
      alt="logo"
    />
  </Link>
);

const BlackLogo = ({ width = 150 }) => (
  <Link to="/">
    <img
      src={mainBlackLogo}
      width={width}
      style={{ padding: "10% 20%" }}
      alt="logo"
    />
  </Link>
);

const SmallBlueLogo = ({ width = 150 }) => (
  <Link to="/">
    <img
      src={smallBlueLogo}
      width={width}
      style={{ padding: "10% 20%" }}
      alt="logo"
    />
  </Link>
);

export { WhiteLogo, BlackLogo, SmallBlueLogo };
