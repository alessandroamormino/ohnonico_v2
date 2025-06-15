import { StateProvider } from '@/context';
import { Outlet } from 'react-router-dom';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";

export const Root = () => {
	const theme = useTheme();
	return (
		<>
			<StateProvider>
				<Box
					sx={{
							display: 'flex',
							flexDirection: 'column',
							minHeight: '100vh',
					}}
				>
					<Box sx={{ position: 'relative', zIndex: 1 }}>
						<NavBar />
					</Box>
					<Box sx={{ flex: 1, backgroundColor: theme.palette.background.main }}>
						<Outlet />
					</Box>
					<Box sx={{ position: 'relative', zIndex: 0 }}>
						<Footer />
					</Box>
				</Box>
			</StateProvider>
		</>
	)
}