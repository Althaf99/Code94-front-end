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
    <Grid
      item
      container
      flexWrap={"wrap"}
      justifyContent={"space-around"}
      xs={12}
      sx={classes.container}
    >
      <Grid item>
        <Grid item sx={classes.label}>
          {label}
        </Grid>
      </Grid>

      <Grid item sx={classes.textField}>
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
      </Grid>
    </Grid>
  );
};

export default LabeledTextField;
