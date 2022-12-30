import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Box py={{ base: "6"}} bg="gray.100">
			<Container maxW="container.xl">
				<Text textAlign="center">
					Copyright &copy; OLPOTOOLS | All rights reserved.
				</Text>
			</Container>
		</Box>
	);
};

export default Footer;
