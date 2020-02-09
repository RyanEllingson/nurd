import React, { useReducer } from "react";

import "./Input.css";

const inputUser = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true
      };
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputUser, {
    value: props.value,
    isTouched: false,
    inputIsValid: false
  });

  const changeHandler = event => {
    dispatch({
      type: "CHANGE",
      val: event.target.value
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH"
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        // onChange={changeHandler}
        onChange={props.onChange}
        onBlur={touchHandler}
        // value={inputState.value}
        value={props.value}
      />
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {/* {!inputState.inputIsValid && inputState.isTouched && <p>{props.value}</p>} */}
    </div>
  );
};

export default Input;
