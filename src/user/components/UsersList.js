//template for members list- can be used to render list of members in each group(#of members in each group).
//variables can be changed to make more sence with our backend
import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "./UsersList.css";

let UsersList = props => {
  console.log(props.items);
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user._id}
          id={user._id}
          // image={user.image}
          name={user.name}
          email={user.email}
          memberOf={user.memberOf}
        />
      ))}
    </ul>
  );
};

export default UsersList;
