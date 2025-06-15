import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
		background: {
			main: "#0f0b0b",
		},
  },
	text: {
		main: "#000",
		secondary: "#fff",
	},
	typography: {
		navigation: {
			fontFamily: "Light",
			fontSize: "1.2rem",
		},
	}
});