import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import CodeCSS from "./css/Code.module.css";

const Code = (Code) => {
  const [copy, setCopy] = useState(false);

  return (
    <div className={CodeCSS.container}>
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
      <pre className={CodeCSS.containerCode}>
        <code className={CodeCSS.code}>
          {Code[0].split("\n").map((e, i) => (
            <span className={CodeCSS.span} key={i}>
              {e}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default Code;
