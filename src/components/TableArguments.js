/* {
    __type(name:"Query"){
      fields{
        name
        args{
          name
          description
          type{
            name
          }
          defaultValue
        }
      }
    }
  } */

import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_ARGUMENTS = gql`
  {
    __type(name: "Query") {
      fields {
        name
        args {
          name
          description
          defaultValue
          type {
            name
          }
        }
      }
    }
  }
`;

const TableArguments = (props) => {
  //console.log(props.service);
  const { loading, error, data } = useQuery(GET_ARGUMENTS);
  if (loading) return <p>Cargando...</p>;
  if (error) {
    return <p>Error</p>;
  }
  let args = data.__type.fields;
  //console.log(args);
  let nuevoObjeto = {};
  for (let i = 0; i < args.length; i++) {
    if (!nuevoObjeto.hasOwnProperty(args[i].name)) {
      nuevoObjeto[args[i].name] = {};
    }

    for (let j = 0; j < args[i].args.length; j++) {
      if (!nuevoObjeto[args[i].name].hasOwnProperty(args[i].args[j].name)) {
        nuevoObjeto[args[i].name][args[i].args[j].name] = [];
      }

      //let descrip = args[i].args[j].description.replace(/\*+/g, "");
      nuevoObjeto[args[i].name][args[i].args[j].name].push({
        Descripcion: args[i].args[j].description,
        ValorPorDefault: args[i].args[j].defaultValue,
        Tipo: args[i].args[j].type.name,
      });
    }
  }
  //console.log(nuevoObjeto);
  let id = 100;
  return (
    <div className="table">
      <h3>Arguments</h3>
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
          {Object.keys(nuevoObjeto[props.service]).map((args) =>
            nuevoObjeto[props.service][args].map((service, index) => (
              <tr key={index}>
                <td>{args}</td>
                <td>{service.Descripcion}</td>
                <td>{service.Tipo}</td>
                <td></td>
                <td>{service.ValorPorDefault}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableArguments;

/***
 * 
 * 
 * <tr key={Object.keys(service)}>
              <td>Search</td>
              <td>{console.log(service)}</td>
              <td>{service.Tipo}</td>
              <td>Something</td>
              <td>{service.ValorPorDefault}</td>
            </tr>
 * 
 * 
 */
