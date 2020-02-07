//currently using dummy data until merged with backend

import React from "react";
import { useParams } from "react-router-dom";

import GroupList from "../components/GroupList";

const DUMMY_Groups = [
  {
    id: "p1",
    title: "Friday Night Magic",
    description:
      "Every Friday, participating WPN locations provide the indispensable experience of communal, face-to-face Magic that has been lifeblood of the game since the beginning.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/07/13/20/24/cubes-2501785_1280.jpg",
    address: "711 W. Lake Street STE 103, Minneapolis, MN 55408",
    location: {
      lat: 44.9465724,
      lng: -93.2986884
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Friday Night Magic part2",
    description:
      "Every Friday, participating WPN locations provide the indispensable experience of communal, face-to-face Magic that has been lifeblood of the game since the beginning.",
    imageUrl: "https://picsum.photos/200",
    address: "711 W. Lake Street STE 103, Minneapolis, MN 55408",
    location: {
      lat: 44.9465724,
      lng: -93.2986884
    },
    creator: "u2"
  }
];

const UserGroups = () => {
  const userId = useParams().userId;
  const loadedGroups = DUMMY_Groups.filter(group => group.creator === userId);
  return <GroupList items={loadedGroups} />;
};

export default UserGroups;
