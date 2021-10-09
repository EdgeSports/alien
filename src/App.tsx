import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { SidebarLayout } from "layouts/sidebar/SidebarLayout";
import { AuthRoute } from "api/ApiUtil";
import {
  Calendar,
  Dashboard,
  Messages,
  Notifications,
  Nutrition,
  Profile,
  Search,
  Settings,
  Team,
  Login,
  Home,
  NoSuchPage,
} from "pages";
import { Privacy } from "pages/Privacy";
import { Terms } from "pages/Terms";

const SidebarRoute = ({
  path,
  component,
}: {
  path: string;
  component: React.ReactNode;
}) => (
  <AuthRoute path={path}>
    <SidebarLayout>{component}</SidebarLayout>
  </AuthRoute>
);

function App() {
  // TODO we should probaby have authentication and user id values here
  // rather than in a separate authenication-required component?

  return (
    <Router>
      <Switch>
        <SidebarRoute path="/calendar" component={<Calendar />} />
        <SidebarRoute path="/dashboard" component={<Dashboard />} />
        <SidebarRoute path="/messages" component={<Messages />} />
        <SidebarRoute path="/notifications" component={<Notifications />} />
        <SidebarRoute path="/nutrition" component={<Nutrition />} />
        <SidebarRoute path="/profile" component={<Profile />} />
        <SidebarRoute path="/search" component={<Search />} />
        <SidebarRoute path="/settings" component={<Settings />} />
        <SidebarRoute path="/team" component={<Team />} />

        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="*" component={NoSuchPage} />
      </Switch>
    </Router>
  );
}
export default App;
