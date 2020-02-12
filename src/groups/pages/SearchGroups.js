//currently using dummy data until merged with backend

import React from "react";
// import { useParams } from "react-router-dom";

import SearchGroupList from "../components/SearchGroupList";
import "../components/GroupList.css";
import "./SearchGroups.css";

// const DUMMY_SEARCH = [
//   {
//     id: "g1",
//     title: "Friday Night Magic",
//     description:
//       "Every Friday, participating WPN locations provide the indispensable experience of communal, face-to-face Magic that has been lifeblood of the game since the beginning.",
//     imageUrl:
//       "https://cdn.pixabay.com/photo/2017/07/13/20/24/cubes-2501785_1280.jpg",
//     address: "711 W. Lake Street STE 103, Minneapolis, MN 55408",
//     location: {
//       lat: 44.9465724,
//       lng: -93.2986884
//     },
//     creator: "u1"
//   },
//   {
//     id: "g2",
//     title: "Friday Night Magic part2",
//     description:
//       "Every Friday, participating WPN locations provide the indispensable experience of communal, face-to-face Magic that has been lifeblood of the game since the beginning.",
//     imageUrl: "https://picsum.photos/200",
//     address: "711 W. Lake Street STE 103, Minneapolis, MN 55408",
//     location: {
//       lat: 44.9465724,
//       lng: -93.2986884
//     },
//     creator: "user2"
//   },
//   {
//     id: "g3",
//     title: "Friday Night Magic part3",
//     description:
//       "Every Friday, participating WPN locations provide the indispensable experience of communal, face-to-face Magic that has been lifeblood of the game since the beginning.",
//     imageUrl: "https://picsum.photos/200",
//     address: "711 W. Lake Street STE 103, Minneapolis, MN 55408",
//     location: {
//       lat: 44.9465724,
//       lng: -93.2986884
//     },
//     creator: "user3"
//   }
// ];

const SearchGroups = () => {
  // const userId = useParams().userId;
  // const loadedGroups = DUMMY_SEARCH.filter(group => group.creator);
  // return <GroupList items={loadedGroups} />;
  return <SearchGroupList className="search"/>;
};

export default SearchGroups;
