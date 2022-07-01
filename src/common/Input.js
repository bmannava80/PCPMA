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
    <div>
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
      {withIcon}
    </div>
  );
};

export default Input;
