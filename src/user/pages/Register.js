// https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in-side
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../auth/auth";
// import Input from "../../shared/components/FormElements/Input";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import CurrentDate from "../../shared/components/Navigation/CurrentDate";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "cover"
  },
  layout: {
    width: "auto",
    justifyContent: "center",
    // display: "block-inline",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    background: "transparent",

    [theme.breakpoints.up(400 + theme.spacing(2) * 2)]: {
      width: 400,
      marginLeft: "30%",
      marginRight: "30%",
      marginTop: "4%"
    }
  },
  paper: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(3, 4)
  },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main
  // },
  form: {
    width: "100%", // Fix IE 11 issue.
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2, 0, 2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Register = ({ history }) => {
  const classes = useStyles();
  const { user, registerUser, errors = {} } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (user) {
      //   console.log("shiboopy");
      history.push("/");
    }
  }, [user, history]);

  const regSubmitHandler = event => {
    event.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
      password2: password2,
      age: age,
      gender: gender
    };
    console.log(newUser);
    registerUser(newUser, history);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        className={classes.layout}
        item
        xs={12}
        sm={8}
        md={5}
        // component={Paper}
        elevation={5}
        padding={0.5}
        square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form onSubmit={regSubmitHandler} className={classes.form}>
            <input
              className={classes.layout}
              onChange={e => setName(e.target.value)}
              value={name}
              variant="outlined"
              margin="normal"
              required
              id="name"
              label="User Name"
              placeholder="user name"
              name="name"
              autoComplete="name"
              error={errors.name}
              errortext={errors.name}
              autoFocus
              onBlur
            />
            <input
              className={classes.layout}
              onChange={e => setEmail(e.target.value)}
              value={email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              placeholder="email"
              autoComplete="email"
              errortext={errors.email}
              autoFocus
              onBlur
            />

            <input
              className={classes.layout}
              onChange={e => setPassword(e.target.value)}
              value={password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder="password"
              autoComplete="current-password"
              errortext={errors.password}
              onBlur
            />
            <input
              className={classes.layout}
              onChange={e => setPassword2(e.target.value)}
              value={password2}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Confirm Password"
              type="password"
              placeholder="confirm password"
              id="password2"
              autoComplete="current-password"
              errortext={errors.password2}
              onBlur
            />
            <input
              className={classes.layout}
              onChange={e => setAge(e.target.value)}
              value={age}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="age"
              label="Age"
              id="age"
              placeholder="age"
              autoComplete="age"
              errortext={errors.age}
              onBlur
            />
            <input
              className={classes.layout}
              onChange={e => setGender(e.target.value)}
              value={gender}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="gender"
              label="Gender"
              id="gender"
              placeholder="gender"
              autoComplete="gender"
              errortext={errors.gender}
              onBlur
            />
            <br />
            <Button type="submit" fullwidth variant="contained" color="primary">
              Submit
            </Button>
            <Grid container></Grid>
            <Box mt={5}></Box>
          </form>
          <CurrentDate />
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
