import React, { useState } from "react";

import { SampleArticle } from "./Pages/SampleArticle.js";
import { SidebarContent } from "./Sidebar/SidebarContent.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { btnCSS, sidebarBtnCSS } from "./StyleSheet.js";

export const BasePage = () => {
  const [toggled, setToggled] = useState(true);

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
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
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </div>
          </div>
        ) : null}

        {/* Content */}
        <div
          className="col col-m-8"
          style={{
            margin: "0",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* Navbar */}
          <div className="row">
            <nav
              className="navbar"
              style={{ postion: "fixed", width: "100%", background: "#777777" }}
            >
              <h2 className="ml-auto">Pedro Gaya</h2>
              {toggled ? null : (
                <button
                  className="btn mr-auto"
                  style={{ background: "#777777" }}
                  onClick={() => setToggled(true)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              )}
            </nav>
          </div>

          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <SampleArticle />
          </div>
        </div>
      </div>
    </div>
  );
};
