import React from "react";
import styles from "../styles/common/input.module.scss";

const Input = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  required,
  withIcon,
}) => {
  return (
    <div className={styles.formInput}>
      <label>
        {required && <span>*</span>}
        {label}
      </label>
      <input
        className={styles.formInput}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      <span className={styles.icon}>
        <img src={withIcon} />
      </span>
    </div>
  );
};

export default Input;
