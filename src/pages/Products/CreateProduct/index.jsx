import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { Button, Grid, TextField, Typography } from "@mui/material";

import PageLayout from "../../../components/PageLayout";

import styles from "./styles";
import SearchBar from "../../../components/SearchBar";
import { AddCircleOutlineOutlined, StarTwoTone } from "@mui/icons-material";
import ArrowIcon from "../../../icons/arrowIcon";
import LabeledTextField from "../../../components/LabeledTextField";

const AddProduct = () => {
  const classes = styles();

  const [searchProduct, setSearchProduct] = useState();
  const productList = [];

  const formik = useFormik({
    initialValues: {
      sku: "",
    },

    onSubmit: async () => {
      //   try {
      //     if (!selectedDelivery) {
      //       await createDeliveryNote(DeliveryNote);
      //       formik.resetForm();
      //       setDeliveryNote([]);
      //       setEnqueueSnackbar("Delivery Note Added Succesfully", "success");
      //     } else {
      //       const DeliveryNote = {
      //         deliveryDate: formatDate(date),
      //         itemName: formik.values.itemName,
      //         itemColor: formik.values.itemColor,
      //         quantity: formik.values.quantity,
      //         description: formik.values.description,
      //       };
      //       await updateDeliveryNote(DeliveryNote);
      //       formik.resetForm();
      //       setDeliveryNote([]);
      //       setEnqueueSnackbar("Delivery Note Updated Succesfully", "success");
      //     }
      //   } catch (e) {
      //     setEnqueueSnackbar(
      //       "Error Occured during Delivery Note Submission",
      //       "error"      //     );
      //   }
    },
  });

  return (
    <PageLayout
      pageHeading={
        <Grid item container>
          <Grid item>
            Products <ArrowIcon /> add new project
          </Grid>
        </Grid>
      }
      pageActions={<>Hello</>}
    >
      <Grid item container justifyContent="space-between" xs={12}>
        <Grid item xs={3}>
          <SearchBar
            id="searchProduct"
            name="searchProduct"
            placeholder="Search for product"
            onChange={(value) => setSearchProduct(value)}
            value={searchProduct}
            items={productList}
          />
        </Grid>
      </Grid>
      <Grid item container sx={classes.section}>
        <Grid item xs={3}>
          <LabeledTextField
            id="sku"
            name="sku"
            label="SKU"
            onChange={(value) => formik.setFieldValue("sku", value)}
            value={formik.values.sku}
          />
        </Grid>
      </Grid>
      <Grid item container sx={classes.section}>
        <Grid item xs={3}>
          <LabeledTextField
            id="name"
            name="name"
            label="Name"
            onChange={(value) => formik.setFieldValue("name", value)}
            value={formik.values.name}
          />
        </Grid>
        <Grid item xs={3}>
          <LabeledTextField
            id="qty"
            name="qty"
            label="Quantity"
            onChange={(value) => formik.setFieldValue("qty", value)}
            value={formik.values.qty}
          />
        </Grid>
      </Grid>
      <Grid item container sx={classes.section}>
        <Grid item xs={3}>
          <Typography variant="subtitle1"> Description </Typography>
          <Typography variant="body2">
            A small description about the project
          </Typography>
          <TextField
            className={classes.textField}
            id="description"
            // inputRef={register}
            name="description"
            margin="dense"
            multiline
            minRows={10}
            variant="outlined"
            // error={!!errors.description}
            // defaultValue={ticketData?.description}
            // onChange={(e) => setDescription(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
export default AddProduct;
