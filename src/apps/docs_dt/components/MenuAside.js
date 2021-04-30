import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useQuery } from "@apollo/client";

import { GetData } from "../../../web_services/docs_queries";
import { FormatData } from "../../../web_services/structuringData";

import MenuCSS from "./css/MenuAside.module.css";

const MenuAside = () => {
  const { loading, error, data } = useQuery(GetData());
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error...</p>;

  const dataMenu = FormatData(data);

  //console.log(dataMenu);
  return (
    <div className={MenuCSS.sideMenu}>
      {Object.keys(dataMenu).map((category, i) => (
        <div key={i}>
          <ul className={MenuCSS.list}>
            <Link
              className={MenuCSS.category}
              activeClass={MenuCSS.active}
              to={category}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {category}
            </Link>
            {/* <MenuAside nivel1={category}/> */}
            {Object.keys(dataMenu[category]).map((service, j) => (
              <div key={j}>
                <ul className={MenuCSS.list}>
                  <Link
                    className={MenuCSS.services}
                    activeClass={MenuCSS.active}
                    to={service}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {service}
                  </Link>
                  {/* <MenuAside nivel2={service} /> */}
                  {dataMenu[category][service].map((link, k) => (
                    <div key={i++} className={MenuCSS.containerLink}>
                      <NavLink
                        className={MenuCSS.link}
                        activeStyle={{
                          color: "#fff",
                          backgroundColor: "#376b8c",
                          padding: "1px 4px",
                          borderRadius: "3px",
                        }}
                        exact
                        to={{
                          pathname: `/${link.Nombre}`,
                          state: { Object: link },
                        }}
                      >
                        {link.Nombre}
                      </NavLink>
                      {/* <MenuAside nivel3={link} /> */}
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuAside;

/* Prueba para corroborar que sea dinamico
"""
  #### Type
  Set
  #### Service
  Example
  #### Name
  getExample
  #### Description
  Example
  """
  getExample: [overviewInfoType]

*/
