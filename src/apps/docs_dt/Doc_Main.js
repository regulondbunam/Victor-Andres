import React from "react";
import { Cover } from "../../ui-components/ui_components";

//Components
import MenuAside from "./components/MenuAside";
import ServsDesc from "./components/ServDesc";

//Assets
import DocCSS from "./Doc_Main.module.css";

const Documentation = () => {
  return (
    <>
      <Cover>
        <h1>Documentation</h1>
      </Cover>
      <div className={DocCSS.container}>
        <div className={DocCSS.containerMenu}>
          <MenuAside></MenuAside>
        </div>
        <div className={DocCSS.containerServices}>
          <ServsDesc></ServsDesc>
        </div>
      </div>
    </>
  );
};

export default Documentation;
