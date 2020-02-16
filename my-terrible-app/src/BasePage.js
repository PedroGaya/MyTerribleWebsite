import React, { useState } from "react";

import { SampleArticle } from "./Pages/SampleArticle.js";
import { SidebarContent } from "./Sidebar/SidebarContent.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { btnCSS, sidebarBtnCSS } from "./StyleSheet.js";

export const BasePage = () => {
  const [toggled, setToggled] = useState(true);

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* Navbar */}
        <nav className="navbar navbar-light bg-light" style={{ width: "100%" }}>
          <div>
            <h2>Pedro Gaya</h2>
          </div>
          {toggled ? null : (
            <button className="btn btn-light" onClick={() => setToggled(true)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
        </nav>

        {/* Sidebar */}
        {toggled ? (
          <div className="col-sm-3 sticky-top" id="sidebar">
            <SidebarContent />
            <div style={sidebarBtnCSS}>
              <button
                className="btn btn-light"
                style={btnCSS}
                onClick={() => setToggled(false)}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        ) : null}

        {/* Content */}
        <div className="col col-sm-8" style={{ margin: "auto" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <SampleArticle />
          </div>
        </div>
      </div>
    </div>
  );
};
