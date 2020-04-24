import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { DisplayArticle } from "./DisplayArticle.js";
import { ARTICLES } from "./ARTICLES.js";

export const ArticlesPage = () => {
  let { path, url } = useRouteMatch();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Switch>
        <Route exact path={`${path}/:articleId`}>
          <ArticleComponent />
        </Route>
        <Route exact path={"/articles"}>
          <div className="col" style={{ textAlign: "center" }}>
            <DisplayArticle />
            <hr></hr>
            {showMore ? (
              <div className="card-columns">
                {ARTICLES.map((a) => (
                  <div className="card" key={a.id}>
                    <Link to={`${url}/${a.id}`}>
                      <img
                        className="card-img-top"
                        src={a.imageUrl}
                        alt="test"
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{a.name}</h5>
                      <p className="card-text">{a.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <MoreArticles onShowMore={setShowMore} />
            )}
          </div>
        </Route>
      </Switch>
    </>
  );
};

const MoreArticles = (props) => {
  const secondArticle = ARTICLES[ARTICLES.length - 2];
  const oldArticle = ARTICLES[ARTICLES.length - 3];
  const olderArticle = ARTICLES[ARTICLES.length - 4];

  return (
    <div className="card-deck w-60">
      {secondArticle !== undefined ? <div className="card">
        <Link to={`articles/${secondArticle.id}`}>
          <img
            className="card-img-top"
            src={secondArticle.imageUrl}
            alt="EVERY ALT IS NAMED 'TEST'"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{secondArticle.name}</h5>
          <p className="card-text">{secondArticle.description}</p>
        </div>
      </div> : null}

      {oldArticle !== undefined ? <div className="card">
        <Link to={`articles/${oldArticle.id}`}>
          <img
            className="card-img-top"
            src={oldArticle.imageUrl}
            alt="EVERY ALT IS NAMED 'TEST'"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{oldArticle.name}</h5>
          <p className="card-text">{oldArticle.description}</p>
        </div>
      </div> : null}

      {olderArticle !== undefined ? <div className="card">
        <Link to={`articles/${olderArticle.id}`}>
          <img
            className="card-img-top"
            src={olderArticle.imageUrl}
            alt="EVERY ALT IS NAMED 'TEST'"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{olderArticle.name}</h5>
          <p className="card-text">{olderArticle.description}</p>
        </div>
      </div> : null}

      <div
        className="card text-white bg-secondary"
        onClick={() => props.onShowMore(true)}
      >
        <div
          className="card-body"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5 className="card-title">More Articles</h5>
        </div>
      </div>
    </div>
  );
};

const ArticleComponent = () => {
  let { articleId } = useParams();
  const result = require(`./articlesComponents/${articleId}`)

  return (
    <div>
      {result.article}
    </div>
  );
};