import React, {
  useState,
  Fragment,
  useRef,
  useEffect,
  useContext
} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import "./GroupItem.css";
import "./SearchGroupList.css";

// import Card from "@material-ui/core/Card";
// import Card from "../../shared/components/UIElements/Card";
import GroupItem from "./GroupItem";
import "./GroupList.css";
import routes from "../../routes/apiRoutes";
import { AuthContext } from "../../auth/auth";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    paddingTop: "5rem",
    paddingLeft: "5rem"
  },
  dropDown: {
    backgroundColor: "rgba(68, 85, 90, 0.4)",
    color: "white"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SearchGroupList() {
  const classes = useStyles();
  const [state, setState] = useState({
    // age: "",
    // name: "hai"
    gameType: ""
  });

  const [groups, setGroups] = useState([]);
  const { user } = useContext(AuthContext);

  const searchGroups = function() {
    console.log(state);
    routes.getGroupsByType(state.gameType).then(function(response) {
      console.log(response.data);
      const groups = [...response.data];
      setGroups(groups);
    });
  };

  const handleDelete = function(id) {
    // console.log(id);
    routes.deleteGroup(id).then(function() {
      setGroups([]);
      searchGroups();
    });
  };

  const handleJoin = function(id) {
    routes.addMember(user.id, user.name, id).then(function() {
      setGroups([]);
      searchGroups();
    });
  };

  const inputLabel = useRef(null);

  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br />

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          ref={inputLabel}
          htmlFor="outlined-age-native-simple"></InputLabel>
        <Select
          native
          value={state.gameType}
          onChange={handleChange("gameType")}
          labelWidth={labelWidth}
          inputProps={{
            name: "GameTypes",
            id: "outlined-age-native-simple"
          }}>
          <option value="">Game Type</option>
          <option value={"Video"}>Video Games</option>
          <option value={"Board"}>Board Games</option>
          <option value={"Card"}>Trading Cards</option>
          <option value={"Other"}>Other</option>
        </Select>
        <button onClick={searchGroups}>Click here to search</button>
      </FormControl>
      {groups ? (
        <main>
          <ul className="group-list">
            {groups.map(group => (
              <GroupItem
                key={group._id}
                id={group._id}
                // image={group.imageUrl}
                groupTitle={group.groupTitle}
                description={group.description}
                // address={group.address}
                organizer={group.organizer}
                location={group.location}
                onClickDelete={() => {
                  handleDelete(group._id);
                }}
                onClickJoin={() => {
                  handleJoin(group._id);
                }}
                members={group.currentMembers}
              />
            ))}
          </ul>
        </main>
      ) : (
        ""
      )}
    </Fragment>
  );
}
