import axios from "axios";

export default {
  getBoardGame: function(searchName) {
    return axios
      .post("http://localhost:5000/api/games/board", {
        name: searchName
      })
      .then(res => {
        // res.json();
        console.log(res);
      });
  }
};
