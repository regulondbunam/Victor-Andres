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
              <a
                rel="nofollow noopener noreferrer"
                href="http://localhost:4001/graphql/?query=%7B%0A%20%20getAllGenes%7B%0A%20%20%20%20data%7B%0A%20%20%20%20%20%20gene%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20products%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
                target="_blank"
                className="active_b"
              >
                Documentation
              </a>
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
