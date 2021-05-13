import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { useQuery, gql } from "@apollo/client";

import ExampleCSS from "./css/Example.module.css";

const ExampleOutput = (Code) => {
  const [copy, setCopy] = useState(false);

  const query = gql`
    ${Code[0].toString()}
  `;

  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error...</p>;

  let codeResult = [];
  codeResult.push(JSON.stringify(data, null, "\t"));
  return (
    <div className={ExampleCSS.container}>
      <button
        className={ExampleCSS.btnCopy}
        onClick={() => navigator.clipboard.writeText(Code[0])}
        data-tip
        data-for="copyTip"
      >
        Copy
      </button>
      <ReactTooltip
        id="copyTip"
        place="top"
        effect="solid"
        backgroundColor="#32617d"
      >
        {!copy ? "Copy to clipboard" : "Copied!"}
      </ReactTooltip>
      <pre className={ExampleCSS.containerCode}>
        <code className={ExampleCSS.code}>
          {codeResult[0].split("\n").map((e, i) => (
            <span className={ExampleCSS.span} key={i}>
              {e}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default ExampleOutput;
