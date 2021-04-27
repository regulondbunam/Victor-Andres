import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GetData } from "../../../web_services/docs_queries";
import { FormatData } from "../../../web_services/structuringData";

import SvcsDescr from "./css/SvcsDescr.module.css";

const ServiceInfo = () => {
  const { loading, error, data } = useQuery(GetData());
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  const DescServices = FormatData(data);

  return (
    <>
      <div>
        <h2 className={SvcsDescr.title}>RegulonDB GraphQL Web Services</h2>

        {Object.keys(DescServices).map((category, i) => (
          <div key={i} id={category}>
            <h3 className={SvcsDescr.categorys}>{category}</h3>
            {Object.keys(DescServices[category]).map((service, j) => (
              <div
                key={j}
                className={SvcsDescr.containerServiceCategory}
                id={service}
              >
                <h4 className={SvcsDescr.serviceCategory}>{service}</h4>
                <p className={SvcsDescr.descriptionServiceCategory}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit numquam laboriosam soluta nulla vero quidem
                  consectetur accusamus recusandae. Similique perferendis,
                  voluptates vel nobis eligendi nihil! In ex totam maxime
                  quisquam?
                </p>
                {DescServices[category][service].map((ObjectService, k) => (
                  <div
                    key={k}
                    className={SvcsDescr.containerService}
                    id={ObjectService.Nombre}
                  >
                    <Link
                      to={{
                        pathname: ObjectService.Nombre,
                        state: { Object: ObjectService },
                      }}
                      className={SvcsDescr.service}
                    >
                      {ObjectService.Nombre}
                    </Link>
                    <p className={SvcsDescr.DescriptionService}>
                      {ObjectService.Descripcion}
                    </p>
                  </div>
                ))}
                <hr className={SvcsDescr.line} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

function clean(str) {
  var str2 = str.replace(/\n|\r/g, "");
  return str2;
}

export default ServiceInfo;
