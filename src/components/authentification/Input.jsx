import React from "react";

const Input = (props) => {
  return (
    <div>
      {props.type === "submit" ? (
        <input name={props.name} type={props.type} value={props.label} />
      ) : (
        <>
          <label htmlFor={props.name}>{props.label}</label>
          <input name={props.name} type={props.type} />
        </>
      )}
    </div>
  );
};

export default Input;
