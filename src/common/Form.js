import React from "react";
import styles from "../styles/common/form.module.scss";

const Form = ({ children, onSubmit, title, className }) => {
  return (
    <form
      onSubmit={onSubmit}
      title={title}
      className={`${styles.form} ${className}`}
    >
      <span className={styles.formTitle}>{title}</span>
      {children}
    </form>
  );
};

export default Form;
