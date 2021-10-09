import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdTimeline,
  MdNotifications,
  MdMessage,
  MdPerson,
  MdPermContactCalendar,
  MdSearch,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdSettings,
  MdRestaurant,
  MdPeople,
} from "react-icons/md";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  MenuItem,
} from "components/sidebar";
import "./sidebar.css";

import { EDGE_BLUE } from "util/Constants";
import mainWhiteLogo from "assets/images/logo/logo-main-white.png";
import smallBlueLogo from "assets/images/logo/logo-small-blue.png";

const SidebarLogo = () => (
  <Link to="/" className="logo">
    <img
      className="img-contracted"
      src={smallBlueLogo}
      width="40px"
      alt="logo"
    />
    <img
      className="img-expanded"
      src={mainWhiteLogo}
      width="100px"
      alt="logo"
    />
  </Link>
);

type ItemProps = {
  title: string;
  icon: React.ReactElement;
  link: string;
};

const Item = ({ title, icon, link }: ItemProps) => {
  const { pathname } = useLocation();
  const isCurrentPage = pathname.startsWith(link);

  return (
    <MenuItem
      icon={React.cloneElement(icon, {
        size: "1.5em",
        color: EDGE_BLUE,
      })}
      className={isCurrentPage ? "selected" : ""}
    >
      <Link to={link}>{title}</Link>
    </MenuItem>
  );
};

const EdgeSidebar = ({
  toggled,
  doToggle,
}: {
  toggled: boolean;
  doToggle: () => void;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <Sidebar
      id="sidebar"
      collapsed={collapsed}
      toggled={toggled}
      onToggle={doToggle}
      breakPoint="md"
    >
      <SidebarHeader className="centered" style={{ height: "80px" }}>
        <SidebarLogo />
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          <Item title="Dashboard" icon={<MdTimeline />} link="/dashboard" />
          <Item title="Team" icon={<MdPeople />} link="/team" />
          <Item title="Nutrition" icon={<MdRestaurant />} link="/nutrition" />
          <Item title="Messages" icon={<MdMessage />} link="/messages" />
          <Item
            title="Calendar"
            icon={<MdPermContactCalendar />}
            link="/calendar"
          />
          <Item title="Search" icon={<MdSearch />} link="/search" />
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        <Menu>
          <Item title="Profile" icon={<MdPerson />} link="/profile" />
          <Item
            title="Notifications"
            icon={<MdNotifications />}
            link="/notifications"
          />
          <Item title="Settings" icon={<MdSettings />} link="/settings" />
        </Menu>
        <div
          onClick={toggleCollapsed}
          className="centered"
          style={{ cursor: "pointer" }}
        >
          {collapsed ? (
            <MdKeyboardArrowRight size="3em" />
          ) : (
            <MdKeyboardArrowLeft size="3em" />
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

const SidebarLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const [toggled, setToggled] = useState(false);
  const doToggle = () => setToggled(!toggled);

  return (
    <div style={{ height: "100vh", display: "flex", position: "relative" }}>
      <EdgeSidebar toggled={toggled} doToggle={doToggle} />
      <div style={{ overflow: "auto", flexGrow: 1, position: "relative" }}>
        <div className="sidebar-hamburger" onClick={doToggle}></div>
        {children}
      </div>
    </div>
  );
};

export { SidebarLayout };
