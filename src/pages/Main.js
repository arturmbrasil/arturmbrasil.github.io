import React, { useState } from "react";
import "./Main.css";

var { SocialIcon } = require("react-social-icons");

export default function Main({ history }) {
  return (
    <div className="container">
      <div className="card">
        <img
          className="avatar"
          src="https://avatars3.githubusercontent.com/u/22780735?v=4"
          alt="John"
        />
        <h1 className="name">ARTUR BRASIL</h1>
        <p className="title">MOBILE DEVELOPER</p>
        <br />
        <p className="icons">
          <SocialIcon
            target="_blank"
            url="http://linkedin.com/in/arturmbrasil"
            bgColor="#19f6e8"
          />
          <SocialIcon
            target="_blank"
            url="http://github.com/arturmbrasil"
            bgColor="#19f6e8"
          />
          <SocialIcon url="mailto:arturmbrasil@hotmail.com" bgColor="#19f6e8" />
        </p>
      </div>
    </div>
  );
}
