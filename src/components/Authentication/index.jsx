import React from "react";
import { setRole } from "./roleManagement";

import { useSnackbar } from "notistack";

import { TextField, Button, Typography, Box, Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { ROLE } from "../../constents";

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.roleManager.value);
  const { enqueueSnackbar } = useSnackbar();

  const setEnqueueSnackbar = (msg, snackerVariant) => {
    enqueueSnackbar(msg, {
      variant: snackerVariant,
      autoHideDuration: 3000,
    });
  };
  const handleSubmit = async (values, actions) => {
    dispatch(setRole("Admin"));
    if (values.username === ROLE.USER && values.password === ROLE.USER) {
      dispatch(setRole(ROLE.USER));
      setEnqueueSnackbar("User Logged in Succesfully", "success");
      navigate("/listProducts");
    } else if (
      values.username === ROLE.ADMIN &&
      values.password === ROLE.ADMIN
    ) {
      dispatch(setRole(ROLE.ADMIN));
      setEnqueueSnackbar(" Admin Logged Successfully", "success");
      navigate("/listProducts");
    } else {
      setEnqueueSnackbar("User not found", "error");
    }
  };

  return (
    <Grid className={classes.body}>
      <Grid className={classes.container}>
        {/* <Typography variant="h4" className={classes.heading}>
          Newman's College
        </Typography>
        <AccountCircle className={classes.icon} /> */}
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, action) => {
            handleSubmit(values, action);
          }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Username is required";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }
            return errors;
          }}
        >
          {({ isValid = false }) => (
            <Form className={classes.form}>
              <Field
                as={TextField}
                type="username"
                name="username"
                label="Username"
                variant="outlined"
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid} // Disable the button when the form is invalid
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default Login;
