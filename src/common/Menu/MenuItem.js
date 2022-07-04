import React from "react";

const MenuItem = ({ onClick, id, className, children }) => {
  return (
    <li onClick={onClick} id={id} className={className}>
      {children}
    </li>
  );
};

export default MenuItem;
