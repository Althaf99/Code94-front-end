import React, { useState } from "react";
import { setRole, setUserId } from "./roleManagement";

import LabeledTextField from "../LabeledTextField";

import { useSnackbar } from "notistack";

import { TextField, Button, Typography, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";

import { ROLE } from "../../constents";

import useGetUsers from "../../hooks/useGetUsers";

import Logo from "../../logo.png";

const Login = () => {
  const classes = styles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const setEnqueueSnackbar = (msg, snackerVariant) => {
    enqueueSnackbar(msg, {
      variant: snackerVariant,
      autoHideDuration: 3000,
    });
  };

  const { data: users } = useGetUsers();

  const validateUser = ({ userName, password }) => {
    const validateUser =
      users &&
      users?.find(
        (element) =>
          element.userName === userName && element.password === password
      );
    if (validateUser) {
      dispatch(setUserId(validateUser.userId));
    }
    return validateUser ? true : false;
  };

  const handleSubmit = async ({ userName, password }) => {
    if (userName === ROLE.ADMIN && password === ROLE.ADMIN) {
      dispatch(setRole(ROLE.ADMIN));
      setEnqueueSnackbar(" Admin Logged Successfully", "success");
      navigate("/listProducts");
    } else if (validateUser({ userName, password })) {
      dispatch(setRole(ROLE.USER));
      setEnqueueSnackbar("User Logged in Succesfully", "success");
      navigate("/listProducts");
    } else {
      setEnqueueSnackbar("Authentication Failed", "error");
    }
  };

  return (
    <Grid sx={classes.body}>
      <Grid item container sx={classes.container} rowGap={4}>
        <Grid xs={12}>
          <img src={Logo} alt="react logo" sx={classes.image} />
        </Grid>
        <Grid xs={12}>
          <LabeledTextField
            id="userName"
            name="userName"
            label="User Name"
            placeholder="User Name"
            onChange={(value) => setUserName(value)}
            value={userName}
          />
        </Grid>
        <Grid xs={12}>
          <LabeledTextField
            id="password"
            name="password"
            label="Password"
            placeholder="Password"
            onChange={(value) => setPassword(value)}
            value={password}
          />
        </Grid>
        <Grid xs={12}>
          <Button
            onClick={() => {
              handleSubmit({ userName, password });
            }}
            variant="contained"
            fullWidth
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
