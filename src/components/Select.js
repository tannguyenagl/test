import React from "react";

const Select = ({ registerReturn, options, name, label }) => (
  <>
    <label className="label">
      <div>{label}</div>
    </label>
    <select className="select" name={name} {...registerReturn}>
      {options.map((option) => {
        return (
          <option className="option" key={option.value} value={option.value}>
            {option.content}
          </option>
        );
      })}
    </select>
  </>
);
export default Select;
