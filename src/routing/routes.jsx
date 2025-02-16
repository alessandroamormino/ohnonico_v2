import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "@routing";
import { ErrorPage } from "@views";

export const routes = createBrowserRouter([
	{
		elemento : <Root />,
		errorElement:<ErrorPage/>,
		children: [
			{
				path: '/',
				element: <HomePage />
			}
		]
	}
])