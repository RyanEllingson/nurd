// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import NativeSelect from "@material-ui/core/NativeSelect";

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2)
//   }
// }));

// export default function NativeSelects() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     age: "",
//     name: "hai"
//   });

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);

//   const handleChange = name => event => {
//     setState({
//       ...state,
//       [name]: event.target.value
//     });
//   };

//   return (
//     <div>
//       <FormControl className={classes.formControl}>
//         <InputLabel htmlFor="age-native-simple">Age</InputLabel>
//         <Select
//           native
//           value={state.age}
//           onChange={handleChange("age")}
//           inputProps={{
//             name: "age",
//             id: "age-native-simple"
//           }}>
//           <option value="" />
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </Select>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel htmlFor="age-native-helper">Age</InputLabel>
//         <NativeSelect
//           value={state.age}
//           onChange={handleChange("age")}
//           inputProps={{
//             name: "age",
//             id: "age-native-helper"
//           }}>
//           <option value="" />
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </NativeSelect>
//         <FormHelperText>Some important helper text</FormHelperText>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <NativeSelect
//           value={state.age}
//           onChange={handleChange("age")}
//           name="age"
//           className={classes.selectEmpty}
//           inputProps={{ "aria-label": "age" }}>
//           <option value="">None</option>
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </NativeSelect>
//         <FormHelperText>With visually hidden label</FormHelperText>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel shrink htmlFor="age-native-label-placeholder">
//           Age
//         </InputLabel>
//         <NativeSelect
//           value={state.age}
//           onChange={handleChange("age")}
//           inputProps={{
//             name: "age",
//             id: "age-native-label-placeholder"
//           }}>
//           <option value="">None</option>
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </NativeSelect>
//         <FormHelperText>Label + placeholder</FormHelperText>
//       </FormControl>
//       <FormControl className={classes.formControl} disabled>
//         <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
//         <NativeSelect
//           value={state.name}
//           onChange={handleChange("name")}
//           inputProps={{
//             name: "name",
//             id: "name-native-disabled"
//           }}>
//           <option value="" />
//           <optgroup label="Author">
//             <option value="hai">Hai</option>
//           </optgroup>
//           <optgroup label="Contributors">
//             <option value="olivier">Olivier</option>
//             <option value="kevin">Kevin</option>
//           </optgroup>
//         </NativeSelect>
//         <FormHelperText>Disabled</FormHelperText>
//       </FormControl>
//       <FormControl className={classes.formControl} error>
//         <InputLabel htmlFor="name-native-error">Name</InputLabel>
//         <NativeSelect
//           value={state.name}
//           onChange={handleChange("name")}
//           name="name"
//           inputProps={{
//             id: "name-native-error"
//           }}>
//           <option value="" />
//           <optgroup label="Author">
//             <option value="hai">Hai</option>
//           </optgroup>
//           <optgroup label="Contributors">
//             <option value="olivier">Olivier</option>
//             <option value="kevin">Kevin</option>
//           </optgroup>
//         </NativeSelect>
//         <FormHelperText>Error</FormHelperText>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
//         <NativeSelect
//           defaultValue={30}
//           inputProps={{
//             name: "name",
//             id: "uncontrolled-native"
//           }}>
//           <option value="" />
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </NativeSelect>
//         <FormHelperText>Uncontrolled</FormHelperText>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <NativeSelect
//           className={classes.selectEmpty}
//           value={state.age}
//           name="age"
//           onChange={handleChange("age")}
//           inputProps={{ "aria-label": "age" }}>
//           <option value="" disabled>
//             Placeholder
//           </option>
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </NativeSelect>
//         <FormHelperText>Placeholder</FormHelperText>
//       </FormControl>
//       <FormControl required className={classes.formControl}>
//         <InputLabel htmlFor="age-native-required">Age</InputLabel>
//         <Select
//           native
//           value={state.age}
//           onChange={handleChange("age")}
//           name="age"
//           inputProps={{
//             id: "age-native-required"
//           }}>
//           <option value="" />
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </Select>
//         <FormHelperText>Required</FormHelperText>
//       </FormControl>
//       <FormControl variant="outlined" className={classes.formControl}>
//         <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
//           Age
//         </InputLabel>
//         <Select
//           native
//           value={state.age}
//           onChange={handleChange("age")}
//           labelWidth={labelWidth}
//           inputProps={{
//             name: "age",
//             id: "outlined-age-native-simple"
//           }}>
//           <option value="" />
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </Select>
//       </FormControl>
//       <FormControl variant="filled" className={classes.formControl}>
//         <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
//         <Select
//           native
//           value={state.age}
//           onChange={handleChange("age")}
//           inputProps={{
//             name: "age",
//             id: "filled-age-native-simple"
//           }}>
//           <option value="" />
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

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

          <option value="" >Game Type</option>
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
