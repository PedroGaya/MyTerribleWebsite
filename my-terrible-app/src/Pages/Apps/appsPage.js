import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { APPS } from "./APPS.js";

export const AppsPage = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={`${path}/:appId`}>
          <AppComponent />
        </Route>
        <Route exact path="/apps">
          <div className="card-columns">
            {APPS.map((a) => (
              <div className="card" key={a.id}>
                <Link to={`${url}/${a.id}`}>
                  <img className="card-img-top" src={a.imageUrl} alt="test" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{a.name}</h5>
                  <p className="card-text">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
};

const AppComponent = () => {
  let { appId } = useParams();
  return (
    <div>
      <h1>{appId}</h1>
    </div>
  );
};
