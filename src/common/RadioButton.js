import React from "react";
import styles from "../styles/common/radioButton.module.scss";

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label className={styles.radioButton}>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default RadioButton;
