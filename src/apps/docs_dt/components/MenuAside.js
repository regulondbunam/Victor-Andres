import React from "react";
import { useQuery } from "@apollo/client";

import { GetData } from "../../../web_services/docs_queries";
import { FormatData } from "../../../web_services/structuringData";
import Menu from "./Menu";

export default function App() {
  const { loading, error, data } = useQuery(GetData());
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error...</p>;

  const dataMenu = FormatData(data);

  return <Menu {...dataMenu} />;
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
