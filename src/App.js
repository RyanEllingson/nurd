//Don't change code unless discussed first with AyDy! Will disrupt navbar links! Thanks!
//trying out links with local host 3000. Will merge with backend. Expect changes.
import 'bulma/css/bulma.css';
import 'react-bulma-components/src/index.sass';
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

import {Auth} from "./auth/auth";

const App = () => {
  return (
    <Auth>
    /* ensures that path is exact and will redirect user from landing on unsupported pages */
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <UserGroups />
          </Route>
          <Route path="/search/" exact>
            <SearchGroups />
          </Route>
          <Route path="/:userId/groups" exact>
            <UserGroups />
            <UserGroups />
            <UserGroups />
            <UserGroups />
            <UserGroups />
            <UserGroups />
            <UserGroups />
            <UserGroups />
            <UserGroups />
          </Route>
          <Route path="/:userId/profile" exact>
            <Users />
          </Route>
          <Route path="/groups/new" exact>
            <NewGroup />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </Auth>
  );
};
export default App;
