import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link, NavLink } from "react-router-dom";
import { Link as Smooth } from "react-scroll";
import md2json from "md-2-json";

import "./css/MenuAside.css";

const GET_DATA = gql`
  {
    __type(name: "Query") {
      fields {
        description
      }
    }
  }
`;

const MenuAside = (props) => {
  const { loading, error, data } = useQuery(GET_DATA);
  if (loading) return <p>Cargando...</p>;
  if (error) {
    return <p>Error</p>;
  }
  let description = data.__type.fields;

  let arreglo = [];

  for (let i = 0; i < description.length; i++) {
    let descrip = description[i].description.replace(/#+/g, "#");

    let json = md2json.parse(descrip);

    arreglo.push(json);
  }

  let nuevoObjeto = {};
  arreglo.forEach((x) => {
    if (!nuevoObjeto.hasOwnProperty(clean(x.Type.raw))) {
      nuevoObjeto[clean(x.Type.raw)] = {};
    }

    if (
      !nuevoObjeto[clean(x.Type.raw)].hasOwnProperty([clean(x.Service.raw)])
    ) {
      nuevoObjeto[clean(x.Type.raw)][clean(x.Service.raw)] = [];
    }

    nuevoObjeto[clean(x.Type.raw)][clean(x.Service.raw)].push({
      Nombre: clean(x.Name.raw),
      Descripcion: clean(x.Description.raw),
    });
  });
  let i = 0;

  return (
    <div className="side-menu">
      {Object.keys(nuevoObjeto).map((category) => (
        <div key={i++}>
          <ul>
            <Smooth
              className="category"
              activeClass="active"
              to={category}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {category}
            </Smooth>
            {Object.keys(nuevoObjeto[category]).map((service) => (
              <div key={i++}>
                <ul>
                  <Smooth
                    className="services"
                    activeClass="active"
                    to={service}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {service}
                  </Smooth>
                  {nuevoObjeto[category][service].map((link) => (
                    <div key={i++} className="container-link">
                      <NavLink
                        className="link"
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

function clean(str) {
  var str2 = str.replace(/\n|\r/g, "");
  return str2;
}

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
