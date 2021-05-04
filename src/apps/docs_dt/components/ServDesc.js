import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GetData } from "../../../web_services/docs_queries";
import { FormatDataDesc } from "../../../web_services/structuringData";

import ServDesc from "./css/ServDesc.module.css";
//ServDescs
const ServiceInfo = () => {
  const { loading, error, data } = useQuery(GetData());
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error...</p>;

  const DescServices = FormatDataDesc(data);

  return (
    <>
      <h2 className={ServDesc.title}>RegulonDB GraphQL Web Services</h2>

      {Object.keys(DescServices).map((category, i) => (
        <div key={i} id={category}>
          <h3 className={ServDesc.categorys}>{category}</h3>
          {Object.keys(DescServices[category]).map((service, j) => (
            <div
              key={j}
              className={ServDesc.containerServiceCategory}
              id={service}
            >
              <h4 className={ServDesc.serviceCategory}>{service}</h4>
              <p className={ServDesc.descriptionServiceCategory}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                iure voluptatibus perspiciatis ut qui fugit quis cum odio vitae
                ex.
              </p>
              {DescServices[category][service].map((ObjectService, k) => (
                <div
                  key={k}
                  className={ServDesc.containerService}
                  id={ObjectService.Nombre}
                >
                  <Link
                    to={{
                      pathname: ObjectService.Nombre,
                      state: { Object: ObjectService },
                    }}
                    className={ServDesc.service}
                  >
                    {ObjectService.Nombre}
                  </Link>
                  <p className={ServDesc.DescriptionService}>
                    {ObjectService.Descripcion}
                  </p>
                </div>
              ))}
              <hr className={ServDesc.line} />
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

export default ServiceInfo;
