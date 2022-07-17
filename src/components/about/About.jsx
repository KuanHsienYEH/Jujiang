import React from "react";
import "./about.css";
import selfy from "../../common/images/selfy.jpg";

function about() {
  return (
    <div className="about-me">
      <div className="intoduction">
        <h3>Hi ! I'm Sam</h3>
        <h2>software engineer</h2>
        <p>
          A highly motivated professional with more than 3 years of working
          experience in the fields of E-Commerce web development.
        </p>
        {/* <div className="btn">
          <a href="/">
            <p>skill-tree</p>
          </a>
          <a className="outline" href="/">
            <p>working exprience</p>
          </a>
        </div> */}
      </div>
      <img alt="selfy" src={selfy} />
    </div>
  );
}

export default about;
