import React from "react";
import { useSelector } from "react-redux";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import Nav from "../Nav/Nav";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterPage from "../RegisterPage/RegisterPage";

import "./App.css";

function App() {
  const user = useSelector((store) => store.user);

  return (
    <Router>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />

          <Route
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route
            exact
            path="/home"
          >
            <HomePage />
          </Route>

          <Route exact path="/login">
            {user.id ? (
              <Redirect to="/home" />
            ) : (
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              <Redirect to="/home" />
            ) : (
              <RegisterPage />
            )}
          </Route>

          <ProtectedRoute>
            <Route exact path="/favorites">
              <FavoritesPage/>
            </Route>
          </ProtectedRoute>

          {/* If none of the other routes matched, show 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
