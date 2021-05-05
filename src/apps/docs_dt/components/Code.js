import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import CodeCSS from "./css/Code.module.css";

const Code = (Code) => {
  const [copy, setCopy] = useState(false);

  /* const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(Code[0]);
    setCopy((copy) => true);
  }; */

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

/* const container = {
  backgroundColor: "#dce7ed",
  borderRadius: "5px",
  color: "#32617d",
};

const containerCode = {
  padding: "10px 0",
  display: "flex",
  alignItems: "center",
};

const code = {
  display: "flex",
  flexDirection: "column",
  fontSize: "1.3rem",
  paddingLeft: "10px",
};

const btnCopy = {
  float: "right",
  border: "2px solid #32617d",
  background: "none",
  fontSize: "1rem",
  margin: "20px",
  padding: "5px 10px",
  borderRadius: "5px",
  cursor: "pointer",
  color: "#32617d",
}; */

export default Code;
