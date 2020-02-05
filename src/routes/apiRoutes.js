import axios from "axios";

export default {
  getBoardGame: function(searchName) {
    return axios
      .get("https://ryan-nurd-be.herokuapp.com/api/games/board", {
        body: {
          name: searchName
        }
      })
      .then(res => {
        // res.json();
        console.log(res);
      });
  }
};
