import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Blog from "../components/pages/Blog/Blog";
import HomePage from "../components/pages/HomePage/HomePage";
import TimeZoneConverterPage from "../components/pages/TimeZoneConverter/TimeZoneConverterPage";

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
				path: "/timezone-converter",
				element: <TimeZoneConverterPage />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
		],
	},
]);
