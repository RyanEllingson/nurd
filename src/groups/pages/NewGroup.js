import React, { useState, useContext } from "react";
import { AuthContext } from "../../auth/auth";
import routes from "../../routes/apiRoutes";
import "./NewGroup.css";

const NewGroup = ({ history }) => {
  const { user } = useContext(AuthContext);
  const organizer = user.name;
  let [inputGroup, setInputGroup] = useState({
    type: "",
    groupName: "",
    title: "",
    groupDescription: "",
    location: "",
    gender: "",
    minAge: ""
  });

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
  let [createGroup, setCreateGroup] = useState([]);
  //add the input data to createGroup array
  function handleSubmit(event) {
    event.preventDefault();
    setCreateGroup(prevCreateGroup => [...prevCreateGroup, inputGroup]);
    const newGroup = {
      organizer: organizer,
      groupTitle: inputGroup.groupName,
      gameTitle: inputGroup.title,
      location: inputGroup.location,
      gameType: inputGroup.type,
      minimumAge: inputGroup.minAge,
      requiredGender: inputGroup.gender,
      description: inputGroup.groupDescription
    };
    routes.createGroup(newGroup).then(() => {
      history.push("/");
    });
  }
  // console.log(inputGroup)
  // console.log(createGroup)

  // const groups = createGroup.map(group => (
  //   <h2 key={group.groupName}>
  //     {group.type} {group.groupName} {group.title}
  //     {group.description} {group.location} {group.gender} {group.minAge}
  //   </h2>
  // ));
  return (
    <React.Fragment>
      <div className="paper">
      <form className="display" onSubmit={handleSubmit}>
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
        <button className="makeBut">Create Group</button>
      </form>
      
      
</div>      
      {/* {groups} */}
    </React.Fragment>
  );
};

export default NewGroup;
