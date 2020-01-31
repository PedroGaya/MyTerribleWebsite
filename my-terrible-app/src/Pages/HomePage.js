import React from "react";
import { AboutMe } from "../Components/aboutme/aboutme";
import { Welcome } from "../Components/Articles/Welcome";
import { Featured } from "../Components/Articles/Featured"
 
export function HomePage() {
  return (
    <div class="container">
      <div class="row">
        <div class="col col-lg-3" style={{ "margin-left": "-100px" }}>
          <AboutMe />
        </div>
        <div class="col">
          <Welcome />
          <Featured />
        </div>
      </div>
    </div>
  );
}
