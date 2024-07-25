import React, { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Button, TextField, Typography, Grid } from "@mui/material";
import PageLayout from "../../../components/PageLayout";
import LabeledTextField from "../../../components/LabeledTextField";
import axios from "axios";
import styles from "./styles";
import ArrowIcon from "../../../icons/arrowIcon";

const AddProduct = () => {
  const classes = styles();
  const userId = useSelector((state) => state.roleManager.userId);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]); // State to store image previews

  const formik = useFormik({
    initialValues: {
      sku: "",
      productName: "",
      qty: "",
      price: "",
      productDescription: "",
    },
    onSubmit: async (values) => {
      // Create FormData object
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("sku", values.sku);
      formData.append("productName", values.productName);
      formData.append("qty", values.qty);
      formData.append("price", values.price);
      formData.append("productDescription", values.productDescription);

      // Append selected files to formData
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("images", selectedFiles[i]);
      }

      try {
        // Send POST request with formData to backend
        const response = await axios.post("/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Handle success
        console.log("Product created successfully:", response.data);
        formik.resetForm();
        setSelectedFiles([]);
        setPreviewImages([]);
      } catch (error) {
        // Handle error
        console.error("Error creating product:", error);
      }
    },
  });

  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    // Update the selectedFiles state with new files, preserving existing selections
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);

    // Generate preview URLs for the newly selected images
    const previews = files.map((file) => URL.createObjectURL(file));

    // Update the previewImages state to include new previews, preserving existing previews
    setPreviewImages((prevPreviews) => [...prevPreviews, ...previews]);
  };

  // Remove image previews to free up memory when component unmounts
  React.useEffect(() => {
    return () => {
      previewImages.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewImages]);

  return (
    <PageLayout
      pageHeading={
        <Grid item container flexWrap={"wrap"}>
          <Grid item>Products</Grid>
          <Grid item>
            <ArrowIcon sx={classes.icon} />
          </Grid>
          <Grid item sx={classes.subHeading}>
            Add New Product
          </Grid>
        </Grid>
      }
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} sx={classes.container}>
          <Grid item xs={12}>
            <LabeledTextField
              id="sku"
              name="sku"
              label="SKU"
              onChange={(value) => formik.setFieldValue("sku", value)}
              value={formik.values.sku}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <LabeledTextField
              id="productName"
              name="productName"
              label="Product Name"
              onChange={(value) => formik.setFieldValue("productName", value)}
              value={formik.values.productName}
            />
          </Grid>

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
            <input
              type="file"
              name="images"
              multiple
              onChange={handleFileChange}
              accept="image/*"
            />
            <Typography variant="body2" color="textSecondary">
              JPEG, PNG, SVG, or GIF (Maximum file size 50MB)
            </Typography>

            {/* Display image previews */}
            <Grid container spacing={2} sx={classes.previewContainer}>
              {previewImages.map((image, index) => (
                <Grid item key={index}>
                  <img
                    src={image}
                    alt={`Preview ${index}`}
                    style={{ width: "100px", height: "100px" }}
                  />
                </Grid>
              ))}
            </Grid>
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
