import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "src/reducers";

import logo from "./logo.svg";
import "bulma/css/bulma.css";
import "./App.css";
import Users from "src/components/Users/Users";
import User from "src/components/Users/User";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

// const Home = () => {
//   return <div>Home</div>;
// };

const About = () => {
  return <div>About</div>;
};

const NotFound = () => {
  return <div>404 ::Not Found</div>;
};

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* <a className="navbar-item" href="https://bulma.io"> */}
        <Link className="navbar-item" to="/">
          <img
            className="App-logo"
            alt="Logo"
            src={logo}
            width="112"
            height="28"
          />
        </Link>
        {/* </a> */}

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/about">
            About
          </Link>

          <Link className="navbar-item" to="/404">
            Not Found
          </Link>

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div> */}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {/* <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const UsersRouter = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={Users} />
      <Route path={`${match.path}/:id`} component={User} />
    </Switch>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="container">
              <NavBar />
            </div>
          </header>
          <section className="section">
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <Redirect to="/users" />}
                />
                <Route path="/users" component={UsersRouter} />
                <Route path="/about" component={About} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </section>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
