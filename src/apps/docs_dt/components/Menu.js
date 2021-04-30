import React from "react";

const Menu = (dataMenu) => {
  return dataMenu.menuElements.map((e) => {
    return <RecursiveComponent {...e} key={e.id} />;
  });
};

const RecursiveComponent = ({ id, title, value, sons }) => {
  const handle = (value) => alert(value);

  const hasChildren = (children) => children && children.length;

  return (
    <ul>
      <li key={id}>
        <button
          onClick={() => {
            handle(value);
          }}
        >
          {title}
        </button>
      </li>
      {hasChildren(sons) &&
        sons.map((item) => (
          <li key={item.id}>
            {hasChildren(item.sons) == null && (
              <ol>
                <button
                  onClick={() => {
                    handle(item.value);
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
