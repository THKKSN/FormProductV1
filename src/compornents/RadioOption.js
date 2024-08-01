import React from "react";
import "../style/P3.css";

// Separate component for each section for modularity
const RadioOption = ({ id, name, value, checked, onChange, label }) => (
    <div>
      <label
        className={`point-container ${checked ? "selected" : ""}`}
        htmlFor={id}
      >
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="hidden-radio"
        />
        {label}
      </label>
    </div>
  );

export default RadioOption;