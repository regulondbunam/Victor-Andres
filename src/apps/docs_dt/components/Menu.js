import React, { useState } from "react";

import MenuCSS from "./css/Menu.module.css";

const Menu = (dataMenu) => {
  return dataMenu.menuElements.map((e) => {
    return <RecursiveComponent {...e} key={e.id} />;
  });
};

const RecursiveComponent = ({ id, title, value, sons }) => {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }
  const handle = (value) => alert(value);

  const hasChildren = (children) => children && children.length;

  return (
    <ul className={MenuCSS.listElements}>
      <li key={id}>
        <button className={MenuCSS.elements} onClick={toggle}>
          {title}
        </button>
      </li>
      {hasChildren(sons) &&
        isOpened &&
        sons.map((item) => (
          <li key={item.id}>
            {hasChildren(item.sons) == null && (
              <ol className={MenuCSS.listElements}>
                <button
                  className={MenuCSS.link}
                  onClick={() => {
                    handle(value);
                  }}
                >
                  {item.title}
                </button>
              </ol>
            )}

            {hasChildren(item.sons) && (
              <RecursiveComponent key={item.id} {...item} />
            )}
          </li>
        ))}
    </ul>
  );
};

export default Menu;
