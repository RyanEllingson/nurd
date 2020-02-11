import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../auth/auth";
// import Input from "../../shared/components/FormElements/Input";
// import { Field, Form, Formik, FormikProps } from "formik";

import Avatar from "@material-ui/core/Avatar";
<<<<<<< HEAD
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
=======


>>>>>>> 2c2e047d5e6861ec5328e77a0e3677644969d650
import Link from "@material-ui/core/Link";
import CurrentDate from "../../shared/components/Navigation/CurrentDate";
import { makeStyles } from "@material-ui/core/styles";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {
  Button,
  Columns,
  Heading,
  Control,
  Form,
  Card,
  Box,
  Checkbox
} from "react-bulma-components";

const LoginAuth = ({ history }) => {
  const { user, loginUser = {} } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  useEffect(() => {
    // If user is logged in and navigates to login page, reroute to default page
    if (user) {
      console.log(user);
      history.push("/");
    }
  }, [user, history]);

  const loginSubmitHandler = event => {
    event.preventDefault();
    // console.log(formState.inputs);
    const userData = {
      email: email,
      password: password
    };
    loginUser(userData);
  };

  return (
    <div>
    <Columns className="is-centered">
    <Columns.Column className="is-6">
    <Card>
          <Avatar >
          </Avatar>
<<<<<<< HEAD
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form onSubmit={loginSubmitHandler} className={classes.form}>
            <input
=======
          
          <Form.Field onSubmit={loginSubmitHandler} >
          <Form.Input
>>>>>>> 2c2e047d5e6861ec5328e77a0e3677644969d650
              onChange={e => setEmail(e.target.value)}
              value={email}
              variant="outlined"
              margin="normal"
              placeholder="email"
              required
              fullWidth
              type="text"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              errorText="Not a valid email address"
              autoFocus
            />
<<<<<<< HEAD
            <input
=======

            <Form.Input
>>>>>>> 2c2e047d5e6861ec5328e77a0e3677644969d650
              onChange={e => setPassword(e.target.value)}
              value={password}
              variant="outlined"
              margin="normal"
              placeholder="password"
              required
              fullWidth
              type="text"
              name="password"
              label="Password"
              id="password"
<<<<<<< HEAD
              autoComplete="current-password"
              errorText="Not a valid password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me" */}

=======
              
            />
>>>>>>> 2c2e047d5e6861ec5328e77a0e3677644969d650
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary">
              Sign In
            </Button>
            <Columns>
              <Columns.Column item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Columns.Column>
            </Columns>
            <Box mt={5}>
              <CurrentDate />
            </Box>
          </Form.Field>
          </Card>
          </Columns.Column>
          </Columns>
          </div>
  );
};

export default LoginAuth;
