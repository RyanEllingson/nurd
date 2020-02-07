//template Array for user Profile. USERS currently hard coded- will link to our backend. Currently hard-coded avatar image.

import React from "react";

import UsersList from "../components/UsersList";

//Currently presentational only- will need to access back-end
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ryan Stormcaller",
      image:
        "https://cdn.discordapp.com/avatars/244932903530659841/0c924a19fcf1b5c59bc9dc1b58b61bb0.jpg?size=1024",
      email: "r@mail.com",
      groups: 1
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
