import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GetData } from "../../../web_services/docs_queries";
import { FormatDataServDesc } from "../../../web_services/structuringData";
import Table from "./Table";
import Code from "./Code";

import ServInfoCSS from "./css/ServInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const ServInfo = () => {
  const { pathname } = useLocation();
  const service = pathname.substr(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { loading, error, data } = useQuery(GetData());
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error...</p>;

  const DescService = FormatDataServDesc(data);

  const description = DescService.filter((e) => {
    if (e.Nombre == service) return e.Descripcion;
  });

  let url =
    "http://132.248.220.201:4001/graphql?query=" +
    encodeURI(description[0]["Ejemplo"]);

  return (
    <div className={ServInfoCSS.serviceInfo}>
      <div className={ServInfoCSS.tryContainer}>
        <Link to="/" className={ServInfoCSS.tryLink}>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            style={{ fontSize: "1rem" }}
          />
        </Link>
      </div>
      <h3 className={ServInfoCSS.titles}>{service}</h3>
      <p className={ServInfoCSS.description}>{description[0]["Descripcion"]}</p>
      <hr className={ServInfoCSS.line} />
      <Table service={service} />
      <h3 className={ServInfoCSS.titles}>Query Example</h3>
      <Code {...description[0]["Ejemplo"]} />
      <div className={ServInfoCSS.tryContainer}>
        <a
          rel="nofollow noopener noreferrer"
          href={url}
          target="_blank"
          className={ServInfoCSS.tryLink}
        >
          Try it now
        </a>
      </div>
      <hr className={ServInfoCSS.line} />
      <h3 className={ServInfoCSS.titles}>Languages</h3>
      <div className={ServInfoCSS.buttons}>
        <div className={ServInfoCSS.languageSection}>
          <button className={ServInfoCSS.languages}>Example Output</button>
        </div>
        <div className={ServInfoCSS.languageSection}>
          <button className={ServInfoCSS.languages}>NodeJS</button>
        </div>
        <div className={ServInfoCSS.languageSection}>
          <button className={ServInfoCSS.languages}>Python 2</button>
        </div>
        <div className={ServInfoCSS.languageSection}>
          <button className={ServInfoCSS.languages}>Python 3</button>
        </div>
        <div className={ServInfoCSS.languageSection}>
          <button className={ServInfoCSS.languages}>R</button>
        </div>
      </div>

      <hr className={ServInfoCSS.line} />
    </div>
  );
};

export default ServInfo;
