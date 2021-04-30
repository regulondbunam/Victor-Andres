import React from "react";
import { useQuery } from "@apollo/client";

import { FormatData } from "./../../../web_services/structuringData";
import { GetData } from "../../../web_services/docs_queries";

const Menu = (dataMenu) => {
  return dataMenu.menuElements.map((e) => {
    return <RecursiveComponent {...e} key={e.id} />;
  });
};

const RecursiveComponent = ({ id, title, sons }) => {
  const hasChildren = (children) => children && children.length;

  return (
    <ul>
      <li key={id}>
        <button>{title}</button>
      </li>
      {hasChildren(sons) &&
        sons.map((item) => (
          <li key={item.id}>
            {hasChildren(item.sons) == null && (
              <ol>
                <button href={item.path}>{item.title} (link)</button>
              </ol>
            )}

            {hasChildren(item.sons) && (
              <RecursiveComponent key={item.id} {...item} />
            )}
          </li>
        ))}
    </ul>
  );
};

export default function App() {
  const { loading, error, data } = useQuery(GetData());
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error...</p>;

  const dataMenu = FormatData(data);
  return <Menu {...dataMenu} />;
}
