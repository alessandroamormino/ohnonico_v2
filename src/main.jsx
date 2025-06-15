import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { routes } from '@/routing';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={routes} />
		</ThemeProvider>
	</StrictMode>
);
