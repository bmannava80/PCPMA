import React from "react";
import styles from "../styles/common/table.module.scss";

const Table = ({ headers, data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* {data &&
            data.map(item => (
                <tr>
                    <td>{item.title}</td>
                </tr>
            ))} */}
      </tbody>
    </table>
  );
};

export default Table;
