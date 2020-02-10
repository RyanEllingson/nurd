import "react-bulma-components/dist/react-bulma-components.min.css";
import {
  Button,
  Columns,
  Heading,
  Control,
  Form,
  Card
} from "react-bulma-components";
import React, { useState } from "react";

import "./NewGroup.css";

const NewGroup = () => {
  let [inputGroup, setInputGroup] = useState({
    organizer: "",
    type: "",
    groupTitle: "",
    gameTitle: "",
    description: "",
    location: "",
    requiredGender: "",
    minimumAge: ""
  });
  let [createGroup, setCreateGroup] = useState([]);

  // updates inputGroup state
  function handleChange(event) {
    const { name, value } = event.target;
    setInputGroup(prevInputGroup => {
      return {
        ...prevInputGroup,
        [name]: value
      };
    });
  }

  //add the input data to createGroup array
  function handleSubmit(event) {
    event.preventDefault();
    setCreateGroup(prevCreateGroup => [...prevCreateGroup, inputGroup]);
  }
  // console.log(inputGroup)
  // console.log(createGroup)

  const groups = createGroup.map(group => (
    <div>
      <Card key={group.organizer} style={{ width: "25rem" }}>
        <Card classname="header">{group.groupName}</Card>
        <ul className="list-group" variant="flush">
          <li className="list-group-Item"> {group.groupName}</li>
          <li className="list-group-Item">{group.title}</li>
          <li className="list-group-Item">{group.location}</li>
          <li className="list-group-Item">{group.requiredGender}</li>
          <li className="list-group-Item">{group.minimumAge}</li>
        </ul>
        <button type="submit" className="btn btn-primary">
          Primary
        </button>
      </Card>
    </div>
  ));
  return (
    <React.Fragment>
      <Columns className="is-centered  formM">
        <Columns.Column className="has-text-centered">
          <Heading>Create an Account</Heading>
          <Form.Field onSubmit={handleSubmit}>
            <div className="Control">
              <input
                className="input"
                placeholder="type of game"
                name="type"
                value={inputGroup.type}
                onChange={handleChange}
              />
            </div>
          </Form.Field>
          <Form.Field>
            <div className="Control">
              <input
                className="input"
                placeholder="group name"
                name="groupName"
                value={inputGroup.groupName}
                onChange={handleChange}
              />
            </div>
          </Form.Field>
          <Form.Field>
            <div className="Control">
              <input
                className="input"
                placeholder="game title"
                name="title"
                value={inputGroup.title}
                onChange={handleChange}
              />
            </div>
          </Form.Field>
          <Form.Field>
            <div className="Control">
              <input
                className="input"
                placeholder="address"
                name="location"
                value={inputGroup.location}
                onChange={handleChange}
              />
            </div>
          </Form.Field>
          <Form.Field>
            <div className="Control">
              <input
                className="input"
                placeholder="gender"
                name="gender"
                value={inputGroup.gender}
                onChange={handleChange}
              />
            </div>
          </Form.Field>
          <Form.Field>
            <div className="Control">
              <input
                className="input"
                placeholder="min age requirement"
                name="minAge"
                value={inputGroup.minAge}
                onChange={handleChange}
              />
            </div>
          </Form.Field>
          <Button.Group>
            <Button
              fullwidth
              rounded
              color="primary"
              onClick={() => console.log(Form)}>
              Login
            </Button>
          </Button.Group>
        </Columns.Column>
        <Columns.Column className="is-hidden-mobile has-text-centered">
          Right Stuff
        </Columns.Column>
      </Columns>

      {groups}
    </React.Fragment>
  );
};

export default NewGroup;
