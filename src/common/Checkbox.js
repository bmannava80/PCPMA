import React, { useState } from "react";
import styles from "../styles/common/checkbox.module.scss";
const Checkbox = ({ checked, disabled }) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        className={styles.checkbox}
        checked={isChecked}
        disabled={disabled}
      />
    </label>
  );
};

export default Checkbox;
