import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__menu">
          <ul>
            <li
              className={props.active === "index" ? "navbar__item--active" : ""}
            >
              <Link to="/">Get BEM</Link>
            </li>
            <li
              className={props.active === "intro" ? "navbar__item--active" : ""}
            >
              <Link to="/introduction">Introduction</Link>
            </li>
            <li
              className={
                props.active === "naming" ? "navbar__item--active" : ""
              }
            >
              <Link to="/naming">Naming</Link>
            </li>
            <li
              className={props.active === "faq" ? "navbar__item--active" : ""}
            >
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
