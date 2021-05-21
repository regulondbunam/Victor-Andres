import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import CodeCSS from "./css/Code.module.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
      <SyntaxHighlighter
        lineProps={{ style: { paddingBottom: 8 } }}
        wrapLines={true}
        showLineNumbers={true}
        language={Code[1]}
        customStyle={{
          overflow: "auto",
          maxHeight: "500px",
          background: "#dce7ed",
          fontSize: ".9rem",
          borderRadius: "5px",
        }}
        style={a11yLight}
      >
        {Code[0]}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
