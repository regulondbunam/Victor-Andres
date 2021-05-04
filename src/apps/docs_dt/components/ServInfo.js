import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Table from "./Table";

import ServInfoCSS from "./css/ServInfo.module.css";

const ServInfo = () => {
  const { pathname } = useLocation();
  const service = pathname.substr(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={ServInfoCSS.serviceInfo}>
      <div className={ServInfoCSS.tryContainer}>
        <Link to="/" className={ServInfoCSS.tryLink}>
          Regresar
        </Link>
      </div>
      <h3 className={ServInfoCSS.titles}>getAllGenes</h3>
      <p className={ServInfoCSS.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        mollitia quidem nemo! Temporibus labore, molestias eaque architecto
        dolor nulla, facilis dicta sapiente a alias animi. Unde odit corrupti
        amet laborum.
      </p>
      <hr className={ServInfoCSS.line} />
      <Table service={service} />
      <h3 className={ServInfoCSS.titles}>Query Example</h3>
      <div className={ServInfoCSS.codeExample}></div>
      <h3 className={ServInfoCSS.titles}>Parameters</h3>
      <div className={ServInfoCSS.codeExample}></div>
      <div className={ServInfoCSS.tryContainer}>
        <a
          rel="nofollow noopener noreferrer"
          href="http://localhost:4001/graphql/?query=%7B%0A%20%20getAllGenes%7B%0A%20%20%20%20data%7B%0A%20%20%20%20%20%20gene%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20products%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
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
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            className={ServInfoCSS.languages}
          >
            Example Output
          </a>
        </div>
        <div className={ServInfoCSS.languageSection}>
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            className={ServInfoCSS.languages}
          >
            Node
          </a>
        </div>
        <div className={ServInfoCSS.languageSection}>
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            className={ServInfoCSS.languages}
          >
            Python 2
          </a>
        </div>
        <div className={ServInfoCSS.languageSection}>
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            className={ServInfoCSS.languages}
          >
            Python 3
          </a>
        </div>
        <div className={ServInfoCSS.languageSection}>
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            className={ServInfoCSS.languages}
          >
            R
          </a>
        </div>
      </div>

      <div className={ServInfoCSS.codeExample}></div>
      <hr className={ServInfoCSS.line} />
    </div>
  );
};

export default ServInfo;
