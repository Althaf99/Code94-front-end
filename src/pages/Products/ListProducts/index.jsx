import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Grid } from "@mui/material";
import { AddCircleOutlineOutlined, StarTwoTone } from "@mui/icons-material";

import PageLayout from "../../../components/PageLayout";
import SearchBar from "../../../components/SearchBar";
import DataTable from "../../../components/DataTable";

import useGetProducts from "../../../hooks/useGetProducts";

import styles from "./styles";
import ProductOptionalPanel from "./optionalPanel";

const ListProducts = () => {
  const classes = styles();
  const navigate = useNavigate();

  const [itemName, setItemName] = useState();
  const [favorites, setFavorites] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState();

  console.log("selectedProduct", selectedProduct);

  const itemNamesArray = [];

  const { data: products } = useGetProducts();
  let no = 0;
  products?.forEach((element) => {
    no = no + 1;
    element.no = no;
  });

  const handleCreateProduct = () => {
    navigate(`/addProduct`);
  };

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "PRODUCT_ID",
      accessor: "productId",
    },
    {
      Header: "Product Description",
      accessor: "productDescription",
    },
    {
      Header: "Quantity",
      accessor: "qty",
    },
    {
      Header: "No",
      accessor: "no",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
      width: "5%",
    },
    {
      Header: "SKU",
      accessor: "sku",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
      width: "20%",
    },
    {
      Header: "Image",
      accessor: "images",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
      width: "20%",
      Cell: ({ value }) => {
        // Display the first image if available
        if (value && value.length > 0) {
          return (
            <img
              src={`/${value[0]}`}
              alt="Product"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
          );
        } else {
          return <span>No Image</span>;
        }
      },
    },
    {
      Header: "Product Name",
      accessor: "productName",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
      width: "20%",
    },
    {
      Header: "Price",
      accessor: "price",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
      width: "20%",
    },
    {
      Header: "Actions",
      accessor: "actions",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
      width: "20%",
      Cell: ({
        cell: {
          row: { values },
        },
      }) => {
        return (
          <ProductOptionalPanel
            values={values}
            setSelectedProduct={setSelectedProduct}
            setFavorites={setFavorites}
          />
        );
      },
    },
  ];

  return (
    <PageLayout pageHeading={"Products"} pageActions={<>Hello</>}>
      <Grid item container justifyContent="space-between" xs={12}>
        <Grid item xs={3}>
          <SearchBar
            id="itemName"
            name="itemName"
            placeholder="Search for product"
            onChange={(value) => setItemName(value)}
            value={itemName}
            items={itemNamesArray}
          />
        </Grid>
        <Grid item>
          <Grid item container spacing={2}>
            <Grid item>
              <Button variant="contained" onClick={handleCreateProduct}>
                <AddCircleOutlineOutlined className={classes.plusIcon} />
                {"New Product"}
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained">
                <StarTwoTone className={classes.plusIcon} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.section} xs={12}>
        {products && (
          <DataTable
            columns={columns}
            hasNextPage={false}
            data={products}
            hiddenColumns={["id", "productId", "productDescription"]}
            maxHeightInRows={15}
            customProps={{ height: "565px" }}
            onClickTableRow={(index, row) => {}}
          />
        )}
      </Grid>
    </PageLayout>
  );
};

export default ListProducts;
