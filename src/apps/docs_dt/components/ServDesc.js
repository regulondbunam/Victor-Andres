import React from "react";
import { useQuery } from "@apollo/client";

import { GetData } from "../../../web_services/docs_queries";
import { FormatDataDesc } from "../../../web_services/structuringData";

import TableServ from "../components/TableServ";

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
              <TableServ service={DescServices[category][service]} />
            </div>
          ))}
          <br />
        </div>
      ))}
    </>
  );
};

export default ServDescs;
