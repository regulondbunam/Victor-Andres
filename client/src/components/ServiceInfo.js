import React from "react";
import "./css/ServiceInfo.css";
import MenuAside from "./MenuAside";

const ServiceInfo = () => {
  return (
    <div className="container">
      <div className="menu">
        <MenuAside></MenuAside>
      </div>
      <div className="container-info">
        <h2>RegulonDB GraphQL Web Services</h2>
      </div>
    </div>
  );
};

export default ServiceInfo;
