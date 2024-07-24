import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "757px",
          height: "64px",
          gap: "0px",
          borderRadius: "50",
          opacity: "0px",
        },
      },
    },
  },
});

export default theme;
