import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Menu from "./../components/MenuAside";
import Table from "./../components/TableArguments";

import "./css/ServiceInformation.css";

const ServiceInformation = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let service = props.history.location.state.Object;
  //console.log(props.history.location.state);
  return (
    <div>
      <div className="container">
        <div className="menu">
          <Menu></Menu>
        </div>
        <div className="service-info">
          <h3 className="title-service">{service.Nombre}</h3>
          <p>{service.Descripcion}</p>
          <hr />
          <Table service={service.Nombre}></Table>
          <h3>Query Example</h3>
          <div className="query-code"></div>
          <h3>Parameters</h3>
          <div className="parameters-code"></div>
          <div className="try-container">
            <a
              rel="nofollow noopener noreferrer"
              href="http://localhost:4001/graphql/?query=%7B%0A%20%20getAllGenes%7B%0A%20%20%20%20data%7B%0A%20%20%20%20%20%20gene%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20products%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
              target="_blank"
              className="try"
            >
              Try it now
            </a>
          </div>
          <hr />
          <h3>Languages</h3>
          <div className="buttons">
            <div className="languages-section">
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="try"
              >
                Example Output
              </a>
            </div>
            <div className="languages-section">
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="try"
              >
                Node
              </a>
            </div>
            <div className="languages-section">
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="try"
              >
                Python 2
              </a>
            </div>
            <div className="languages-section">
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="try"
              >
                Python 3
              </a>
            </div>
            <div className="languages-section">
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="try"
              >
                R
              </a>
            </div>
          </div>

          <div className="languages-code"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInformation;
