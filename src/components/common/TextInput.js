import React from "react";

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  return (
    <div>
      {/* <label htmlFor={name}>{label}</label> */}
      <div className="field">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
