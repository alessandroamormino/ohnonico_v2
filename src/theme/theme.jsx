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
	},
	components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined-custom' },
          style: {
            textDecoration: 'none',
            color: '#000000',
            fontFamily: 'SemiBold',
            borderRadius: '1.5rem',
            padding: '.5rem 2rem',
            background: '#ffffff',
            border: '2px solid #000000',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            width: '200px',
            '&:hover': {
              background: '#000000',
              color: '#ffffff',
              border: '2px solid #000000',
            }
          }
        }
      ]
    }
  }
});