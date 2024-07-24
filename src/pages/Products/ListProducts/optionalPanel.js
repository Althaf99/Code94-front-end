import React, { useEffect, useState } from "react";
import axios from "axios";

import { Grid } from "@mui/material";
import DeleteIcon from "../../../icons/deleteIcon";
import EditIcon from "../../../icons/editIcon";
import StarIcon from "../../../icons/startIcon";
import StarredIcon from "../../../icons/starredIcon";

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

const ProductOptionalPanel = ({ values, setSelectedProduct }) => {
  // const deleteMutation = useDeletDeliveryNote({
  //   id: values?.id,
  // });

  const { mutateAsync: createFavorites } = useCreateFavorites();
  const { mutateAsync: deleteFavorites } = useDeletefavorites();

  const userId = useSelector((state) => state.roleManager.userId);

  console.log("userId", userId);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleDelete = async () => {
    // await deleteMutation.mutateAsync({});
  };
  const handleEdit = (values) => {
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
    </Grid>
  );
};

export default ProductOptionalPanel;
