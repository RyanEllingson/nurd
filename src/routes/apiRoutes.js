import axios from "axios";

export default {
  getBoardGame: function(searchName) {
    return axios
      .post("https://ryan-nurd-be.herokuapp.com/api/games/board", {
        name: searchName
      })
      .then(res => {
        console.log(res);
      });
  },
  getVideoGame: function(searchName) {
    return axios
    .post("https://ryan-nurd-be.herokuapp.com/api/games/video", {
      name: searchName
    }).then(res => {
      console.log(res);
    });
  },
  createGroup: function(newGroup) {
    return axios.post("https://ryan-nurd-be.herokuapp.com/api/groups", newGroup);
  },
  getAllGroups: function() {
    return axios.get("https://ryan-nurd-be.herokuapp.com/api/groups");
  },
  getGroupsByType: function(searchType) {
    return axios
    .post("https://ryan-nurd-be.herokuapp.com/api/groups/type", {
      gameType: searchType
    }).then(res => {
      console.log(res);
    });
  },
  addMember: function(memberName, groupId) {
    return axios
    .put(`https://ryan-nurd-be.herokuapp.com/api/groups/add-member/${groupId}`, {
      name: memberName
    }).then(res => {
      console.log(res);
    });
  },
  deleteGroup: function(groupId) {
    return axios
    .delete(`https://ryan-nurd-be.herokuapp.com/api/groups/${groupId}`)
    .then(res => {
      console.log(res);
    });
  }
};
