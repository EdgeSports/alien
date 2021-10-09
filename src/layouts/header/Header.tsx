import { ReactElement } from "react";
import { HashLink as Link } from "react-router-hash-link";

import logo from "assets/images/logo/logo-main-white.png";
import { GenericChildrenType } from "layouts";
import "./header.css";

type HeaderItemType = {
  path?: string;
  element: string | ReactElement;
};

const Item = ({ path, element }: HeaderItemType) => (
  <div style={{ margin: 15, fontSize: 18 }} key={element.toString()}>
    {path ? (
      <Link to={path} style={{ color: "inherit" }}>
        {element}
      </Link>
    ) : (
      element
    )}
  </div>
);

const Header = ({ children }: GenericChildrenType<HeaderItemType>) => (
  <header className="fixed-top">
    <div className="header-container">
      <div className="container-fluid d-flex align-items-center">
        <div className="header-logo">
          <Link to="/">
            <img alt="Logo" src={logo} style={{ height: "60px" }} />
          </Link>
        </div>

        <nav className="header-items">{children}</nav>
      </div>
    </div>
  </header>
);

Header.Item = Item;

export { Header };
