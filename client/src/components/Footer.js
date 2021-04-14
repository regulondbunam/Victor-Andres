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
      <div id="script">
        <form action="">
          <strong>©1998-2021</strong>, CCG/UNAM All Rights Reserved. RegulonDB
          is free for academic/noncommercial use. <br /> RegulonDB 10.8,
          10/12/2020. Our curation knowledge is currently mapped to the GenBank
          Reference Sequence for E. coli K12. <br />
          Version NC_000913.3 GI:556503834. Send your comments to the RegulonDB
          Team
          <Link className="link-form">
            <strong> HERE</strong>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Footer;
