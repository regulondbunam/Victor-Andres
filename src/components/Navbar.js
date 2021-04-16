import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div id="header">
      <div id="logo">
        <Link to="/" className="logo_style" />
      </div>
      <div id="espacio_pestanas">
        <div id="pestanas">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Tools</Link>
            </li>
            <li>
              <Link to="/">Overviews</Link>
            </li>
            <li>
              <Link to="/">Download Set</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
            <li className="active_a">
              <Link to="/" className="active_b">
                Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="pageTitle">
        <p className="title">Documentation</p>
      </div>
    </div>
  );
};

export default Navbar;
