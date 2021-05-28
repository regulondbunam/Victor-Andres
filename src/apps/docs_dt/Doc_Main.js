import React, { useEffect } from "react";
import { Cover } from "../../ui-components/ui_components";
import { useHistory } from "react-router-dom";

//Components
import MenuAside from "./components/MenuAside";
import ServsDesc from "./components/ServDesc";
import ServInfo from "./components/ServInfo";

//Assets
import DocCSS from "./Doc_Main.module.css";
import conf from "./conf/view_main.conf.json";

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
          {url == "/" ? (
            <ServsDesc {...conf.serv_desc.title_main} />
          ) : (
            <ServInfo {...conf.serv_info} />
          )}
        </div>
      </div>
    </>
  );
};

export default Documentation;
