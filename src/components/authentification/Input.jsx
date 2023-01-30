import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input name={props.name} type={props.type} />
    </div>
  );
};

export default Input;
