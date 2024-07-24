import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { Button, TextField, Typography } from "@mui/material";
import { AddCircleOutlineOutlined, StarTwoTone } from "@mui/icons-material";

import Grid from "@mui/material/Grid";

import PageLayout from "../../../components/PageLayout";
import SearchBar from "../../../components/SearchBar";
import LabeledTextField from "../../../components/LabeledTextField";
import ImageUpload from "../../../components/ImageUploader";

import styles from "./styles";
import ArrowIcon from "../../../icons/arrowIcon";

import useCreateProduct from "../../../hooks/useCreateProduct";
import { useSelector } from "react-redux";

const AddProduct = () => {
  const classes = styles();
  const userId = useSelector((state) => state.roleManager.userId);
  console.log("userId", userId);
  const { mutateAsync: createProduct } = useCreateProduct();

  const formik = useFormik({
    initialValues: {
      sku: "",
      productName: "",
      qty: "",
      price: "",
      productDescription: "",
    },

    onSubmit: async () => {
      const product = {
        productName: formik.values.productName,
        sku: formik.values.sku,
        qty: formik.values.qty,
        price: formik.values.price,
        productDescription: formik.values.productDescription,
        userId: userId,
      };
      createProduct(product);
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
      //   } catch (value) {
      //     setEnqueueSnackbar(
      //       "Error Occured during Delivery Note Submission",
      //       "error"      //     );
      //   }
    },
  });

  return (
    <PageLayout
      pageHeading={
        <Grid item container flexWrap={"wrap"}>
          <Grid item>Products</Grid>
          <Grid item>
            <ArrowIcon sx={classes.icon} />
          </Grid>
          <Grid item sx={classes.subHeading}>
            add new project
          </Grid>
        </Grid>
      }
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} sx={classes.container}>
          {/* SKU Field */}
          <Grid item xs={12}>
            <LabeledTextField
              id="sku"
              name="sku"
              label="SKU"
              onChange={(value) => formik.setFieldValue("sku", value)}
              value={formik.values.sku}
            />
          </Grid>

          {/* Name Field */}
          <Grid item xs={12} sm={6}>
            <LabeledTextField
              id="name"
              name="name"
              label="Name"
              onChange={(value) => formik.setFieldValue("productName", value)}
              value={formik.values.productName}
            />
          </Grid>

          {/* QTY Field */}
          <Grid item xs={12} sm={6}>
            <LabeledTextField
              id="qty"
              name="qty"
              label="QTY"
              onChange={(value) => formik.setFieldValue("qty", value)}
              value={formik.values.qty}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LabeledTextField
              id="price"
              name="price"
              label="Price"
              onChange={(value) => formik.setFieldValue("price", value)}
              value={formik.values.price}
            />
          </Grid>

          <Grid item xs={12} sx={classes.description}>
            <Grid sx={classes.label}>Product Description</Grid>
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              name="productDescription"
              placeholder="A small description about the product"
              onChange={(e) =>
                formik.setFieldValue("productDescription", e.target.value)
              }
              value={formik.values.productDescription}
            />
          </Grid>
          <Grid item xs={12} sx={classes.imageUpload}>
            <Grid sx={classes.label}>Product Images</Grid>

            <ImageUpload />
            <Typography variant="body2" color="textSecondary">
              JPEG, PNG, SVG, or GIF (Maximum file size 50MB)
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent={"flex-end"}>
          <Grid item>
            <Button variant="contained" type="submit">
              Save Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </PageLayout>
  );
};
export default AddProduct;
