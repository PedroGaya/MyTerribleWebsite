import React from "react";

import { btnCSS } from "../StyleSheet.js";

export const SidebarContent = () => {
  return (
    <div style={{ marginRight: "auto", marginLeft: "auto" }}>
      <h3>About</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur posuere est, vel ultricies erat cursus at. Sed est ante,
        imperdiet vitae luctus a, finibus quis ex.
      </p>
      <div style={{display: "flex", justifyContent: "center"}}>
        <button className="btn btn-secondary" style={btnCSS}>
          <strong>Articles</strong>
        </button>
        <hr />
        <button className="btn btn-secondary" style={btnCSS}>
          <strong>Apps</strong>
        </button>
      </div>
    </div>
  );
};
