import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Blog from "../components/pages/Blog/Blog";
import HomePage from "../components/pages/HomePage/HomePage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
		],
	},
]);
