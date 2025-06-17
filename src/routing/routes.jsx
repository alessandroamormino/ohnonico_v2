import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "@/routing";
import { ErrorPage, HomePage, ShowreelPage, AboutPage } from "@/views";

export const routes = createBrowserRouter([
	{
		element : <Root />,
		errorElement: <ErrorPage/>,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/showreel',
				element: <ShowreelPage />
			},
			{
				path: '/about',
				element: <AboutPage />
			}
		]
	}
]);