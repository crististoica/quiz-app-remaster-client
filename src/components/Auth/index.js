import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";

import LockIcon from "@material-ui/icons/Lock";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import Input from "./Input";
import useStyles from "./styles";
import { signup, signin } from "../../redux/actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formInfo, setFormInfo] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => state.auth,
    (prev, curr) => prev.isLoading === curr.isLoading
  );

  const switchMode = () => {
    setFormInfo(initialState);
    setIsSignUp((prevState) => !prevState);
    setShowPassword(false);
  };

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formInfo, "signin"));
  };

  const handleGuest = () => dispatch(signin("", "guest-signin"));

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <LockIcon className={classes.avatar} />
        <Typography component="h1" variant="h5">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && <></>}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isLoading}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              disabled={isLoading}
              startIcon={<AccountBoxIcon />}
              onClick={handleGuest}
            >
              Sign In With a Test Account
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
