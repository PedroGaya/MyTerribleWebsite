import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppsPage } from "./Pages/Apps/appsPage.js";
import { ArticlesPage } from "./Pages/Articles/articlesPage";
import { HomePage } from "./Pages/HomePage";

export const BasePage = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: "20px"}}>
          <a className="navbar-brand" href="/">
            WNDR
          </a>

          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/apps">
              Apps
            </Link>
            <Link className="nav-item nav-link" to="/articles">
              Articles
            </Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/apps" component={AppsPage} />
          <Route path="/articles" component={ArticlesPage}/>
        </Switch>
      </div>
    </Router>
  );
};
