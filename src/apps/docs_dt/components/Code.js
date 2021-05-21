import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import CodeCSS from "./css/Code.module.css";

const Code = (Code) => {
  const [copy, setCopy] = useState(false);

  return (
    <div className={CodeCSS.container}>
      <div className={CodeCSS.buttonContainer}>
        <button
          className={CodeCSS.btnCopy}
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
      </div>
      <pre className={CodeCSS.containerCode}>
        <code className={CodeCSS.code}>
          <ol className={CodeCSS.list}>
            {Code[0].split("\n").map((e, i) => (
              <li key={i}>
                <span className={CodeCSS.span}>{e}</span>
              </li>
            ))}
          </ol>
        </code>
      </pre>
    </div>
  );
};

export default Code;
