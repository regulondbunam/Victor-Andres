import React from "react";
import { Link } from "react-router-dom";

import TableCSS from "./css/TableServ.module.css";
import Table from "./Table";

const TableServ = (props) => {
  console.log(props.service);
  return (
    <div className={TableCSS.container}>
      <table className={TableCSS.table}>
        <thead className={TableCSS.containerText}>
          <th className={TableCSS.text}>Query</th>
          <th>Description</th>
        </thead>
        <tbody>
          {props.service.map((ObjectService, k) => (
            <tr className={TableCSS.containerText}>
              <td className={TableCSS.text}>
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
              <td>
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
