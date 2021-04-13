import React from "react";
import "./css/ServiceInfo.css";
import MenuAside from "./MenuAside";
import { Link } from "react-router-dom";

const ServiceInfo = () => {
  return (
    <div className="container">
      <div className="menu">
        <MenuAside></MenuAside>
      </div>
      <div className="container-info">
        <h2>RegulonDB GraphQL Web Services</h2>
        <h3 className="categorys">Data</h3>
        <div className="container-service-category">
          <div className="container-service-des"></div>
          <h4 className="service-category">Gene</h4>
          <p className="description-service-category">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            cum sint nesciunt pariatur voluptatibus laborum maxime, quibusdam
            assumenda, perspiciatis laudantium ad expedita? Quasi expedita
            pariatur voluptates velit, porro et qui?
          </p>
          <div className="container-service">
            <Link to="/" className="service">
              getGenesBy
            </Link>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              sit eaque ex inventore explicabo, quas.
            </p>
            <Link to="/" className="service">
              getAllGenes
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              voluptatum accusantium harum nulla laboriosam, enim ad, quod
              laudantium natus.
            </p>
            <hr className="line" />
          </div>
        </div>
        <div className="container-service-category">
          <h4 className="service-category">Operon</h4>
          <p className="description-service-category">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, ab quasi in repudiandae excepturi voluptatibus quisquam
            sequi autem! Voluptatum eius perferendis similique soluta odio
            laboriosam temporibus nulla corrupti blanditiis autem!
          </p>
          <div className="container-service">
            <Link to="/" className="service">
              getOperonBy
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              magni. Explicabo accusantium blanditiis earum.
            </p>
            <Link to="/" className="service">
              getAllOperon
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              voluptatum accusantium harum nulla laboriosam, enim ad, quod
              laudantium natus.
            </p>
            <hr className="line" />
          </div>
        </div>

        <h3 className="categorys">Tools</h3>
      </div>
    </div>
  );
};

export default ServiceInfo;
