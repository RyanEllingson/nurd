import React, { useState } from "react";

const NewGroup = () => {
  let [inputGroup, setInputGroup] = useState({
    type: "",
    groupName: "",
    title: "",
    groupDescription: "",
    location: "",
    gender: "",
    minAge: ""
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
    <h2 key={group.groupName}>
      {group.type} {group.groupName} {group.title}
      {group.description} {group.location} {group.gender} {group.minAge}
    </h2>
  ));
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="type of game"
          name="type"
          value={inputGroup.type}
          onChange={handleChange}
        />
        <input
          placeholder="group name"
          name="groupName"
          value={inputGroup.groupName}
          onChange={handleChange}
        />
        <input
          placeholder="game title"
          name="title"
          value={inputGroup.title}
          onChange={handleChange}
        />
        <input
          placeholder="address"
          name="location"
          value={inputGroup.location}
          onChange={handleChange}
        />
        <input
          placeholder="gender"
          name="gender"
          value={inputGroup.gender}
          onChange={handleChange}
        />
        <input
          placeholder="min age requirement"
          name="minAge"
          value={inputGroup.minAge}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Create Group</button>
      </form>
      {groups}
    </React.Fragment>
  );
};

export default NewGroup;
