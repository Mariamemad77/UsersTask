import React from "react";

import "./App.css";
import { connect } from "react-redux";
import UsersTable from "./components/UsersTable";
import CreateUser from "./components/CreateUser";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/create-user">
          <CreateUser />
        </Route>
        <Route path="/">
          <UsersTable />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default connect()(App);
