//template Array for user Profile. USERS currently hard coded- will link to our backend. Currently hard-coded avatar image.

import React, { useState, useContext } from "react";
import routes from "../../routes/apiRoutes";
import { AuthContext } from "../../auth/auth";

import UsersList from "../components/UsersList";
import "./Users.css";

//Currently presentational only- will need to access back-end
const Users = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const { user } = useContext(AuthContext);
  // const USERS = [
  // {
  //   id: "u1",
  //   name: "Ryan Stormcaller",
  //   image:
  //     "https://cdn.discordapp.com/avatars/244932903530659841/0c924a19fcf1b5c59bc9dc1b58b61bb0.jpg?size=1024",
  //   email: "r@gmail.com",
  //   memberOf: [{title: "group1"}, {title: "group2"}]
  // }
  // ];
  routes.getUserById(user.id).then(function(response) {
    const userArray = [];
    userArray.push(response.data[0]);
    setCurrentUser(userArray);
  });

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <UsersList className="profile" items={currentUser} />;
    </div>
  );
};

export default Users;
