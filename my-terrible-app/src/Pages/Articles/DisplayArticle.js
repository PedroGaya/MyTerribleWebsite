import React from "react";

export const DisplayArticle = () => {
  return (
    <div className="w-75"  style={{marginLeft: "auto", marginRight: "auto"}}>
      <h3 style={{margin: "auto"}}>Why this website exists</h3>
      <small>16/04/2020</small>
      <br></br>
      <div>
        <p style={{margin: "auto"}}>Actually, this exists for no particular reason.</p>
        <p>
          Of course, "no particular reason" being a stand-in for I wanted to make this.
          Not to say that there aren't legimate reasons for having this blog continue its existance; after all, you <i>are</i> reading this.
        </p>
      </div>
    </div>
  );
};
