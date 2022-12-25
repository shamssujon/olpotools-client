import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer/Footer";
import Navbar from "../sections/Navbar/Navbar";

const MainLayout = () => {
	return (
		<Flex direction="column" minHeight="100vh">
			<Navbar />
			<Box flexGrow="1">
				<Outlet />
			</Box>
			<Footer />
		</Flex>
	);
};

export default MainLayout;
