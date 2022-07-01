import React from "react";
import MenuItem from "./MenuItem";
import styles from "../../styles/common/menu.module.scss";

const Menu = ({ menuItems, onClick, activeMenuID }) => {
  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => (
        <MenuItem
          onClick={onClick}
          id={item.id}
          key={item.id}
          className={`
            ${styles.menuItem} ${
            activeMenuID === item.id ? styles.active : ""
          }`}
        >
          {item.name}
        </MenuItem>
      ))}
    </ul>
  );
};

export default Menu;
