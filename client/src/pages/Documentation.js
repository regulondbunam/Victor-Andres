import React from "react";

import Menu from "./../components/MenuAside";
import ServiceInfo from "./../components/ServiceInfo";

import "./css/Documentation.css";

const Documentation = () => {
  return (
    <div>
      <div className="container">
        <div className="menu">
          <Menu></Menu>
        </div>
        <div className="service-info">
          <ServiceInfo></ServiceInfo>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
