import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="spacer"></div>
      <div className="logos">
        <Link to="" className="separator logo_1"></Link>
        <Link to="" className="separator logo_2"></Link>
        <Link to="" className="separator logo_3"></Link>
        <Link to="" className="separator logo_4"></Link>
        <Link to="" className="links">
          Contact us
        </Link>
        <Link to="" className="links">
          Funding
        </Link>
        <Link to="" className="links">
          Terms conditions
        </Link>
        <Link to="" className="links">
          How to cite
        </Link>
      </div>
    </div>
  );
};

export default Footer;
