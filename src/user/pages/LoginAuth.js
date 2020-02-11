import React, { useContext, useState, useEffect, Fragment } from "react";
import { AuthContext } from "../../auth/auth";
// import Input from "../../shared/components/FormElements/Input";
// import { Field, Form, Formik, FormikProps } from "formik";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import CurrentDate from "../../shared/components/Navigation/CurrentDate";
// import Register from "./Register";
// import { makeStyles } from "@material-ui/core/styles";

// import { Columns, Box } from "react-bulma-components";

const LoginAuth = ({ history }) => {
  const { user, loginUser = {} } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // If user is logged in and navigates to login page, reroute to default page
    if (user) {
      console.log(user);
      history.push("/search");
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
    <Fragment>
      <main>
        <Card>
          <Avatar></Avatar>
          {/* 
            <Typography component="h1" variant="h5">
              Sign in
            </Typography> */}

          <form onSubmit={loginSubmitHandler}>
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              variant="outlined"
              margin="normal"
              placeholder="email"
              required
              // fullwidth
              type="text"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              errortext="Not a valid email address"
              autoFocus
            />

            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              variant="outlined"
              margin="normal"
              placeholder="password"
              required
              // fullwidth
              type="text"
              name="password"
              label="Password"
              autoComplete="current-password"
              errortext="Not a valid password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"/> */}

            <Button
              type="submit"
              // fullwidth
              variant="contained"
              color="primary">
              Sign In
            </Button>
            <columns>
              <columns item>
                <Link
                  href="http://localhost:3000/register"
                  type="link"
                  variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </columns>
            </columns>
            <Box mt={5}>
              <CurrentDate />
            </Box>
          </form>
        </Card>
      </main>
    </Fragment>
  );
};

export default LoginAuth;
