import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SnackbarProvider } from "notistack";

import { QueryClient, QueryClientProvider } from "react-query";

import { Provider } from "react-redux";
import store from "./components/App/store";

import theme from "./themes/default";
import { ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Provider store={store}>
            <App />
          </Provider>
        </SnackbarProvider>
      </ThemeProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
