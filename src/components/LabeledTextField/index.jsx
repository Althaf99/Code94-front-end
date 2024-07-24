import React from "react";

import { TextField, FormControl, Grid } from "@mui/material";

import styles from "./styles";

const LabeledTextField = ({
  label,
  required,
  errors,
  name,
  onChange,
  ...rest
}) => {
  const classes = styles();

  return (
    <Grid item container>
      <Grid item sx={classes.label}>
        {label}
      </Grid>
      <Grid item>
        <FormControl size="small" fullWidth sx={classes.textBox}>
          <TextField
            variant="outlined"
            size="small"
            inputProps={
              errors &&
              errors[name] && {
                classes: {
                  notchedOutline: classes.errorTextField,
                },
              }
            }
            name={name}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            {...rest}
          />
          {errors && errors[name] && <p sx={classes.invalid}>{errors[name]}</p>}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default LabeledTextField;