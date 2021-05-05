import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GetData } from "../../../web_services/docs_queries";
import { FormatDataDesc } from "../../../web_services/structuringData";

import ServDescCSS from "./css/ServDesc.module.css";
//ServDescs
const ServDescs = () => {
  const { loading, error, data } = useQuery(GetData());
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error...</p>;

  const DescServices = FormatDataDesc(data);

  return (
    <>
      <h2 className={ServDescCSS.title}>RegulonDB GraphQL Web Services</h2>

      {Object.keys(DescServices).map((category, i) => (
        <div key={i} id={category}>
          <h3 className={ServDescCSS.categorys}>{category}</h3>
          {Object.keys(DescServices[category]).map((service, j) => (
            <div
              key={j}
              className={ServDescCSS.containerServiceCategory}
              id={service}
            >
              <h4 className={ServDescCSS.serviceCategory}>{service}</h4>
              <p className={ServDescCSS.descriptionServiceCategory}></p>
              {DescServices[category][service].map((ObjectService, k) => (
                <div
                  key={k}
                  className={ServDescCSS.containerService}
                  id={ObjectService.Nombre}
                >
                  <Link
                    to={{
                      pathname: ObjectService.Nombre,
                      state: { Object: ObjectService },
                    }}
                    className={ServDescCSS.service}
                  >
                    {ObjectService.Nombre}
                  </Link>
                  <p className={ServDescCSS.DescriptionService}>
                    {ObjectService.Descripcion}
                  </p>
                </div>
              ))}
              <hr className={ServDescCSS.line} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

function clean(str) {
  var str2 = str.replace(/\n|\r/g, "");
  return str2;
}

export default ServDescs;
