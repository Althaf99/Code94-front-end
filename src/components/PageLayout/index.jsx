import React from "react";

import { Grid, Typography, Paper } from "@mui/material";

import styles from "./styles";

import { AccountCircle } from "@mui/icons-material";
import { colorPallet } from "../../constents";
import { useSelector } from "react-redux";

import AccountMenu from "../UserProfileButton";

const PageLayout = ({ pageHeading, children, pageActions }) => {
  const classes = styles();

  const userRole = useSelector((state) => state.roleManager.value);

  return (
    <Grid container sx={classes.gridContainer}>
      <Grid item container flexDirection="row-reverse" columnSpacing={4}>
        <Grid item sx={classes.pageActions}>
          <AccountMenu />
        </Grid>
      </Grid>
      <Grid item container sx={classes.headingTitle}>
        {pageHeading}
      </Grid>
      <Grid item container sx={classes.section}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PageLayout;
