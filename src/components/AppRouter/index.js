import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import ListProducts from "../../pages/Products/ListProducts";
import AddProduct from "../../pages/Products/CreateProduct";
import Authentication from "../Authentication";
const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Authentication />} />
        <Route path="listProducts" element={<ListProducts />} />
        <Route path="addProduct" element={<AddProduct />} />
      </>
    )
  );
  return { router };
};

export { AppRouter };
