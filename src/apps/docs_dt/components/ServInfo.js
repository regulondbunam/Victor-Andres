import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GetData } from "../../../web_services/docs_queries";
import { FormatDataServDesc } from "../../../web_services/structuringData";
import Table from "./Table";
import Code from "./Code";
import Example from "./ExampleOutput";

import ServInfoCSS from "./css/ServInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const buttonsTitles = [
  "Example Output",
  "NodeJS",
  "Python 3",
  "Python 2",
  "R",
  "Java",
  "Ruby",
  "Curl",
  "Wget",
];

const ServInfo = () => {
  const { pathname } = useLocation();
  const service = pathname.substr(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [active, setActive] = useState(0);

  const handleOnClick = (index) => {
    setActive(index);
  };

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

  const codeExample = {
    0: <Example {...description[0]["Ejemplo"]} />,
    1: (
      <iframe
        height="600px"
        width="100%"
        src="https://replit.com/@VictorAndaya1/ConnectionRegulonDB?lite=true"
        frameBorder="no"
      ></iframe>
    ),
    2: (
      <iframe
        height="600px"
        width="100%"
        src="https://replit.com/@VictorAndaya1/ConnectionRegulonDB-1?lite=true"
        frameBorder="no"
      ></iframe>
    ),
    3: (
      <iframe
        height="600px"
        width="100%"
        src="https://replit.com/@VictorAndaya1/ConnectionRegulonDBPython27?lite=true"
        frameBorder="no"
      ></iframe>
    ),
    4: (
      <iframe
        height="600px"
        width="100%"
        src="https://replit.com/@VictorAndaya1/ConnectionRegulonDBR?lite=true"
        frameBorder="no"
      ></iframe>
    ),
    5: (
      <iframe
        height="600px"
        width="100%"
        src="https://replit.com/@VictorAndaya1/ConnecRegulonDBJava?lite=true"
        frameBorder="no"
      ></iframe>
    ),
    6: (
      <iframe
        height="600px"
        width="100%"
        src="https://replit.com/@VictorAndaya1/ConnecRegulonDBRuby?lite=true"
        frameBorder="no"
      ></iframe>
    ),
    7: (
      <iframe
        height="600px"
        width="100%"
        src="https://replit.com/@VictorAndaya1/ConnectRegulonDBCurl?lite=true"
        frameBorder="no"
      ></iframe>
    ),
    8: (
      <iframe
        height="600px"
        width="100%"
        src="https://replit.com/@VictorAndaya1/ConnectRegulonDBWget?lite=true"
        frameBorder="no"
      ></iframe>
    ),
  };

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
        {buttonsTitles.map((type, index) => (
          <div key={type + index} className={ServInfoCSS.languageSection}>
            <button
              className={`${ServInfoCSS.languages} ${
                active === index && ServInfoCSS.active
              }`}
              onClick={() => handleOnClick(index)}
            >
              {type}
            </button>
          </div>
        ))}
      </div>
      <div>{codeExample[active]}</div>
      <hr className={ServInfoCSS.line} />
    </div>
  );
};

export default ServInfo;
