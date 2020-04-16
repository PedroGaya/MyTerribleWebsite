import React from "react";

export const DisplayArticle = () => {
  return (
    <div>
      <h3 style={{margin: "auto"}}>My most recent article</h3>
      <small>14/04/2020</small>
      <br></br>
      <div>
        <p style={{margin: "auto"}}>This is a short preview of my most recent article.</p>
        <p>
          As a sample of what's going to be here, here are bullet points with
          some of my favorite anime!
        </p>
        <ul style={{ alignSelf: "center", listStylePosition: "inside" }}>
          <li>Tengen Toppa Gurren Lagann</li>
          <li>Hunter x Hunter</li>
          <li>The Monogatari Series</li>
        </ul>
      </div>
    </div>
  );
};
