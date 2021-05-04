import React, { useEffect } from "react";
import { Cover } from "../../ui-components/ui_components";
import { useHistory } from "react-router-dom";

//Components
import MenuAside from "./components/MenuAside";
import ServsDesc from "./components/ServDesc";
import ServInfo from "./components/ServInfo";

//Assets
import DocCSS from "./Doc_Main.module.css";

const Documentation = () => {
  let history = useHistory();
  let url = history.location.pathname;

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
          {url == "/" ? <ServsDesc /> : <ServInfo />}
        </div>
      </div>
    </>
  );
};

export default Documentation;
