import React from "react";
import { withRouter, Route } from "react-router-dom";
import axios from "axios";
import { PrivateRoute } from "../utils/PrivateRoute";

import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";

const App = props => {

  const testing = { username: "Lambda School", password: "i<3Lambd4" };

  const login = () => {
    axios.post("http://localhost:3333/login", testing).then(res => {
      localStorage.setItem("token", res.data.payload);
      props.history.push('/dashboard');
    });
  };

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props => <Login {...props} login={login} />}
      />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default withRouter(App);
