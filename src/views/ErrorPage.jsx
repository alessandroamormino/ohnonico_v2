import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				textAlign: "center",
			}}
		>
			<Typography variant="h1" gutterBottom>
					404
			</Typography>
			<Typography variant="h6" gutterBottom>
					Page Not Found
			</Typography>
			<Button variant="contained" sx={{borderRadius: 0, backgroundColor: "#000", py: 1, px: 2}} component={NavLink} to="/">
					Torna alla home
			</Button>
		</Box>
	);
}