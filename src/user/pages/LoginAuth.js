// https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in-side
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../auth/auth";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
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

const LoginAuth = ({ history }) => {
  const classes = useStyles();
  const { user, loginUser = {} } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      //   console.log("shiboopy");
      history.push("/");
    }
  }, [user, history]);

  const loginSubmitHandler = event => {
    event.preventDefault();
    const newLogin = {
      email: email,
      password: password
    };
    console.log(newLogin);
    loginUser(newLogin, history);
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
            Login
          </Typography>
          <ValidatorForm onSubmit={loginSubmitHandler} className={classes.form}>
            <TextValidator
              onChange={e => setEmail(e.target.value)}
              value={email}
              variant="outlined"
              onSubmit={loginSubmitHandler}
              onError={errors => console.log(errors)}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
            <TextValidator
              onChange={e => setPassword(e.target.value)}
              onSubmit={loginSubmitHandler}
              onError={errors => console.log(errors)}
              value={password}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              validators={["required", "isPassword"]}
              errorMessages={[
                "this field is required",
                "password is not valid"
              ]}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
            </Grid>
            <Box mt={5}>
              <CurrentDate />
            </Box>
          </ValidatorForm>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginAuth;

// class MyForm extends React.Component {
//   state = {
//     email: ""
//   };

//   handleChange = event => {
//     const email = event.target.value;
//     this.setState({ email });
//   };

//   handleSubmit = () => {
//     // your submit logic
//   };

//   render() {
//     const { email } = this.state;
//     return (
//       <ValidatorForm
//         ref="form"
//         onSubmit={this.handleSubmit}
//         onError={errors => console.log(errors)}>
//         <TextValidator
//           label="Email"
//           onChange={this.handleChange}
//           name="email"
//           value={email}
//           validators={["required", "isEmail"]}
//           errorMessages={["this field is required", "email is not valid"]}
//         />
//         <Button type="submit">Submit</Button>
//       </ValidatorForm>
//     );
//   }
// }
// export default MyForm;
