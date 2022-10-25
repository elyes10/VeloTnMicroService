import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Associations from "./components/associations/Associations";
import AddAssociation from "./components/associations/AddAssociation";


import "./App.css";
import velos from "./components/velos/velos";
import velobackend from "./components/velos/velobackend";
import add_velo from "./components/velos/Add_velo";
import Add_velo from "./components/velos/Add_velo";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={velos} />

            <Route exact path="/shop" component={velos} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/associations" component={Associations} />
            
            <Switch>
            <PrivateRoute exact path="/back/associations" component={AddAssociation} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/register" component={Register} />
              <PrivateRoute exact path="/velosback" component={velobackend} />
              <PrivateRoute exact path="/Add_velo" component={Add_velo} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
