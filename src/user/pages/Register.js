// https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in-side
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../auth/auth";
import Input from "../../shared/components/FormElements/Input";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import CurrentDate from "../../shared/components/Navigation/CurrentDate";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
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
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form onSubmit={regSubmitHandler} className={classes.form}>
            <Input
              onChange={e => setName(e.target.value)}
              value={name}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="User Name"
              name="name"
              autoComplete="name"
              error={errors.name}
              errorText={errors.name}
              autoFocus
            />
            <Input
              onChange={e => setEmail(e.target.value)}
              value={email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              errorText={errors.email}
              autoFocus
            />

            <Input
              //   onInput={inputHandler}
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
              autoComplete="current-password"
              errorText={errors.password}
            />
            <Input
              //   onInput={inputHandler}
              onChange={e => setPassword2(e.target.value)}
              value={password2}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Confirm Password"
              type="password"
              id="password2"
              autoComplete="current-password"
              errorText={errors.password2}
            />
            <Input
              onChange={e => setAge(e.target.value)}
              value={age}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="age"
              label="Age"
              id="age"
              autoComplete="age"
              errorText={errors.age}
            />
            <Input
              onChange={e => setGender(e.target.value)}
              value={gender}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="gender"
              label="Gender"
              id="gender"
              autoComplete="gender"
              errorText={errors.gender}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              Register></Button>
            <Grid container></Grid>
            <Box mt={5}>
              <CurrentDate />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
