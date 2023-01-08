import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

const Blog = () => {
	return (
		<Box py={{ base: "12", md: "20" }}>
			<Container maxW="container.xl">
				<Box maxW="4xl" mx="auto">
					<Box textAlign="center">
						<Heading as="h1" size="2xl">
							Blog coming soon
						</Heading>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Blog;
