import React from "react";
import "./css/ServiceInfo.css";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import md2json from "md-2-json";

const GET_DESCRIPTION = gql`
  {
    __type(name: "Query") {
      fields {
        description
      }
    }
  }
`;

const ServiceInfo = () => {
  const { loading, error, data } = useQuery(GET_DESCRIPTION);
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
  console.log(nuevoObjeto);
  let i = 0;
  return (
    <div>
      <div className="container-info">
        <h2>RegulonDB GraphQL Web Services</h2>

        {Object.keys(nuevoObjeto).map((category) => (
          <div key={i++} id={category}>
            <h3 className="categorys">{category}</h3>
            {Object.keys(nuevoObjeto[category]).map((service) => (
              <div
                key={i++}
                className="container-service-category"
                id={service}
              >
                <div className="container-service-des"></div>
                <h4 className="service-category">{service}</h4>
                <p className="description-service-category">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sapiente cum sint nesciunt pariatur voluptatibus laborum
                  maxime, quibusdam assumenda, perspiciatis laudantium ad
                  expedita? Quasi expedita pariatur voluptates velit, porro et
                  qui?
                </p>
                {nuevoObjeto[category][service].map((ObjectService) => (
                  <div
                    key={i++}
                    className="container-service"
                    id={ObjectService.Nombre}
                  >
                    <Link
                      to={{
                        pathname: ObjectService.Nombre,
                        state: { Object: ObjectService },
                      }}
                      className="service"
                    >
                      {ObjectService.Nombre}
                    </Link>
                    <p>{ObjectService.Descripcion}</p>
                  </div>
                ))}
                <hr className="line" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

function clean(str) {
  var str2 = str.replace(/\n|\r/g, "");
  return str2;
}

export default ServiceInfo;
