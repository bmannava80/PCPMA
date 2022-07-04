import React, { useState } from "react";
import styles from "../styles/common/select.module.scss";
import chevron from "../assets/icons/chevron.png";

const Select = ({ title, options }) => {
  const [isActive, setIsActive] = useState(false);
  const [isOptionMenuActive, setIsOptionMenuActive] = useState(false);
  const [selected, setSelected] = useState(title && title);
  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.dropdownHeader}
        onClick={() => setIsActive(!isActive)}
      >
        {selected}
        <span>
          <img src={chevron} />
        </span>
      </div>
      {isActive && (
        <div className={styles.dropdownList}>
          {options.map((option) => (
            <div
              className={styles.dropdownListItem}
              onClick={() => {
                setSelected(option.name);
                setIsActive(false);
              }}
              key={option.id}
            >
              {option.name}
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: `${option.color}`,
                }}
              >
                {""}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
