import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/validators";
import "./NewGroup.css";

const userInputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let userFormIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          userFormIsValid = userFormIsValid && action.inputIsValid;
        } else {
          userFormIsValid =
            userFormIsValid && state.inputs[inputId].inputIsValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            InputIsValid: action.inputIsValid
          }
        },
        inputIsValid: userFormIsValid
      };
    default:
      return state;
  }
};

const NewGroup = () => {
  const [formState, dispatch] = useReducer(userInputReducer, {
    inputs: {
      title: {
        value: "",
        inputIsValid: false
      },
      description: {
        value: "",
        inputIsValid: false
      }
    },
    inputIsValid: false
  });

  const inputHandler = useCallback((id, value, inputIsValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      inputIsValid: inputIsValid,
      inputId: id
    });
  }, []);

  const groupSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="group-form" onSubmit={groupSubmitHandler}>
      <h2>Create A Group</h2>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Input
        id="username"
        element="input"
        label="Creator"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid username."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.inputIsValid}>
        CREATE
      </Button>
    </form>
  );
};

export default NewGroup;
