import React from "react";
import styles from "../styles/common/table.module.scss";

const Table = ({ headers, children }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
};

export default Table;
