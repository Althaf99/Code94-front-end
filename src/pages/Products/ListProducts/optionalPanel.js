import React, { useEffect, useState } from "react";
import axios from "axios";

import { Grid } from "@mui/material";
import DeleteIcon from "../../../icons/deleteIcon";
import EditIcon from "../../../icons/editIcon";
import StarIcon from "../../../icons/startIcon";
import StarredIcon from "../../../icons/starredIcon";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../../../utils/favorites";
import { useSelector } from "react-redux";

// import useDeletDeliveryNote from "../../../hooks/services/useDeleteDeliveryNote";

import useCreateFavorites from "../../../hooks/useCreateFavorites";
import useDeletefavorites from "../../../hooks/useDeleteFavorites";
import useDeleteProduct from "../../../hooks/useDeleteProduct";
import AlertDialogBox from "../../../components/AlertDialogBox";
import { useNavigate } from "react-router-dom";

const ProductOptionalPanel = ({ values, setSelectedProduct }) => {
  const navigate = useNavigate();
  // const deleteMutation = useDeletDeliveryNote({
  //   id: values?.id,
  // });
  const [openDialogBox, setOpenDialogBox] = useState(false);

  console.log("productId", values.productId);
  const { mutateAsync: createFavorites } = useCreateFavorites();
  const { mutateAsync: deleteFavorites } = useDeletefavorites();
  const deleteMutation = useDeleteProduct({
    _id: values?._id,
  });

  const userId = useSelector((state) => state.roleManager.userId);

  const [isFavorite, setIsFavorite] = useState(false);
  const handleDelete = async () => {
    setOpenDialogBox(true);
  };
  const handleEdit = (values) => {
    navigate(`/addProduct`, {
      state: { productData: values },
    });
    setSelectedProduct(values);
  };
  const [favorites, setFavorites] = useState([]);

  const onFavoriteToggle = async (productId, isFavorite) => {
    const body = { userId: userId, productId: productId };
    if (isFavorite) {
      addFavorite(productId);
      // await createFavorites(body);
    } else {
      removeFavorite(productId);
      // await deleteFavorites(body);
    }
    setFavorites(getFavorites());
  };

  const handleMarkStart = (values) => {
    setIsFavorite(!isFavorite);
    onFavoriteToggle(values?.productId, !isFavorite);
  };

  const handleCloseDialogBox = () => {
    setOpenDialogBox(false);
  };
  const handleDeleteProduct = async () => {
    await deleteMutation.mutateAsync({});
  };

  return (
    <Grid container justifyContent="center">
      <Stack direction="row" spacing={1}>
        <IconButton
          sx={{
            "&.MuiIconButton-root": {
              color: "#DD5746",
            },
            "&:hover": {
              "&.MuiIconButton-root": {
                backgroundColor: "white",
              },
            },
          }}
          onClick={(e) => {
            handleDelete();
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          sx={{
            "&.MuiIconButton-root": {
              color: "#524C42",
            },
            "&:hover": {
              "&.MuiIconButton-root": {
                backgroundColor: "white",
              },
            },
          }}
          onClick={(e) => {
            handleEdit(values);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{
            "&.MuiIconButton-root": {
              color: "#524C42",
            },
            "&:hover": {
              "&.MuiIconButton-root": {
                backgroundColor: "white",
              },
            },
          }}
          onClick={(e) => {
            handleMarkStart(values);
          }}
        >
          {isFavorite ? <StarredIcon /> : <StarIcon />}
        </IconButton>
      </Stack>
      <AlertDialogBox
        open={openDialogBox}
        handleClose={handleCloseDialogBox}
        buttonCancelText="Cancel"
        title="ARE YOU SURE"
        content={<>You will not be able to undo this action if you proceed</>}
        handleOk={handleDeleteProduct}
        buttonConfirmText={"DELETE"}
        icon={
          <CheckCircleOutlineIcon
            style={{
              alignSelf: "center",
              width: "42px",
              height: "42px",
              position: "absolute",
              marginTop: "25px",
              color: "#FF7C7C",
            }}
          />
        }
      />
    </Grid>
  );
};

export default ProductOptionalPanel;
