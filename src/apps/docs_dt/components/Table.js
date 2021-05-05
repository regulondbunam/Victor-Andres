import React from "react";
import { useQuery } from "@apollo/client";

import { GetArguments } from "../../../web_services/docs_queries";
import { FormatDataTable } from "../../../web_services/structuringData";

import TableCSS from "./css/Table.module.css";

const Table = (props) => {
  const { loading, error, data } = useQuery(GetArguments());
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error...</p>;

  const Args = FormatDataTable(data);
  //console.log(Args);
  return (
    <div className={TableCSS.table}>
      <h3 className={TableCSS.title}>Arguments</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Required</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(Args[props.service]).map((args) =>
            Args[props.service][args].map((service, index) => (
              <tr key={index}>
                <td>{args}</td>
                <td>{service.Descripcion}</td>
                <td>{service.Tipo}</td>
                <td>Not required</td>
                <td>
                  {service.ValorPorDefault == null
                    ? "Not defined"
                    : service.ValorPorDefault}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
