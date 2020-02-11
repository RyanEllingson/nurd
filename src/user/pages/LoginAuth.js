import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../auth/auth";
import Input from "../../shared/components/FormElements/Input";
import Avatar from "@material-ui/core/Avatar";


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
          
          <Form.Field onSubmit={loginSubmitHandler} >
          <Form.Input
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
              errorText="Not a valid email address"
              autoFocus
            />

            <Form.Input
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
              
            />
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
