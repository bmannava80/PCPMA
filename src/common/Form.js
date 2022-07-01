import React from "react";
import styles from "../styles/common/form.module.scss";

const Form = ({ children, onSubmit, title }) => {
  return (
    <form onSubmit={onSubmit} title={title} className={styles.common}>
      <span className={styles.common}>{title}</span>
      {children}
    </form>
  );
};

export default Form;
