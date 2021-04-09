import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
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

const MenuAside = () => {
  const { loading, error, data } = useQuery(GET_DATA);
  if (loading) return <p>Cargando...</p>;
  if (error) {
    return <p>Error</p>;
  }
  let description = data.__type.fields;

  //console.log(description);

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

    /* nuevoObjeto[clean(x.Type.raw)][clean(x.Service.raw)].push({
      Nombre: clean(x.Name.raw),
    }); */

    nuevoObjeto[clean(x.Type.raw)][clean(x.Service.raw)].push(
      clean(x.Name.raw)
    );
  });
  console.log(nuevoObjeto);
  let i = 0;

  return (
    <div>
      {Object.keys(nuevoObjeto).map((category) => (
        <div key={i++}>
          <ul>
            <li className="category"> {category}</li>
            {Object.keys(nuevoObjeto[category]).map((service) => (
              <div key={i++}>
                <ul>
                  <li className="services"> {service}</li>
                  {nuevoObjeto[category][service].map((link) => (
                    <div key={i++} className="container-link">
                      <Link className="link" to="/">
                        {link}
                      </Link>
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
