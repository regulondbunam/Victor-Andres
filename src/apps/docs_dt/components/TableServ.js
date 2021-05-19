import React from "react";
import { Link } from "react-router-dom";

import TableCSS from "./css/TableServ.module.css";

const TableServ = (props) => {
  return (
    <div className={TableCSS.container}>
      <table className={TableCSS.table}>
        <thead>
          <tr className={TableCSS.containerText}>
            <th className={TableCSS.query}>Query</th>
            <th className={TableCSS.description}>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.service.map((ObjectService, k) => (
            <tr key={k} className={TableCSS.containerText}>
              <td className={TableCSS.query}>
                <Link
                  to={{
                    pathname: ObjectService.Nombre,
                    state: { Object: ObjectService },
                  }}
                  className={TableCSS.service}
                >
                  {ObjectService.Nombre}
                </Link>
              </td>
              <td className={TableCSS.description}>
                <p className={TableCSS.DescriptionService}>
                  {ObjectService.Descripcion}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableServ;
