import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

// custom toggle icon: displays a "+" then transitions to a "-" with animated rotation, removing the vertical line.
const ToggleIcon = styled(Box, {
	shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
	position: "relative",
	width: "25px",
	height: "25px",
	cursor: "pointer",
	"&:before, &:after": {
		content: '""',
		display: "block",
		backgroundColor: "#333",
		position: "absolute",
		top: "50%",
		left: 0,
		width: "100%",
		height: "3px",
		transition: "0.35s",
	},
	"&:before": {
		transform: active
			? "translateY(-50%) rotate(-90deg)"
			: "translateY(-50%)",
		opacity: active ? 0 : 1,
	},
	"&:after": {
		transform: active
			? "translateY(-50%) rotate(0)"
			: "translateY(-50%) rotate(90deg)",
		opacity: 1,
	},
}));

export const NavBar = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen((prev) => !prev);
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	// navigation links list
	const navLinks = (
		<Box
			component="ul"
			sx={{
				listStyle: "none",
				m: 0,
				p: theme.spacing(3),
				textAlign: "center",
				display: "flex",
				flexDirection: "column",
				gap: 5,
			}}
		>
			<Box component="li" sx={{ py: 1 }}>
				<NavLink
					to="/works"
					style={{
						textDecoration: "none",
						color: "#000",
						fontSize: "2rem",
						fontFamily: "Regular",
					}}
					onClick={() => setMenuOpen(false)}
				>
					Works
				</NavLink>
			</Box>
			<Box component="li" sx={{ py: 1 }}>
				<NavLink
					to="/about"
					style={{
						textDecoration: "none",
						color: "#000",
						fontSize: "2rem",
						fontFamily: "Regular",
					}}
					onClick={() => setMenuOpen(false)}
				>
					About
				</NavLink>
			</Box>
			<Box component="li" sx={{ py: 1 }}>
				<NavLink
					to="/illustrations"
					style={{
						textDecoration: "none",
						color: "#000",
						fontSize: "2rem",
						fontFamily: "Regular",
					}}
					onClick={() => setMenuOpen(false)}
				>
					Illustrations
				</NavLink>
			</Box>
		</Box>
	);

	return (
		<Box sx={{ width: "100%" }}>
			{/* Navbar fixed sempre in alto */}
			<Box
				sx={{
						height: "100px",
						bgcolor: isHomePage ? "transparent" : "#FFF", // Trasparente solo sulla homepage
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						px: 2,
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						zIndex: 3000,
						transition: "background-color 0.3s ease", // Transizione smooth
				}}
			>
				{/* Logo */}
				<Box>
					<NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
						<img
							src="/images/ONN_LOGO.png"
							alt="Logo"
							style={{ height: "80px", aspectRatio: "1/1" }}
						/>
					</NavLink>
				</Box>

				{/* desktop Navigation */}
				{!isMobile && (
					<Box
						sx={{
							display: "flex",
							gap: 4,
							alignItems: "center",
							"& a": { 
									textDecoration: "none", 
									color: isHomePage ? "#FFF" : "inherit" // Testo bianco sulla homepage
							},
							"& a:hover": {
									fontStyle: "italic",
							},
							fontSize: theme.typography.navigation.fontSize,
							fontFamily: theme.typography.navigation.fontFamily,
						}}
					>
						<NavLink to="/works">Works</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/illustrations">Illustrations</NavLink>
					</Box>
				)}

				{/* toggle Icon mobile */}
				{isMobile && <ToggleIcon active={menuOpen} onClick={toggleMenu} />}
			</Box>

			{/* placeholder space - solo se NON siamo sulla homepage */}
			{!isHomePage && <Box sx={{ height: "100px" }} />}

			{/* overlay Mobile */}
			{isMobile && (
				<Box
					sx={{
						position: "fixed",
						top: "100px",
						left: 0,
						right: 0,
						bottom: 0,
						bgcolor: "#FFF",
						zIndex: 2000,
						overflowY: "auto",
						transition: "transform 0.5s ease",
						transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
					}}
				>
					<Box
						sx={{
							height: "calc(100% - 100px)",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{navLinks}
					</Box>
				</Box>
			)}
		</Box>
	);
};