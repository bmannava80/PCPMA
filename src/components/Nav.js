import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/nav.module.scss";

const menuItems = [
  { text: "Facility/Provider Maintenance", to: "provider-maintenance" },
  { text: "Member Maintenance", to: "member-maintenance" },
  { text: "Group Records", to: "group-records" },
  { text: "Claims Records", to: "claims-records" },
];

let activeStyle = {
  background: "#fff",
  color: "#43b02a",
  borderTop: "3px solid #43b02a",
  borderLeft: "1px solid #d6dfe6",
  borderRight: "1px solid #d6dfe6",
};

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item.to} className={styles.menuItem}>
            <NavLink
              to={item.to}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
