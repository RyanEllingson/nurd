//Don't change code unless discussed first with AyDy! Will disrupt navbar links! Thanks!
//trying out links with local host 3000. Will merge with backend. Expect changes.
import "bulma/css/bulma.css";
import "react-bulma-components/src/index.sass";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Users from "./user/pages/Users";
import SearchGroups from "./groups/pages/SearchGroups";
import NewGroup from "./groups/pages/NewGroup";
import UserGroups from "./groups/pages/UserGroups";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute";

import { Auth } from "./auth/auth";

import LoginAuth from "./user/pages/LoginAuth";
import Register from "./user/pages/Register";
const App = () => {
  return (
    <Auth>
      {/* /* ensures that path is exact and will redirect user from landing on unsupported pages */}
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route exact path="/" component={UserGroups} />

            <PrivateRoute exact path="/search/" component={SearchGroups} />

            <PrivateRoute exact path="/:userId/groups" component={UserGroups} />

            <PrivateRoute exact path="/:userId/profile" component={Users} />

            <PrivateRoute exact path="/groups/new" component={NewGroup} />

            <Route exact path="/login" component={LoginAuth} />

            <Route exact path="/register" component={Register} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </Auth>
  );
};
export default App;
